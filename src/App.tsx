import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/dashboard/DashboardPage";

export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<DashboardPage/>} />
      </Routes>
      </BrowserRouter>
      
 
  );
}
