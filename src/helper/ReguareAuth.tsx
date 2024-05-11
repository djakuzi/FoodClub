import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState, store } from "../store/store";

export default function ReguareAuth({children}: {children?: ReactNode}){

    const jwt = useSelector( (s: RootState)=> s.user.jwt)
    // console.log()
    

    if (!jwt){
        return <Navigate to="/auth/login" replace/>
    }
    return children
}