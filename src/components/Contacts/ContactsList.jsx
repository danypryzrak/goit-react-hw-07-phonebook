import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelector';
import { deleteContactThunk } from 'redux/contacts/contactsThunk';

const ContactsList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    
return (
    <>
    <ul className=''>
        {contacts.length ? (
        contacts.map(contact => (
            <li key={contact.id} className=''>
            <p>
                <span>{contact.name}:{contact.phone}</span>
            </p>
            <button
                type="button"
                onClick={() => dispatch(deleteContactThunk(contact, contact.id))}
                className=''
            >
                Delete
            </button>
            </li>
        ))
        ) : (
        <p>There are no contacts here</p>
        )}
    </ul>
    </>
);
};

export default ContactsList

