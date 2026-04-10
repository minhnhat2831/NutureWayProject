import AuthRouter from "@/container/auth/routers/router"
import { AuthProvider } from "@/context/AuthContext"
import ProtectedRoute from "@/context/ProtectedRoute"
import PublicRoute from "@/context/PublicRoute"
import PageRouter from "@/pages/routers/routers"

import { Route, Routes } from "react-router"

function App() {
  return (
    <>
      <Routes>
        {/* Import router con */}

        <Route path="/*" element={
          <AuthProvider>
            <PublicRoute>
              <AuthRouter />
            </PublicRoute>
          </AuthProvider>} />
        <Route path='/home/*' element={
          <AuthProvider>
            <ProtectedRoute>
              <PageRouter />
            </ProtectedRoute>
          </AuthProvider>} />
        <Route path="/client/*" element={<></>} />
        <Route path="/doulas/*" element={<></>} />

      </Routes>

    </>
  )
}

export default App
