import { useNavigate } from "react-router";
import { useState } from "react";
import { AppDispatch } from "../../store/store.tsx";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../reducers/ItemReducer.ts";
import "../../assets/deleteItem.css"; // Import CSS for styling

export function DeleteItem() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [description, setDescription] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    function handleDelete() {
        dispatch(deleteItem(description));
        setShowPopup(false);
        navigate("/");
    }

    return (
        <div className="wrapper">
            <div className="card">
                <header className="card-header">
                    <h2>Delete Item</h2>
                    <p>Enter the item description to delete.</p>
                </header>

                <div className="input-group">
                    <label htmlFor="description">Item Description</label>
                    <input
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter item description"
                    />
                </div>

                <div className="action-buttons">
                    <button className="btn-cancel" onClick={() => navigate("/")}>Cancel</button>
                    <button className="btn-delete" onClick={() => setShowPopup(true)}>Delete</button>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h3>Confirm Deletion</h3>
                        <p>Are you sure you want to delete this item?</p>
                        <div className="popup-buttons">
                            <button className="btn-cancel" onClick={() => setShowPopup(false)}>Cancel</button>
                            <button className="btn-delete" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
