import PageLayout from "@/layout/PageLayout";
import { Route, Routes } from "react-router";
import SettingPage from "../settings/SettingPage";
import CarePage from "../care/CarePage";
import ChatPage from "../chat/ChatPage";
import HomePage from "@/pages/HomePage";
import ArticleDetailPage from "../ArticleDetailPage";
import SearchPage from "../SearchPage";
import ChatDetailPage from "../chat/ChatDetailPage";
import DoulaProfilePage from "../doula/DoulaProfilePage";
import HelpCenterPage from "../settings/HelpCenterPage";
import ImageAndVideoPage from "../detail/ImageAndVideoPage";
import DocumentPage from "../detail/DoucumentPage";
import MedicationPage from "../detail/MedicationPage";
import NotesPage from "../detail/NotesContainer";
import NutritrionPage from "../detail/NutritionPage";
import PackageDetailPage from "../care/PackageDetailPage";
import AppointmentPage from "../appointment/AppointmentPage";
import NotFoundPage from "../NotFoundPage";
import CategoryDetailPage from "../CategoryDetailPage";
import DetailPage from "../detail/DetailPage";
import OnBoadingPackage from "@/container/care/container/package/OnBoaringPackage";
import PackageDetailContainer from "@/container/care/container/PackageDetailContainer";
import UserProfilePage from "../user/UserProfilePage";
import CalenderPage from "../appointment/CalenderPage";
import DetailPackagePage from "../detail/DetailPackagePage";
import PackageRequestPage from "../package/PackageRequestPage";
import { useAuthen } from "@/context/AuthContext";

export default function PageRouter() {
    const { role } = useAuthen()
    const isDoula = role === 'doula'
    const isClient = role === 'user'

    return (<>
        {/* /home */}
        <Routes>
            <Route path="/"
                element={
                    <PageLayout>
                        <HomePage />
                    </PageLayout>
                }>
            </Route>

            {/* care / package */}
            <Route path="/care"
                element={
                    <PageLayout>
                        <CarePage />
                    </PageLayout>
                }>
            </Route>

            {isDoula && <>
                <Route path="/care/package"
                    element={
                        <PageLayout>
                            <OnBoadingPackage />
                        </PageLayout>
                    }>
                </Route>

                <Route path="/care/package/:id"
                    element={
                        <PageLayout>
                            <PackageDetailContainer />
                        </PageLayout>
                    }>
                </Route>
                <Route path="/care/package/edit/:id"
                    element={
                        <PageLayout>
                            <OnBoadingPackage />
                        </PageLayout>
                    }>
                </Route>
            </>}

            {isClient && <>
                <Route path="/category/:id"
                    element={
                        <PageLayout>
                            <CategoryDetailPage />
                        </PageLayout>
                    }>
                </Route>
            </>}
            <Route path="/article/:id"
                element={
                    <PageLayout>
                        <ArticleDetailPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/doula-profile/:id"
                element={
                    <PageLayout>
                        <DoulaProfilePage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/client-profile/:id"
                element={
                    <PageLayout>
                        <UserProfilePage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/settings"
                element={
                    <PageLayout>
                        <SettingPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/settings/help-center"
                element={
                    <PageLayout>
                        <HelpCenterPage />
                    </PageLayout>
                }></Route>

            {isClient && <>
                <Route path="/detail/:id/doula"
                    element={
                        <PageLayout>
                            <DetailPage />
                        </PageLayout>
                    }>
                </Route>
            </>}

            {isDoula && <>
                <Route path="/detail/:id/client"
                    element={
                        <PageLayout>
                            <DetailPage />
                        </PageLayout>
                    }>
                </Route>
            </>}

            <Route path="/detail/package-detail/:id"
                element={
                    <PageLayout>
                        <DetailPackagePage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/detail/imageVideo"
                element={
                    <PageLayout>
                        <ImageAndVideoPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/detail/documents/:id"
                element={
                    <PageLayout>
                        <DocumentPage />
                    </PageLayout>}>
            </Route>
            <Route path="/detail/medication/:id"
                element={
                    <PageLayout>
                        <MedicationPage />
                    </PageLayout>}>
            </Route>
            <Route path="/detail/notes"
                element={
                    <PageLayout>
                        <NotesPage />
                    </PageLayout>}>
            </Route>
            <Route path="/detail/nutrition"
                element={
                    <PageLayout>
                        <NutritrionPage />
                    </PageLayout>}>
            </Route>
            <Route path="/package-details/:id"
                element={
                    <PageLayout>
                        <PackageDetailPage />
                    </PageLayout>}>
            </Route>
            <Route path="/care/appointment"
                element={
                    <PageLayout>
                        <AppointmentPage />
                    </PageLayout>}>
            </Route>
            {isDoula && <>
                <Route path="/calender"
                    element={
                        <PageLayout>
                            <CalenderPage />
                        </PageLayout>}>
                </Route>
            </>}
            <Route path="/message"
                element={
                    <PageLayout>
                        <ChatPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/search"
                element={
                    <PageLayout>
                        <SearchPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/message/:id"
                element={
                    <PageLayout>
                        <ChatDetailPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/doula-profile/package/:id"
                element={
                    <PageLayout>
                        <PackageRequestPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="*"
                element={
                    <PageLayout>
                        <NotFoundPage />
                    </PageLayout>
                } />
        </Routes>
    </>)
}