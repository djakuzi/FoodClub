import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState} from "../store/store";

export default function ReguareAuth({children}: {children?: ReactNode}): any{

    const jwt = useSelector( (s: RootState)=> s.user.jwt)
    // console.log()
    
    if (!jwt){
        return <Navigate to="/FoodClub/auth/login" replace/>
    }
    return children
}