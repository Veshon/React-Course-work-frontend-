// reducers/CustomerReducer.ts
import { Customer } from "../models/Customer.ts";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState: Customer[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/customer",
});

// Save customer action
export const saveCustomer = createAsyncThunk(
    "customer/saveCustomer",
    async (customer: Customer) => {
        try {
            const response = await api.post("/add", customer);
            return response.data;
        } catch (error) {
            console.log("Error saving customer", error);
        }
    }
);

// Delete customer action
export const deleteCustomer = createAsyncThunk(
    "customer/deleteCustomer",
    async (id: string) => {
        try {
            const response = await api.delete(`/delete/${id}`);
            return response.data;
        } catch (err) {
            console.log("Error deleting customer", err);
        }
    }
);

// Update customer action
export const updateCustomer = createAsyncThunk(
    "customer/updateCustomer",
    async (customer: Customer) => {
        try {
            const response = await api.put(`/update/${customer.id}`, customer);
            return response.data;
        } catch (err) {
            console.log("Error updating customer", err);
        }
    }
);

// Get customers action
export const getCustomers = createAsyncThunk(
    "customer/getCustomers",
    async () => {
        try {
            const response = await api.get("/view");
            return response.data;
        } catch (err) {
            console.log("Error fetching customers", err);
        }
    }
);

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer(state, action: PayloadAction<Customer>) {
            // Avoid duplicate customers by checking email
            const existingCustomer = state.find(
                (customer) => customer.email === action.payload.email
            );
            if (!existingCustomer) {
                state.push(action.payload);
            }
        },
    },
    extraReducers: (builder) => {
        // Add new customer after saving
        builder.addCase(saveCustomer.fulfilled, (state, action) => {
            // Avoid duplicates by checking email
            const existingCustomer = state.find(
                (customer) => customer.email === action.payload.email
            );
            if (!existingCustomer) {
                state.push(action.payload);
            }
        });

        // Handle delete customer
        builder.addCase(deleteCustomer.fulfilled, (state, action) => {
            return state.filter((customer) => customer.email !== action.payload.email);
        });

        // Handle update customer
        builder.addCase(updateCustomer.fulfilled, (state, action) => {
            const customerIndex = state.findIndex(
                (customer) => customer.email === action.payload.email
            );
            if (customerIndex >= 0) {
                state[customerIndex] = action.payload;
            }
        });

        // Fetch and replace customer list to avoid duplicates
        builder.addCase(getCustomers.fulfilled, (state, action) => {
            // Replace the existing customers array with the new one
            return action.payload;
        });
    },
});

export const { addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
