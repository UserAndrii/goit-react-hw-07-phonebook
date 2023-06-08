import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/selectors';
import { filteredContacts } from 'redux/filtersSlice';
import { Wrapper, Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onChangeFilter = ({ target: { value } }) => {
    dispatch(filteredContacts(value.toLowerCase()));
  };

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        id="filter"
        value={filterValue}
        onChange={onChangeFilter}
      />
    </Wrapper>
  );
};

export default Filter;
