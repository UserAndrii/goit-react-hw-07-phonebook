import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import ContactListItem from '../ContactListItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filteredList = useSelector(getFilter);

  return (
    <List>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filteredList.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            phone={number}
          ></ContactListItem>
        ))}
    </List>
  );
};

export default ContactList;
