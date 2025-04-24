import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";
import AuthProvider from "./components/contexts/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>...Loading</div>}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
        <ToastContainer />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Suspense>
);
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

