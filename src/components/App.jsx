import Form from "./Form/Form";
import ContactsList from 'components/Contacts/ContactsList'
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectIsLoader } from "../redux/contacts/contactsSelector";
import { fetchContactsThunk } from "redux/contacts/contactsThunk";
import { useEffect } from "react";
import { Loader } from "./Loader/Loader";

export const App = () =>{

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoader);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
      <>
        <h1>Phonebook</h1>
        <Form />

        <h2>Contacts</h2>

        <div>
          <p>
            All contacts: {isLoading ? <Loader /> : contacts.length}
          </p>
        </div>
        <Filter/>
        <ContactsList/>
    </>
    )
  }
