import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { showSuccessToast, showErrorToast } from "../../lib/Toast";
import ActionProvider from "./ActionContext";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  // console.log(children)
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  async function handleLogin(values) {
    try {
      const { data } = await axios.post("/users/manager/signin", values);
      if (data.success) {
        showSuccessToast(data.message);
        setIsAuth(true);
        setUser(data.data);
        return true;
      }
    } catch (error) {
      const msg = error.response.data.error;
      showErrorToast(msg);
      return false;
    }
  }
  async function guestLogin() {
    try {
      const value = {manager_email: "bineomi@gmail.com", manager_password: "g1234"}
      const { data } = await axios.post("/users/manager/signin", value);
      if (data.success) {
        showSuccessToast(data.message);
        setIsAuth(true);
        setUser(data.data);
        return true;
      }
    } catch (error) {
      const msg = error.response.data.error;
      showErrorToast(msg);
      return false;
    }
  }

  async function authUser() {
    try {
      const { data } = await axios.get("/users/auth");
     
      if (data.success) {
        setIsAuth(true);
        setUser(data.user);
      }
    } catch (error) {
      if (error.response?.status !== 401) {
        console.error("Auth error:", error);
      }
    }
  }

  useEffect(() => {
    authUser();
  }, []);

  async function handleManager(values) {
    try {
      const { data } = await axios.post("/users/manager/signup", values);
      console.log(data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function handleEmployee(values) {
    try {
      const { data } = await axios.post("/users/employee/signup", values);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function signOut() {
    try {
      const { data } = await axios.get("/users/manager/logout");
      window.location.reload();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    isAuth,
    handleLogin,
    handleEmployee,
    handleManager,
    user,
    signOut,
    guestLogin
  };

  return (
    <AuthContext.Provider value={value}>
      <ActionProvider>{children}</ActionProvider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;
