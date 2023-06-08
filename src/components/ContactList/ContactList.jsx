import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import ContactListItem from '../ContactListItem';
import { List } from './ContactList.styled';

// import { selectFilter } from 'redux/selectors';
// import { useFetchContactsQuery } from 'redux/contactsServiceApi';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const { data: contacts } = useFetchContactsQuery();
  // const filterValue = useSelector(selectFilter);

  return (
    <List>
      {contacts &&
        contacts
          // .filter(contact => contact.name.toLowerCase().includes(filterValue))
          // .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} phone={phone} />
          ))}
    </List>
  );
};

export default ContactList;
