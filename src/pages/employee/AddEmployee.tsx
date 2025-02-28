import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store.tsx";
import "../../assets/addEmployee.css";
import {Employee} from "../../models/Employee.ts";
import {saveEmployee} from "../../reducers/EmployeeReducer.ts"; // Import the CSS file

export function AddEmployee() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (!name || !email || !position) {
            setError("All fields are required!");
            return;
        }
        setError(""); // Clear previous error
        const newEmployee = new Employee(name, email, position);
        dispatch(saveEmployee(newEmployee));
        navigate('/');
    };

    return (
        <div className="employeeContainer">
            <div className="form-card">
                <header className="form-header">
                    <h2>Add Employee</h2>
                    <p>Enter the details below to add a new employee.</p>
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
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Enter position"
                    />
                </div>

                <div className="button-group">
                    <button className="cancel-btn" onClick={() => navigate("/")}>Cancel</button>
                    <button className="submit-btn" onClick={handleSubmit}>Add Employee</button>
                </div>
            </div>
        </div>
    );
}
