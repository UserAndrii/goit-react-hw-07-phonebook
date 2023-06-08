import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Form, Label, Input, Button } from './ContactForm.styled';

// import {
//   useAddContactMutation,
//   useFetchContactsQuery,
// } from 'redux/contactsServiceApi';
// import Loader from '../Loader';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // const [addContact, { isLoading: additionContact }] = useAddContactMutation();
  // const { data: contacts } = useFetchContactsQuery();

  const onFormSubmit = e => {
    e.preventDefault();
    const { name, phone } = e.currentTarget.elements;

    if (onDuplicateCheck(name.value)) {
      toast.error(`${name.value} is already in contacts`);
      e.currentTarget.reset();
      name.focus();
      return;
    }

    dispatch(addContact({ name: name.value, phone: phone.value }));
    // addContact({ name: name.value, phone: phone.value });

    e.currentTarget.reset(name.value, phone.value);
  };

  const onDuplicateCheck = name => {
    return contacts.some(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <Form onSubmit={onFormSubmit} autoComplete="off">
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label htmlFor="phone">
        Number
        <Input
          type="tel"
          name="phone"
          id="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">
        Add contact
        {/* {additionContact && <Loader width={'20'} />} */}
      </Button>
    </Form>
  );
};

export default ContactForm;
