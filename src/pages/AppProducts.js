import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductService from '../services/ProductService';

export default function AppProducts() {
    const [products, setProducts] = useState(ProductService.getAll());
    const [filter, setFilter] = useState("");

    return (
        <div>
            <input
                value={filter}
                placeholder='Filter'
                onChange={(e) => {
                    setFilter(e.target.value);
                    console.log(filter);
                }
                }
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Number available</th>
                    </tr>
                </thead>
                <tbody>

                    {products.filter(product => product.name.startsWith(filter)).map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.manufacturer}</td>
                            <td>{product.numAvailable ? (product.numAvailable) : ("None")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}