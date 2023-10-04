import { createSlice } from "@reduxjs/toolkit";
import getConfigToken from "../../utils/getConfigToken";
import axios from "axios";

const cartSlice = createSlice({
    name: "cart",
    initialState: null,
    reducers: {
        setCartGlobal: (state, action) => action.payload
    }
})


export const { setCartGlobal } = cartSlice.actions

export default cartSlice.reducer

export const getAllProductsCartThunk = () => dispatch => {
    const url = 'http://localhost:8080/cart'
    axios.get(url, getConfigToken())
        .then(res => dispatch(setCartGlobal(res.data)))
        .catch(err => console.log(err))
}