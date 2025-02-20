import { useNavigate } from "react-router";
import { useState } from "react";
import { AppDispatch } from "../../store/store.tsx";
import { useDispatch } from "react-redux";
import { Item } from "../../models/Item.ts";
import { updateItem } from "../../reducers/ItemReducer.ts"; // Import the correct action
import "../../assets/updateItem.css"; // Import CSS for styling

export function UpdateItem() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    function handleUpdate() {
        const updatedItem = new Item(description, price, qty);
        dispatch(updateItem(updatedItem));
        setShowPopup(false);
        navigate("/");
    }

    return (
        <div className="wrapper">
            <div className="update-card">
                <header className="card-header-update">
                    <h2>Update Book</h2>
                    <p>Modify the book details and save changes.</p>
                </header>

                <div className="input-group">
                    <label htmlFor="description">Book Description</label>
                    <input
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Book Description"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        placeholder="Enter item price"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="qty">Quantity</label>
                    <input
                        id="qty"
                        type="number"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                        placeholder="Enter quantity"
                    />
                </div>

                <div className="action-buttons">
                    <button className="btn-cancel" onClick={() => navigate("/")}>Cancel</button>
                    <button className="btn-update" onClick={() => setShowPopup(true)}>Update</button>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Confirm Update</h3>
                        <p>Are you sure you want to update this book?</p>
                        <div className="popup-buttons">
                            <button className="btn-cancel" onClick={() => setShowPopup(false)}>Cancel</button>
                            <button className="btn-update" onClick={handleUpdate}>Update</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
