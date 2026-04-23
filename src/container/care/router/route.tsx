import { Route, Routes } from "react-router";
import OnBoadingPackage from "../container/package/OnBoaringPackage";

export default function CareRoute() {
    return (<>
        <Routes>
            <Route path="/"
                element={
                    <OnBoadingPackage />
                }>
            </Route>
        </Routes>
    </>)
}