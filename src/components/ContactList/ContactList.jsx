import { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';

export class ContactList extends Component {

  // componentDidUpdate = () => {

  //   let PersonsInStorage = localStorage.getItem('Persons');
  //   JSON.parse(PersonsInStorage).map(person => {
  //     if (person.id === this.state[0].id) {
  //      localStorage.removeItem(this.state[0])
  //    }
  //   })
   


    
  // }
  render() {
    const { state } = this.props;

    return (
      <div>
        {state.contacts
          .filter(contact => contact.name.includes(state.filter.toUpperCase()))
          .map(contact => (
            <p key={nanoid()}>
              {contact.name}
              {''}
              {contact.number}
              <button
                onClick={(e) => {
                  let index = state.contacts.indexOf(contact);
                  this.setState(state.contacts.splice(index, 1));
                  
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
