import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function reset() {
    setName("");
    setNumber("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !number) {
      return;
    }

    onFormSubmit({ name, number });
    reset();
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} container shadow`}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          value={name}
          name="name"
          required
          onChange={({ target }) => setName(target.value)}
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          name="number"
          required
          value={number}
          onChange={({ target }) => setNumber(target.value)}
          // placeholder="Enter a phone number"
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
