import React, { useState } from 'react';
import { BrowserRouter as Router, useParams, Switch, Route, Link } from 'react-router-dom';
import CustomerService from '../services/CustomerService';

export default function LatestPurchases() {
    let { id } = useParams();
    let customer = CustomerService.get(id);

    return (
        <div>
            <h2>{customer.name}</h2>
            <h3>From the company {customer.company}</h3>
            <h3>Added on {customer.dateOfRegistration.toLocaleDateString()}</h3>

        </div>
    )
}