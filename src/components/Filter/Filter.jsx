import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { selectIsLoading, selectErrors } from 'redux/selectors';
import { filteredContacts } from 'redux/filtersSlice';
// import { useFetchContactsQuery } from 'redux/contactsServiceApi';

import Loader from '../Loader';
import { Wrapper, Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrors);

  // const { isFetching: isLoading, error } = useFetchContactsQuery();

  const onChangeFilter = ({ target: { value } }) => {
    dispatch(filteredContacts(value.toLowerCase()));
  };

  return (
    <Wrapper>
      <div>
        <Label htmlFor="filter">Find contacts by name</Label>
        <Input
          type="text"
          name="filter"
          id="filter"
          value={filterValue}
          onChange={onChangeFilter}
        />
        {error && (
          <b style={{ color: '#bfc0c0' }}>
            Opps..., please try to refresh the page
          </b>
        )}
      </div>
      {isLoading && !error && <Loader />}
    </Wrapper>
  );
};

export default Filter;
