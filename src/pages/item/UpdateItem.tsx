import { useNavigate } from "react-router";
import { useState } from "react";
import { AppDispatch } from "../../store/store.tsx";
import { Modal } from "../../components/Modal";
import { useDispatch } from "react-redux";
import { Item } from "../../models/Item.ts";
import { updateItem } from "../../reducers/ItemReducer.ts"; // Import the correct action

export function UpdateItem() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);

    function handleSubmit() {
        const updatedItem = new Item(description, price, qty); // Create the updated item object
        dispatch(updateItem(updatedItem)); // Dispatch the correct Redux action
        navigate("/"); // Navigate back to the main page
    }

    return (
        <>
            <header>
                <h2>Update Item</h2>
            </header>
            <br />
            <Modal
                handleSubmit={handleSubmit}
                setDescription={setDescription}
                setPrice={setPrice}
                setQty={setQty}
            >
                Update Item
            </Modal>
        </>
    );
}
