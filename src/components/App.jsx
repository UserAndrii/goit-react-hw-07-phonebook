import { useSelector } from 'react-redux';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Loader from './Loader';

import { selectIsLoading, selectErrors } from '../redux/selectors';
import { Wrapper, Title, SecondTitle } from './App.styled';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrors);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </Wrapper>
  );
};

export default App;
