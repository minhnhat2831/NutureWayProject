import { AuthProvider } from "@/context/AuthContext"
import AuthRouter from "@/modules/auth/routers/router"
import PageRouter from "@/modules/Common/routers/router"
import { Route, Routes } from "react-router"

function App() {
  return (
    <>
      <Routes>
        {/* Import router con */}

        <Route path="/*" element={
          <AuthProvider>
            <AuthRouter />
          </AuthProvider>} />
        <Route path='/home/*' element={
          <AuthProvider>
            <PageRouter />
          </AuthProvider>} />
        <Route path="/client/*" element={<></>} />
        <Route path="/doulas/*" element={<></>} />

      </Routes>

    </>
  )
}

export default App
