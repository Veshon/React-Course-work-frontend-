import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AppDispatch } from "../../store/store.tsx";
import { useDispatch } from "react-redux";
import "../../assets/addEmployee.css";
import {deleteEmployee} from "../../reducers/EmployeeReducer.ts"; // Import CSS for styling

export function DeleteEmployee() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [email, setEmail] = useState("");
    const [showModal, setShowModal] = useState(false);

    function handleDelete() {
        dispatch(deleteEmployee(email));
        setShowModal(false);
        navigate("/");
    }

    return (
        <div className="employeeContainer">
            <div className="form-card">
                <header className="form-header-delete">
                    <h2>Delete Employee</h2>
                    <p>Enter the email of the employee to delete.</p>
                </header>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter employee email"
                    />
                </div>

                <div className="button-group">
                    <button className="cancel-btn" onClick={() => navigate("/")}>Cancel</button>
                    <button className="delete-btn" onClick={() => setShowModal(true)}>Delete</button>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Confirm Deletion</h3>
                        <p>Are you sure you want to delete this employee?</p>
                        <div className="button-group">
                            <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="delete-btn" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
