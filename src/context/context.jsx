import React, { useReducer } from "react";
import {Reducer} from "./contextreducer";

const defaultState = {
    all: [],
    fruits: [],
    veggies: [],
    bases: [],
    addins: [],
    saladItems: [],
    smoothieOrders : [],
    orderType: [],
    openCheckout : false
};

export const CountContext = React.createContext(defaultState);

export const CountContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, defaultState);

    return (
        <CountContext.Provider value={{state, dispatch}}>
            {children}
        </CountContext.Provider>
    )
}