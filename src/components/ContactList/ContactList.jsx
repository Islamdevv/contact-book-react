import React from 'react';
import './ContactList.css'
const ContactList = (props) => {
    return (
            <div className='todoList'>
                <h2>Contacts</h2>
                       {props.contacts.map((contact, index) => (
                        <div className='contacts' key={`${contact.firstName} ${contact.surname}`}>
                            <p>Name: {contact.name}</p>
                            <p>Surname: {contact.surname}</p>
                            <p>Number: {contact.number}</p>
                            <div className='btndIv'>
                                <button onClick={() => props.editContacts(index)}>edit</button>
                                <button onClick={() => props.deleteContact(contact.id)}>delete</button>
                            </div>
                        </div>
                    ))}
                    </div>
                    );
                    };

export default ContactList;