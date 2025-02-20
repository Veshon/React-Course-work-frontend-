import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store.tsx";
import { Item } from "../../models/Item.ts";
import { saveItem } from "../../reducers/ItemReducer.ts";
import "../../assets/addItem.css"; // Import updated CSS

export function AddItem() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);

    function handleSubmit() {
        const newItem = new Item(description, price, qty);
        dispatch(saveItem(newItem));
        navigate("/");
    }

    return (
        <div className="addItem-container">
            <div className="addItem-card">
                <header className="addItem-header">
                    <h2>Add New Book</h2>
                    <p>Fill in the details below to add a new book to inventory.</p>
                </header>

                <div className="addItem-form">
                    <label htmlFor="description">Book Description</label>
                    <input
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Book Description"
                    />

                    <label htmlFor="price">Price ($)</label>
                    <input
                        id="price"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        placeholder="Enter price"
                    />

                    <label htmlFor="qty">Quantity</label>
                    <input
                        id="qty"
                        type="number"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                        placeholder="Enter quantity"
                    />
                </div>

                <div className="addItem-actions">
                    <button className="cancel-btn" onClick={() => navigate("/")}>Cancel</button>
                    <button className="submit-btn" onClick={handleSubmit}>Add Book</button>
                </div>
            </div>
        </div>
    );
}
