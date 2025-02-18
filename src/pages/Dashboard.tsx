import { Customer } from "../models/Customer.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store.tsx";
import { useEffect } from "react";
import { getCustomers } from "../reducers/CustomerReducer.ts";
import { getItems } from "../reducers/ItemReducer.ts";
import { Item } from "../models/Item.ts";

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
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-indigo-600 text-white text-3xl font-bold p-6">
                <h1>Dashboard</h1>
            </header>

            <main className="p-6">
                {/* Customers Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customers</h2>
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Phone</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((customer: Customer) => (
                                <tr key={customer.email} className="border-b">
                                    <td className="px-6 py-4 text-sm text-gray-800">{customer.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{customer.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{customer.phone}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Items Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Items</h2>
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Description</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Price</th>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map((item: Item) => (
                                <tr key={item.description} className="border-b">
                                    <td className="px-6 py-4 text-sm text-gray-800">{item.description}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">${item.price}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{item.qty}</td>
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
