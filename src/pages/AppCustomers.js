import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function AppCustomers() {
    const [customers, setCustomers] = useState([
        { id: 1, company: "Arctos inc", name: "Djole Djinic", dateOfRegistration: new Date() },
        { id: 2, company: "Canis DOO", name: "Kole Krcati", dateOfRegistration: new Date() },
        { id: 3, company: "Panthera & co", name: "Marko Merani", dateOfRegistration: new Date() },
        { id: 4, company: "Panthera & Panthera", name: "Konstantin Kelj", dateOfRegistration: new Date() },
        { id: 5, company: "Lynx United", name: "Rinoslav Rogonja", dateOfRegistration: new Date() },
        { id: 6, company: "Marin SZTR", name: "Rinoslav Rogonja", dateOfRegistration: new Date() },
        { id: 7, company: "Karin Privreda", name: "Rinoslav Rogonja", dateOfRegistration: new Date() }
    ]);
    const [count, setCount] = useState(7);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const [newCustomer, setNewCustomer] = useState({
        id: count,
        company: '',
        name: '',
        dateOfRegistration: new Date()
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setCustomers([...customers, { ...newCustomer }]);

        setNewCustomer({
            id: count,
            company: '',
            name: '',
            dateOfRegistration: new Date()
        });
    };

    const handleDelete = (deleteIndex) => {
        // setCustomers(customers.filter((el, index) => index !== deleteIndex));
        var updatedCustomers = [...customers];
        var indexToRemove = updatedCustomers.findIndex(x => x.id == deleteIndex);
        if (indexToRemove > -1) {
            updatedCustomers.splice(indexToRemove, 1)
            setCustomers(updatedCustomers);
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Date of registration</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.company}</td>
                            <td>{customer.name}</td>
                            <td>{customer.dateOfRegistration ? (customer.dateOfRegistration.toISOString()) : ("Unknown")}</td>
                            <td>
                                <button onClick={() => handleDelete(customer.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <form
                style={{ display: 'flex', flexDirection: 'column', marginBottom: 25 }}
                onSubmit={handleSubmit}
            >
                <input
                    value={newCustomer.company}
                    placeholder='Company'
                    onChange={(e) =>
                        setNewCustomer({ ...newCustomer, company: e.target.value })
                    }
                />
                <input
                    value={newCustomer.name}
                    placeholder='Name'
                    onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                />
                <input
                    onChange={(e) => {
                        console.log(e.target.value);
                        setNewCustomer({
                            ...newCustomer,
                            dateOfRegistration: new Date(e.target.value),
                        });
                    }}
                    value={
                        newCustomer.dateOfRegistration
                            ? newCustomer.dateOfRegistration.toISOString().substr(0, 10)
                            : ''
                    }
                    type='date'
                    placeholder='Date of registration'
                />
                <button onClick={increaseCount}>Add new customer</button>
            </form>
        </div>
    );
}