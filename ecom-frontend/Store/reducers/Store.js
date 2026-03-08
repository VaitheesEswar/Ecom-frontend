import {configureStore} from "@reduxjs/toolkit"
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./errorReducer";


export const Store =configureStore({
    reducer:{
        productState:productReducer,
        errorReducer:errorReducer
    },
    preloadedState:{},
     devTools: true,
});
export default Store;