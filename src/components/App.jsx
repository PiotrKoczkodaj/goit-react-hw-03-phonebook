import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  render() {
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      const nameValue = form.elements[0].value;
      const number = form.elements[1].value;

      this.setState({
        contacts: [
          ...this.state.contacts,
          {
            name: nameValue,
            id: nanoid(),
            number: number,
          },
        ],
        filter: '',
      });

      return this.state.contacts.map(contact => {
        if (contact.name === nameValue) {
          this.setState({
            contacts: this.state.contacts,
          });
          return alert(`${nameValue} is already in contacts`);
        }
        return null;
      });
    };

    const filterUsers = e => {
      this.setState({
        filter: e.target.value.toUpperCase(),
      });
    };

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm submit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter filerUsers={filterUsers} />
        <ContactList state={this.state} />
      </div>
    );
  }
}
