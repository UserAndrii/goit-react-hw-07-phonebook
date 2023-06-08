import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import ContactListItem from '../ContactListItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};

export default ContactList;
