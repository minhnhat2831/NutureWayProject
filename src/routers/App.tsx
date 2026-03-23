import AuthRouter from "@/modules/auth/routers/router"
import { Route, Routes } from "react-router"

function App() {
  return (
    <>
      <Routes>
        {/* Import router con */}
        <Route path="/*" element={<AuthRouter />} />
        <Route path="/client/*" element={<></>} />
        <Route path="/doulas/*" element={<></>} />
      </Routes>

    </>
  )
}

export default App
