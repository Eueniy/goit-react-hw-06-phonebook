import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import * as Storage from "../../services/localStorage";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactListContainer";
import Filter from "../Filter/FilterContainer";
import Notification from "../Notification/Notification";
import styles from "./PhoneBook.module.css";
import slideFromRightTransition from "../../transitions/slideFromRight.module.css";
import slideFromLeftTransition from "../../transitions/slideFromLeft.module.css";
import popTransition from "../../transitions/contacts.module.css";
import "normalize.css";

function PhoneBook({ contacts, filter, onAddContact, fetchContacts }) {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const contactsLS = Storage.getContactsFromLS();
    if (contactsLS) {
      fetchContacts(contactsLS);
    }
  }, [fetchContacts]);

  useEffect(() => {
    Storage.saveContactsToLS(contacts);
  }, [contacts]);

  const handleFormSubmit = (formData) => {
    const contactToAdd = {
      id: uuidv4(),
      name: formData.name,
      number: formData.number,
    };

    if (contacts.find((contact) => contact.name === contactToAdd.name)) {
      setMessage("Contact already exists!");
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return;
    }

    onAddContact(contactToAdd);
  };

  return (
    <div className="container">
      <CSSTransition
        in={showMessage}
        timeout={200}
        classNames={slideFromRightTransition}
        unmountOnExit
      >
        <Notification message={message} />
      </CSSTransition>

      <CSSTransition
        in
        appear
        timeout={500}
        classNames={slideFromLeftTransition}
      >
        <h1 className={styles.title}>Phonebook</h1>
      </CSSTransition>

      <ContactForm onFormSubmit={handleFormSubmit} />
      <CSSTransition
        in={contacts.length > 1 || filter.length > 0}
        timeout={200}
        classNames={popTransition}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <ContactList />
    </div>
  );
}

PhoneBook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onAddContact: PropTypes.func.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};

export default PhoneBook;
