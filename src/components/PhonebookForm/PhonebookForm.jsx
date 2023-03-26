import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { PhonebookStyled } from './PhonebookForm.styled';
class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = { ...this.state, id: shortid.generate() };
    this.props.addContact(contact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <PhonebookStyled>
        <form className="phonebook-form" onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId} className="phonebook-form__name">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className="phonebook-form__input"
              value={name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.tagInputId} className="phonebook-form__name">
            Number
            <input
              type="tel"
              name="number"
              className="phonebook-form__input"
              onChange={this.handleChange}
              value={number}
              id={this.tagInputId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" className="phonebook-form__button">
            Add contact
          </button>
        </form>
      </PhonebookStyled>
    );
  }
}

export default PhonebookForm;

PhonebookForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
