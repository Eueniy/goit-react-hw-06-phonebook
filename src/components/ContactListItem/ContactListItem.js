import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

const ContactElement = ({ contact, onDeleteContact }) => (
  <div className={`${styles.contactElement} container shadow`}>
    <div className={styles.contactContainer}>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
    </div>
    <button
      onClick={() => onDeleteContact(contact.id)}
      className={styles.deleteBtn}
      type="button"
    >
      ✕
    </button>
  </div>
);

ContactElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactElement;
