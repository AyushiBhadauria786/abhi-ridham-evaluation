import Header from "./components/Header";
import FullLayout from "./layouts/FullLayout";
import Sidebar from "./layouts/Sidebar";
import AddTransaction from "./pages/AddTransaction";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transactions from "./pages/Transactions";
import Budget from "./pages/Budget";
import Reports from "./pages/Reports";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import SignIn from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<FullLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-transaction" element={<AddTransaction />} />
            <Route path="/transaction" element={<Transactions />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
