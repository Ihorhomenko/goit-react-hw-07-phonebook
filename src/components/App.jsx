import { useEffect } from "react";
import PhoneRegBook from "./PhoneBook/phoneRegBook";
import Contacts from "./contacts/contacts";
import Filter from "./filter/filter";
import { useSelector } from "react-redux";

import { fetchContacts } from "redux/contactsOperations";
import { useDispatch } from "react-redux";


export const App = () => {
  const normalazeFilter = useSelector(state => state.filter).toLowerCase();
  const visibleContacts = useSelector(state => state.contacts.items.filter(contact => contact.name.toLowerCase().includes(normalazeFilter)))
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchContacts())
}, [dispatch]);

  return (
    <div>
        <section className='phonebook'>
        <h2>Phonebook</h2>
        <div className="phone-reg-book">
          <PhoneRegBook />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter onFilter={useSelector(state => state.contacts.filter)} />
          <Contacts contacts={visibleContacts}/>
        </div>
        </section>
      </div>
  );
};

// // .filter(contact =>
// contact.name.toLowerCase().includes(normalazeFilter)
