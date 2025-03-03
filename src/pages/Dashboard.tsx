import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store.tsx";
import { useEffect } from "react";
import { getCustomers } from "../reducers/CustomerReducer.ts";
import { getItems } from "../reducers/ItemReducer.ts";
import { getEmployee } from "../reducers/EmployeeReducer.ts"; // Import Employee action
import { Customer } from "../models/Customer.ts";
import { Item } from "../models/Item.ts";
import { Employee } from "../models/Employee.ts";
import "../assets/style.css";

export function Dashboard() {
    const dispatch = useDispatch<AppDispatch>();

    const customers = useSelector((state) => state.customer);
    const items = useSelector((state) => state.item);
    const employees = useSelector((state) => state.employee);

    // Fetch customers
    useEffect(() => {
        if (customers.length === 0) {
            dispatch(getCustomers());
        }
    }, [dispatch, customers.length]);

    // Fetch items
    useEffect(() => {
        if (items.length === 0) {
            dispatch(getItems());
        }
    }, [dispatch, items.length]);

    // Fetch employees (This was missing)
    useEffect(() => {
        if (employees.length === 0) {
            dispatch(getEmployee());  // Dispatch the getEmployee action
        }
    }, [dispatch, employees.length]);

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

                {/* Employee Section*/}
                <section className="section">
                    <h2 className="section-title">Employees</h2>
                    <div className="table-container">
                        <table className="table">
                            <thead className="table-header">
                            <tr>
                                <th className="table-header-cell">Name</th>
                                <th className="table-header-cell">Email</th>
                                <th className="table-header-cell">Position</th>
                            </tr>
                            </thead>
                            <tbody>
                            {employees.map((employee: Employee) => (
                                <tr key={employee.email} className="table-row">
                                    <td className="table-cell">{employee.name}</td>
                                    <td className="table-cell">{employee.email}</td>
                                    <td className="table-cell">{employee.position}</td> {/* Fixed Field */}
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
