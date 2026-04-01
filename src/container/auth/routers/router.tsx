import PageLayout from "@/layout/PageLayout";
import { Route, Routes } from "react-router";
import LandingPage from "../../../pages/LandingPage"
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import AboutYouPage from "@/modules/auth/pages/AboutYouPage";
import PaymentPage from "@/modules/auth/pages/PaymentPage";

export default function AuthRouter() {
    return (<>
        <Routes>
            <Route path="/"
                element={
                    <PageLayout>
                        <LandingPage />
                    </PageLayout>
                }>
            </Route>

            <Route path="/login"
                element={
                    <PageLayout>
                        <LoginPage />
                    </PageLayout>
                }>
            </Route>

            <Route path="/register"
                element={
                    <PageLayout>
                        <RegisterPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/forgot-password"
                element={
                    <PageLayout>
                        <ForgotPasswordPage />
                    </PageLayout>
                }>
            </Route>

            <Route path="/about-you"
                element={
                    <PageLayout>
                        <AboutYouPage />
                    </PageLayout>
                }>
            </Route>

            <Route path="/payment"
                element={
                    <PageLayout>
                        <PaymentPage />
                    </PageLayout>
                }>
            </Route>
        </Routes>
    </>)
}