import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { Wrapper, Title, SecondTitle } from './App.styled';

const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

export default App;
