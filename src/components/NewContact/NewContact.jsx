import React, { useState } from 'react';
import './NewContact.css';

const NewContact = ({ handleContact }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleSurname = (e) => {
        setSurname(e.target.value);
    };
    const handleNumber = (e) => {
        setNumber(e.target.value);
    };
    const handleAdd = () => {
        let newContact = {
            name: name,
            surname: surname,
            number: number,
            id: Date.now(),
        };
        handleContact(newContact);
        setName('');
        setSurname('');
        setNumber('');
    };
    return (
        <div className="newContact">
            <h2>Create Contact</h2>
            <div>
                <p>Name</p>
                <input type="text" placeholder="Name" onChange={handleName} />
            </div>
            <div>
                <p>Surname</p>
                <input type="text" placeholder="Surname" onChange={handleSurname} />
            </div>
            <div>
                <p>Number</p>
                <input type="text" placeholder="Number" onChange={handleNumber} />
            </div>
            <button className='btnAdd' onClick={handleAdd}>Add Contact</button>
        </div>
    );
};

export default NewContact;