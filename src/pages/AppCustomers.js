import React, { useState } from 'react';
import { BrowserRouter as Router, useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import CustomerService from '../services/CustomerService';

export default function AppCustomers() {
    const [customers, setCustomers] = useState(CustomerService.getAll());


    const [newCustomer, setNewCustomer] = useState({
        id: CustomerService.id,
        company: '',
        name: '',
        dateOfRegistration: new Date()
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        CustomerService.create(newCustomer)
        setCustomers(CustomerService.getAll())

        setNewCustomer({
            company: '',
            name: '',
            dateOfRegistration: new Date()
        });
    };

    const handleDelete = (deleteIndex) => {
        CustomerService.delete(deleteIndex);
        setCustomers(CustomerService.getAll())
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
                            <td>
                                <Link to={`/customers/${customer.id}`}>Latest Purchases</Link>
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
                <button>Add new customer</button>
            </form>
        </div>
    );
}