import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Customer } from "../models/Customer.ts";
import { saveCustomer } from "../reducers/CustomerReducer.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store.tsx";
import "../assets/addCustomer.css"; // Import the CSS file

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
        setError(""); // Clear previous error
        const newCustomer = new Customer(name, email, phone);
        dispatch(saveCustomer(newCustomer));
        navigate('/');
    };

    return (
        <div className="container">
            <div className="form-card">
                <header className="form-header">
                    <h2>Add Customer</h2>
                    <p>Enter the details below to add a new customer.</p>
                </header>

                {error && <div className="error-message">{error}</div>}

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter phone number"
                    />
                </div>

                <div className="button-group">
                    <button className="cancel-btn" onClick={() => navigate("/")}>Cancel</button>
                    <button className="submit-btn" onClick={handleSubmit}>Add Customer</button>
                </div>
            </div>
        </div>
    );
}
