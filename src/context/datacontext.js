import React, { createContext, useEffect,useCallback,useReducer } from 'react'
export const MyContext = createContext({
    Loading:false,
    Datadetails:[],
    Search:{
        searchterm:"Fire and Blood",
        data:[]
    }
})
const Datafunc = (state,action)=>{
    switch (action.type) {
        case "Loading":
            return {...state,Loading:!state.Loading}
            break;
        case "setSearchterm":
            return {...state,Search:{...state.Search,searchterm:action.payload}}
        case "setbook":
            return{...state,Datadetails:action.payload}
        case "setbooks":
            return {...state,Search:{...state.Search,data:action.payload}}
        default:
            return state
            
}           
}
export const MyContextProvider = ({ children }) => {
    // Your state or functions go here
    const [Data,dispatchData] = useReducer(Datafunc,{
        Loading:false,
        Datadetails:[],
        Search:{
            searchterm:"Fire and Blood",
            data:[]
        }
    })
    useEffect(()=>{
        // fetchBooks()
        console.log("used")
    },[dispatchData])
    
    return (
        <MyContext.Provider value={{Data,dispatchData}}>
        {children}
        </MyContext.Provider>
    );};