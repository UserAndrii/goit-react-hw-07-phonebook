import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';

import { addContacts } from 'redux/phonebookSlice';
import { getContacts } from 'redux/selectors';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;

    if (onDuplicateCheck(name.value)) {
      Notiflix.Notify.failure(`${name.value} is already in contacts`);
      e.currentTarget.reset();
      name.focus();
      return;
    }

    dispatch(addContacts(name.value, number.value));

    e.currentTarget.reset();
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

      <Label htmlFor="number">
        Number
        <Input
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
