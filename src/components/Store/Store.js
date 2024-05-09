import { configureStore } from "@reduxjs/toolkit";
import TransactionsSlice from "./Slices/TransactionsSlice";
 const Store = configureStore({
    reducer:{   
        transactions : TransactionsSlice}
 })

 export default Store;