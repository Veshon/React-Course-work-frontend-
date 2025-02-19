import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppDispatch } from "../store/store.tsx";
import { useDispatch } from "react-redux";
import { updateCustomer } from "../reducers/CustomerReducer.ts";
import "../assets/updateCustomer.css"; // Import CSS for styling

export function UpdateCustomer() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [showModal, setShowModal] = useState(false);

    function handleUpdate() {
        const updatedCustomer = { name, email, phone };
        dispatch(updateCustomer(updatedCustomer));
        setShowModal(false);
        navigate("/");
    }

    return (
        <div className="container">
            <div className="form-card">
                <header className="form-header">
                    <h2>Update Customer</h2>
                    <p>Modify customer details below.</p>
                </header>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter customer name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter customer email"
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
                    <button className="update-btn" onClick={() => setShowModal(true)}>Update</button>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Confirm Update</h3>
                        <p>Are you sure you want to update this customer?</p>
                        <div className="button-group">
                            <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="update-btn" onClick={handleUpdate}>Update</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
