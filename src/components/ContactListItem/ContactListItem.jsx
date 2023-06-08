import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { Item, Name, Number, Button } from './ContactListItem.styled';

// import { useDeleteContactMutation } from 'redux/contactsServiceApi';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  // const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

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
        // onClick={() => deleteContact(id)}
        // disabled={isDeleting}
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
