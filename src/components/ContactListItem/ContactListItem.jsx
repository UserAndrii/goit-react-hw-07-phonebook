import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Item, Name, Number, Button } from './ContactListItem.styled';
import { deleteContact } from 'redux/phonebookSlice';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <div>
        <Name>{name}: </Name>
        <Number>{phone}</Number>
      </div>
      <Button
        type="button"
        aria-label="delete"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default ContactListItem;
