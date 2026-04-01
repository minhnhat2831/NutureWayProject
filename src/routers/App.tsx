import AuthRouter from "@/container/auth/routers/router"
import { AuthProvider } from "@/context/AuthContext"

import PageRouter from "@/modules/common/routers/router"
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
