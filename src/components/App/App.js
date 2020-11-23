import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { CSSTransition } from "react-transition-group";
import Filter from "./../Filter/Filter";
import ContactList from "./../ContactList/ContactList";
import ContactForm from "./../ContactForm/ContactForm";
import Notification from "../Notification/Notification";
import styles from "./App.module.css";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    message: "",
    alertMessage: false,
  };

  componentDidMount() {
    const persistantContacts = localStorage.getItem("contacts");
    if (persistantContacts) {
      this.setState({
        contacts: JSON.parse(persistantContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  onSubmitData = (e) => {
    const { contacts } = this.state;

    const addContact = {
      id: uuid(),
      name: e.name,
      number: e.number,
    };
    if (contacts.find((contact) => contact.name === addContact.name)) {
      this.setState({
        alertMessage: true,
        message: `Contact ${addContact.name} already exists!`,
      });
      setTimeout(() => {
        this.setState({ alertMessage: false });
      }, 2000);
      return;
    }
    this.setState({
      contacts: [...contacts, addContact],
    });
  };

  onDeleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  changeFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter, alertMessage, message } = this.state;
    const visibleContacts = this.getFilteredContacts();
    return (
      <>
        <div className={styles.container}>
          <CSSTransition
            in
            appear
            timeout={500}
            classNames={styles}
            unmountOnExit
          >
            <h1 className={styles.logo}>Phonebook</h1>
          </CSSTransition>
          <CSSTransition
            in={alertMessage}
            timeout={500}
            classNames={styles}
            unmountOnExit
          >
            <Notification message={message} />
          </CSSTransition>
          <ContactForm onSubmitData={this.onSubmitData} />
          <CSSTransition
            in={contacts.length > 1}
            timeout={250}
            classNames={styles}
            unmountOnExit
          >
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          </CSSTransition>
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.onDeleteContact}
          />
        </div>
      </>
    );
  }
}
