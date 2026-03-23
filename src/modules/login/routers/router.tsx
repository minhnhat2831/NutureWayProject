import PageLayout from "@/layout/PageLayout";
import { Route, Routes } from "react-router";
import OnboardingPage from "../pages/OnboardingPage";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import SendOtpPage from "../pages/SendOtpPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import SelectIdentityPage from "../pages/SelectIdentityPage";
import RegisterPage from "../pages/RegisterPage";
import AboutYouPage from "../pages/AboutYouPage";
import PaymentPage from "../pages/PaymentPage";

export default function LoginRouter() {
    return (<>
        <Routes>
            <Route path="/"
                element={
                    <PageLayout>
                        <OnboardingPage />
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

            <Route path="/forgot-password"
                element={
                    <PageLayout>
                        <ForgotPasswordPage />
                    </PageLayout>
                }>
            </Route>

            <Route path="/send-otp"
                element={
                    <PageLayout>
                        <SendOtpPage />
                    </PageLayout>
                }>
            </Route>

            <Route path="/change-password"
                element={
                    <PageLayout>
                        <ChangePasswordPage />
                    </PageLayout>
                }>
            </Route>

            <Route path="/select-identity"
                element={
                    <PageLayout>
                        <SelectIdentityPage />
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