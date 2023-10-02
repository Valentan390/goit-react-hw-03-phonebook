import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './section/Section';
import { FormaContacts } from './formaContacts/FormaContacts';
import { Filter } from './filter/Filter';
import { Contacts } from './contacts/Contacts';

const CONTACTS_LOCAL_sTORAGE_KEY = 'BI8886EB';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  componentDidMount() {
    const localData = JSON.parse(
      localStorage.getItem(CONTACTS_LOCAL_sTORAGE_KEY)
    );
    if (localData) {
      this.setState({ contacts: localData });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(
        CONTACTS_LOCAL_sTORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  andleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  hendleChangeFilter = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  hendleSubmit = event => {
    event.preventDefault();
    const { contacts, name, number } = this.state;
    if (
      contacts.some(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: prevState.contacts.concat({ name, number, id: nanoid() }),
      name: '',
      number: '',
    }));
    console.log('Name:  ', this.state.name);
  };

  applyFilters() {
    let filteredContacts = [...this.state.contacts];
    const { filter } = this.state;
    filteredContacts = filteredContacts.filter(({ name }) =>
      name.toUpperCase().includes(filter.toUpperCase().trim())
    );
    return filteredContacts;
  }

  render() {
    const filteredContacts = this.applyFilters();
    return (
      <>
        <Section title={'Phonebook'}>
          <FormaContacts
            handleChange={this.handleChange}
            hendleSubmit={this.hendleSubmit}
            value={this.state.name}
            number={this.state.number}
          />
        </Section>
        <Section title={'Contacts'}>
          <Filter
            filter={this.state.filter}
            onChange={this.hendleChangeFilter}
          />
          <Contacts
            contacts={filteredContacts}
            onDeleteContact={this.andleDeleteContact}
          />
        </Section>
      </>
    );
  }
}
