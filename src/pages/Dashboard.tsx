import { Customer } from "../models/Customer.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store.tsx";
import { useEffect } from "react";
import { getCustomers } from "../reducers/CustomerReducer.ts";
import { getItems } from "../reducers/ItemReducer.ts";
import { Item } from "../models/Item.ts";
import "../assets/style.css"; // Import the custom CSS file

export function Dashboard() {
    const dispatch = useDispatch<AppDispatch>();

    const customers = useSelector((state) => state.customer);
    const items = useSelector((state) => state.item);

    useEffect(() => {
        if (customers.length === 0) {
            dispatch(getCustomers());
        }
    }, [dispatch, customers.length]);

    useEffect(() => {
        if (items.length === 0) {
            dispatch(getItems());
        }
    }, [dispatch, items.length]);

    return (
        <div className="dashboard">
            {/* Header */}
            <header className="header">
                <h1>Dashboard</h1>
            </header>

            <main className="main">
                {/* Customers Section */}
                <section className="section">
                    <h2 className="section-title">Customers</h2>
                    <div className="table-container">
                        <table className="table">
                            <thead className="table-header">
                            <tr>
                                <th className="table-header-cell">Name</th>
                                <th className="table-header-cell">Email</th>
                                <th className="table-header-cell">Phone</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((customer: Customer) => (
                                <tr key={customer.email} className="table-row">
                                    <td className="table-cell">{customer.name}</td>
                                    <td className="table-cell">{customer.email}</td>
                                    <td className="table-cell">{customer.phone}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Items Section */}
                <section className="section">
                    <h2 className="section-title">Books</h2>
                    <div className="table-container">
                        <table className="table">
                            <thead className="table-header">
                            <tr>
                                <th className="table-header-cell">Book Description</th>
                                <th className="table-header-cell">Price</th>
                                <th className="table-header-cell">Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map((item: Item) => (
                                <tr key={item.description} className="table-row">
                                    <td className="table-cell">{item.description}</td>
                                    <td className="table-cell">$ {item.price}</td>
                                    <td className="table-cell">{item.qty}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
