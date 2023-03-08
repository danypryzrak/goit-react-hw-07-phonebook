import Form from "./Form/Form";
import { nanoid } from "nanoid";
import ContactsList from 'components/Contacts/ContactsList'
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectIsLoader } from "../redux/contacts/contactsSelector";
import { addContactThunk, fetchContactsThunk } from "redux/contacts/contactsThunk";
import { useEffect } from "react";
import { Loader } from "./Loader/Loader";

export const App = () =>{

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoader);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleSubmit = ({ name, phone }) => {
    const contact = {
      name,
      phone,
      id: nanoid(),
    };
    dispatch(addContactThunk(contact));
  };



    return (
      <>
        <h1>Phonebook</h1>
        <Form handleSubmit={handleSubmit} />

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

  // return (
  //   <>
  //     <h1>Phonebook</h1>
  //     <ContactForm onSubmit={handleAddContact} />
  //     <h2>Contacts</h2>
  //     <div>
  //       <p>
  //         All contacts: {isLoading ? <Loader /> : contacts.length}
  //       </p>
  //     </div>
  //     <Filter value={filtered} onChange={handleChangeFilter} />
  //     {error ? 'can`t load data, please check connection' :
  //       <ContactList
  //         contacts={contacts}
  //         onRemoveContact={handleRemoveContact}
  //       />}
  //   </>
  // );
