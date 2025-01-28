import { useNavigate } from "react-router";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store.tsx";
import { Item } from "../../models/Item.ts";
import { saveItem } from "../../reducers/ItemReducer.ts";

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
        <>
            <header>
                <h2>Add Item</h2>
            </header>
            <br />

            <Modal
                handleSubmit={handleSubmit}
                setDescription={setDescription} // Pass setter functions directly
                setPrice={setPrice}
                setQty={setQty}
            >
                Add Item
            </Modal>
        </>
    );
}
