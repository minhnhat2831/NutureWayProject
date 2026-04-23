import { Icons } from "@/components/common/Icons";
import { Link } from "react-router";

export default function NotFoundPage() {
    return (<>
        <div className="h-screen bg-white flex flex-col items-center justify-center">
            <div className="p-4 bg-red-300 rounded-full">
                <Icons.alertTriangleIcon />
            </div>
            <div className="text-center">
                <p className="text-red-500 font-bold text-2xl">Error 404</p>
                <p className="text-lg font-serif">Sorry we can't found this page</p>
                <Link to="/home" className="text-md text-blue-600">Go Back</Link>
            </div>
        </div>
    </>)
}