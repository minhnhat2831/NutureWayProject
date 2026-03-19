import type { JSX } from "react";
import { ToastContainer } from 'react-toastify'

export default function PageLayout({ children }: { children: JSX.Element }){
    return(<>
        {/* Screen */}
        <ToastContainer style={{ zIndex: 9999 }} />
        <div className="w-full h-screen bg-gray-500 z-0 flex overflow-hidden">
            <div className="max-w-sm min-w-sm h-full m-auto bg-black z-10 flex-1 flex flex-col overflow-hidden">
                {children}
            </div>
        </div>
    </>)
}