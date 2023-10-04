import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import { useState } from "react"



const usePurchases = () =>{

    const [purchases, setPurchases] = useState()

    const dispatch = useDispatch()


    const url = `https://ecommerce-academlo-backend.onrender.com/purchases`


    const buyThisCart = () =>{
        axios.post(url, {}, getConfigToken())
        .then(res =>{
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        } )
        .catch(err => console.log(err))
    }

    const getAllProductsPurchases = () =>{
        axios.get(url, getConfigToken())
        .then(res => setPurchases(res.data))
        .catch(err => console.log(err))

    }
 


    return {purchases, buyThisCart, getAllProductsPurchases}
}

export default usePurchases