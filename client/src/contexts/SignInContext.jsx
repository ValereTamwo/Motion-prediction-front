import React,{createContext,useState,useContext, } from "react";
import video from "../public/videos/justin.mp4"
import west from "../public/videos/west.mp4"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [data, Setdata] = useState({});
    const [open, Setopen] = useState(false);

     
    return (
        <UserContext.Provider value={{ open, Setopen , data , Setdata }} >
            {children}
        </UserContext.Provider>
    )
}

export const useSignIn = () => {
    return useContext(UserContext)
}

