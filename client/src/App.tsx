import { Routes, Route } from 'react-router-dom';
import NavBar from '@components/Navbar';
import HomePage from "@pages/HomePage";
import InvoicesPage from "@pages/InvoicesPage";
import LoginPage from "@pages/LoginPage";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
