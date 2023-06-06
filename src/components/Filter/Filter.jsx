import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/phonebookSlice';
import { Wrapper, Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  const onChangeFilter = ({ currentTarget: { value } }) => {
    dispatch(filterContacts(value));
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
