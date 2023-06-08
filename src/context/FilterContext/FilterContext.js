import { useContext, createContext, useReducer } from "react";
import {discountReducer} from '../../reducer/discountReducer/discountReducer';

const FilterContext = createContext();

const FilterProvider =({children}) => {
    const initialState = {
        price:"",
        category: "",
        sortBy:"",
        rating:"",
        discount : ""
    }


    const[{price, category, sortBy, rating, discount},dispatch] = useReducer(discountReducer, initialState);
<FilterContext.Provider value={{price, category, sortBy, rating, discount,dispatch}}>
    {children}
</FilterContext.Provider>
}

const useFilter =() => useContext(FilterContext)

export {useFilter, FilterProvider}