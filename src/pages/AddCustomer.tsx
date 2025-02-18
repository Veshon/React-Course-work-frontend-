import { useNavigate } from "react-router";
import { useState } from "react";
import { Customer } from "../models/Customer.ts";
import { saveCustomer } from "../reducers/CustomerReducer.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store.tsx";

export function AddCustomer() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (!name || !email || !phone) {
            setError("All fields are required!");
            return;
        }
        const newCustomer = new Customer(name, email, phone);
        dispatch(saveCustomer(newCustomer));
        navigate('/');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <header className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Add Customer</h2>
                <p className="text-gray-500">Please enter the details of the new customer.</p>
            </header>

            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-800 border border-red-400 rounded-lg">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-700 font-semibold">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter name"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-700 font-semibold">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter email"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className="text-gray-700 font-semibold">Phone</label>
                    <input
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter phone number"
                    />
                </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                    Cancel
                </button>

                <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    Add Customer
                </button>
            </div>
        </div>
    );
}
