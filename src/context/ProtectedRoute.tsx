import type { JSX } from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const auth = localStorage.getItem("accessToken")
    const ref = localStorage.getItem('refreshToken')
    if(!auth && !ref){
        return <Navigate to="/" replace />
    } 

    return (<>
        {children}
    </>)
}