import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ContactListItem from '../ContactListItem/ContactListItem';
import slideFromLeftTransition from '../../transitions/slideFromLeft.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <TransitionGroup component="ul">
    {contacts.map((contact) => (
      <CSSTransition
        key={contact.id}
        timeout={200}
        unmountOnExit
        classNames={slideFromLeftTransition}
      >
        <li>
          <ContactListItem contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;