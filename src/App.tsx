import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/dashboard/DashboardPage";
import Layout from "./components/layout/Layout";
import "./App.css";
import ErrorPage from "./components/pages/error/ErrorPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={"*"} element={<ErrorPage />} />
            <Route index element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
