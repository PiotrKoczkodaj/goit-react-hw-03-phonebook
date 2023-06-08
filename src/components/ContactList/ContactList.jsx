import { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { state } = this.props;
    const itemToIterate = () => {
      if (JSON.parse(localStorage.getItem('Persons')) === null) {
        return state.contacts;
      } else {
        return JSON.parse(localStorage.getItem('Persons'));
      }
    };
    return (
      <div>
        {itemToIterate()
          .filter(contact => contact.name.includes(state.filter.toUpperCase()))
          .map(contact => (
            <p key={nanoid()}>
              {contact.name}
              {''}
              {contact.number}
              <button
                onClick={e => {
                  let index = state.contacts.indexOf(contact);
                  this.setState(state.contacts.splice(index, 1));
                  let localStoragePersons = JSON.parse(
                    localStorage.getItem('Persons')
                  );
                  localStoragePersons.map(person => {
                    if (person.name === e.currentTarget.value) {
                      let index = localStoragePersons.indexOf(person);
                      localStoragePersons.splice(index, 1);
                      localStorage.setItem(
                        'Persons',
                        JSON.stringify(localStoragePersons)
                      );
                    }
                    return null;
                  });
                }}
                value={contact.name}
              >
                delete
              </button>
            </p>
          ))}
      </div>
    );
  }
}
ContactList.propTypes = {
  state: propTypes.object.isRequired,
};
