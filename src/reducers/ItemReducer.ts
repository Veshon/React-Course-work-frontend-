import {Item} from "../models/Item.ts";
import axios from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState : Item[] = [];

const api = axios.create({
    baseURL : "http://localhost:3000/item"
})

export const saveItem = createAsyncThunk(
    'item/saveItem',
    async (item: Item) => {
        try {
            const response = await api.post('/addItem', item);
            return response.data;
        } catch (error) {
            return console.log('error',error)
        }
    }
);

export const deleteItem = createAsyncThunk(
    'item/deleteItem',
    async (id : string) =>{
        try{
            const response = await api.delete(`/deleteItem/${id}`);
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
)

export const updateItem  = createAsyncThunk(
    'item/updateItem',
    async (item : Item) =>{
        try{
            const response = await api.put(`/updateItem/${item.id}`,item);
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
)

export const getItems = createAsyncThunk(
    'item/getItems',
    async ()=>{
        try{
            const response = await api.get('/view');
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
)

const itemSlice = createSlice({
    name : 'item',
    initialState,
    reducers:{
        addItem(state, action:PayloadAction<Item>){
            state.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveItem.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveItem.rejected, (state, action) => {
                console.error("Failed to save item:", action.payload);
            })
            .addCase(saveItem.pending, (state, action) => {
                console.error("Pending");
            });
        builder
            .addCase(deleteItem.rejected, (state, action) => {
                console.error("Failed to delete item:", action.payload);
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                return state = state.filter((item:Item)=> item.description !== action.payload.description);
            })
            .addCase(deleteItem.pending, (state, action) => {
                console.log("Pending delete item",action.payload);
            });
        builder
            .addCase(updateItem.rejected, (state, action) => {
                console.error("Failed to update item:", action.payload);
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                const item = state.find((item:Item) => item.description === action.payload.email);
                if (item) {
                    item.price = action.payload.price;
                    item.qty = action.payload.qt;
                }
            })
            .addCase(updateItem.pending, (state, action) => {
                console.log("Pending update item:", action.payload);
            });
        builder
            .addCase(getItems.fulfilled, (state, action) => {
                action.payload.map((item:Item) => {
                    state.push(item);
                })
            })
            .addCase(getItems.pending, (state, action) => {
                console.log("Pending get item:", action.payload);
            })
            .addCase(getItems.rejected, (state, action) => {
                console.error("Failed to save item:", action.payload);
            })
    }
});

export const {addItem}  = itemSlice.actions;
export default itemSlice.reducer;