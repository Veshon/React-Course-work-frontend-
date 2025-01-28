import { useNavigate } from "react-router";
import { useState } from "react";
import { AppDispatch } from "../../store/store.tsx";
import { Modal } from "../../components/Modal";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../reducers/ItemReducer.ts";

export function DeleteItem() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [description, setDescription] = useState("");

    function handleSubmit() {
        dispatch(deleteItem(description)); // Pass the description to delete the item
        navigate("/");
    }

    return (
        <>
            <header>
                <h2>Delete Item</h2>
            </header>
            <br />
            <Modal
                handleSubmit={handleSubmit}
                isDelete={true}
                setDescription={setDescription} // Pass setDescription directly
            >
                Delete Item
            </Modal>
        </>
    );
}
