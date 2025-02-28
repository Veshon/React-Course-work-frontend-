import {configureStore} from "@reduxjs/toolkit";
import customerReducer from "../reducers/CustomerReducer.ts";
import itemReducer from "../reducers/ItemReducer.ts";
import employeeReducer from "../reducers/EmployeeReducer.ts";

export const store = configureStore({
    reducer :{
        customer : customerReducer,
        item : itemReducer,
        employee : employeeReducer
    }
})

export type AppDispatch = typeof store.dispatch;
