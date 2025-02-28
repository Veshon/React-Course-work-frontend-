// reducers/CustomerReducer.ts
import { Customer } from "../models/Customer.ts";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {Employee} from "../models/Employee.ts";

export const initialState: Customer[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/employee",
});

// Save employee action
export const saveEmployee = createAsyncThunk(
    "employee/saveEmployee",
    async (employee: Employee) => {
        try {
            const response = await api.post("/addEmployee", employee);
            return response.data;
        } catch (error) {
            console.log("Error saving employee", error);
        }
    }
);

// Delete employee action
export const deleteEmployee = createAsyncThunk(
    "employee/deleteEmployee",
    async (id: string) => {
        try {
            const response = await api.delete(`/deleteEmployee/${id}`);
            return response.data;
        } catch (err) {
            console.log("Error deleting employee", err);
        }
    }
);

// Update employee action
export const updateEmployee = createAsyncThunk(
    "employee/updateEmployee",
    async (employee: Employee) => {
        try {
            const response = await api.put(`/updateEmployee/${employee.id}`, employee);
            return response.data;
        } catch (err) {
            console.log("Error updating employee", err);
        }
    }
);

// Get employee action
export const getEmployee = createAsyncThunk(
    "employee/getEmployee",
    async () => {
        try {
            const response = await api.get("/viewEmployee");
            return response.data;
        } catch (err) {
            console.log("Error fetching employees", err);
        }
    }
);

const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        addEmployee(state, action: PayloadAction<Employee>) {
            // Avoid duplicate customers by checking email
            const existingEmployee = state.find(
                (employee) => employee.email === action.payload.email
            );
            if (!existingEmployee) {
                state.push(action.payload);
            }
        },
    },
    extraReducers: (builder) => {
        // Add new employee after saving
        builder.addCase(saveEmployee.fulfilled, (state, action) => {
            // Avoid duplicates by checking email
            const existingEmployee = state.find(
                (employee) => employee.email === action.payload.email
            );
            if (!existingEmployee) {
                state.push(action.payload);
            }
        });

        // Handle delete employee
        builder.addCase(deleteEmployee.fulfilled, (state, action) => {
            return state.filter((employee) => employee.email !== action.payload.email);
        });

        // Handle update employee
        builder.addCase(updateEmployee.fulfilled, (state, action) => {
            const employeeIndex = state.findIndex(
                (employee) => employee.email === action.payload.email
            );
            if (employeeIndex >= 0) {
                state[employeeIndex] = action.payload;
            }
        });

        // Fetch and replace customer list to avoid duplicates
        builder.addCase(getEmployee.fulfilled, (state, action) => {
            // Replace the existing customers array with the new one
            return action.payload;
        });
    },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
