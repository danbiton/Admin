import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import NavAdmin from "./components/section/NavAdmin";
import NavPublic from "./components/section/NavPublic";
import { AuthContext } from "./components/contexts/AuthContext";

import EmployeeModal from "./components/modals/employeeModal";
import ModalManager from "./components/modals/ModalManager";
import ModalAddProfession from "./components/modals/modalAddProfession";

//import mainPage components
import Offices from "./components/pages/publicPages/mainPage/Offices";
import ContactPage from "./components/pages/publicPages/mainPage/ContactPage";
import AboutPage from "./components/pages/publicPages/mainPage/AboutPage";
import LeadershipTeam from "./components/pages/publicPages/mainPage/LeadershipTeam";
import { Component } from "lucide-react";
import BackgroundLayout from "./components/ui/BackgroundLayout";
import IssueModal from "./components/modals/IssueModal";
import ErrorPage from "./components/ErrorPage";

import {useEffect} from "react"


function ProtectedRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
}

function Root({ isAuth }) {
  return (
    <>
      <BackgroundLayout>
        {isAuth ? <NavAdmin /> : <NavPublic />}
        <Outlet />
        <IssueModal />
        <EmployeeModal />
        <ModalManager />
        <ModalAddProfession />
      </BackgroundLayout>
    </>
  );
}

function App() {
  const { isAuth, user } = useContext(AuthContext);
  useEffect(() => {
    console.log("Base URL:", import.meta.env.VITE_API_BASE_URL);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root isAuth={isAuth} />}
        errorElement={<ErrorPage />}
      >
        {/* Public Routes */}
        <Route element={isAuth ? <Navigate to={"/welcomepage"} /> : <Outlet />}>
          <Route
            index
            lazy={async () => ({
              Component: (
                await import("./components/pages/publicPages/mainPage/HomePage")
              ).default,
            })}
          />
          <Route
            path="login"
            lazy={async () => ({
              Component: (await import("./components/pages/publicPages/Login"))
                .default,
            })}
          />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route
            path="welcomepage"
            lazy={async () => ({
              Component: (
                await import("./components/pages/privatePages/WelcomePage")
              ).default,
            })}
          />
          {isAuth && user?.permission === "Admin" && (
            <Route
              path="allemployees"
              lazy={async () => ({
                Component: (
                  await import("./components/pages/privatePages/AllEmployees")
                ).default,
              })}
            />
          )}
          <Route
            path="Professions"
            lazy={async () => ({
              Component: (
                await import("./components/pages/privatePages/AllProfessions")
              ).default,
            })}
          />
          <Route
            path="addprofession"
            lazy={async () => ({
              Component: (
                await import("./components/pages/forms/ProfessionForm")
              ).default,
            })}
          />
          <Route
            path="allmanagers"
            lazy={async () => ({
              Component: (
                await import("./components/pages/privatePages/AllManagers")
              ).default,
            })}
          />
          <Route
            path="addissue"
            lazy={async () => ({
              Component: (await import("./components/pages/forms/IssueForm"))
                .default,
            })}
          />
          <Route
            path="allissues"
            lazy={async () => ({
              Component: (await import("./components/cards/CardIssues"))
                .default,
            })}
          />
          <Route
            path="issueshistory"
            lazy={async () => ({
              Component: (await import("./components/cards/IssuesHistory"))
                .default,
            })}
          />
        </Route>

        {/* Extra Public Routes */}
        <Route
          path="LeadershipTeam"
          lazy={async () => ({
            Component: (
              await import(
                "./components/pages/publicPages/mainPage/LeadershipTeam"
              )
            ).default,
          })}
        />
        <Route
          path="AboutPage"
          lazy={async () => ({
            Component: (
              await import("./components/pages/publicPages/mainPage/AboutPage")
            ).default,
          })}
        />
        <Route
          path="ContactPage"
          lazy={async () => ({
            Component: (
              await import(
                "./components/pages/publicPages/mainPage/ContactPage"
              )
            ).default,
          })}
        />
        <Route
          path="Offices"
          lazy={async () => ({
            Component: (
              await import("./components/pages/publicPages/mainPage/Offices")
            ).default,
          })}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </>
  );
}

export default App;
