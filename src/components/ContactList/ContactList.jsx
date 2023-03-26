import React from 'react';
import PropTypes from 'prop-types';
import { ContactListStyled } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactListStyled>
    {contacts.map(({ name, number, id }) => {
      return (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className="ContactList__btn"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      );
    })}
  </ContactListStyled>
);
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
