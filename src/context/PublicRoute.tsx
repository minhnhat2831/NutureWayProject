import type { JSX } from "react";
import { Navigate } from "react-router";

export default function PublicRoute({ children }: { children: JSX.Element }) {
    const auth = localStorage.getItem("accessToken")
    const ref = localStorage.getItem('refreshToken')
    if(auth && ref){
        return <Navigate to="/home" replace />
    } 

    return (<>
        {children}
    </>)
}