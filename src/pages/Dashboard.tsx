import {Customer} from "../models/Customer.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/store.tsx";
import {useEffect} from "react";
import {getCustomers} from "../reducers/CustomerReducer.ts";
import {getItems} from "../reducers/ItemReducer.ts";
import {Item} from "../models/Item.ts";

export function Dashboard() {

    const dispatch = useDispatch<AppDispatch>();

    const customers = useSelector((state)=>state.customer);
    const items = useSelector((state)=>state.item);

    useEffect(() => {
        if (customers.length === 0) {
            dispatch(getCustomers());
        }
    }, [dispatch, customers.length]);

    useEffect(() => {
        if (items.length === 0) {
            dispatch(getItems());
        }
    }, [dispatch, items.length]);

    return (
        <>
            Dashboard
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
            {items.map((item: Item) => (<div key={item.description}>{item.price + ' '+ item.description + ' '+ item.qty }</div>))}
        </>
    );
}