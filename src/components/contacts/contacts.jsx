import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsOperations';
import './contacts.css'

const Contacts = ({ contacts }) => {
  const dispatch = useDispatch()
  return (
    <ul className='contacts-list'>
      {contacts.map(el => (
        <li className='contacts-item' key={el.id}> 
        {`${el.name}: ${el.phone}`}
        <button className='contacts-btn' type='button' onClick={() => dispatch(removeContact(el.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
// 

export default Contacts