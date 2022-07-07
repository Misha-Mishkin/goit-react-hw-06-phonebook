import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    const existContact = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(name.toLowerCase());
    });

    if (existContact.length > 0) {
      alert(`${name}, is already in your contacts`);
      return;
    }

    setContacts(stateContacts => [
      ...stateContacts,
      { id: nanoid(5), name, number },
    ]);
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContact = () =>
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} inputFilterContact={filterContacts} />
      <ContactList
        contacts={visibleContact()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
