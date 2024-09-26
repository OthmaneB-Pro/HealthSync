import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/dashboard/DashboardPage";
import Layout from "./components/reusable-ui/Layout";

export default function App() {
  return (
    <div>
      <Layout/>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
