import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '@components/Navbar';
import HomePage from "@pages/HomePage";
import InvoicesPage from "@pages/InvoicesPage";
import LoginPage from "@pages/LoginPage";

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { activeToken, loggingIn } from '@store/authSlice';

function App() {
  const token = useAppSelector(activeToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      const result = JSON.parse(storedUser);
      dispatch(loggingIn({ token: storedToken, user: result }));
    }
  }, [dispatch]);

  return (
    <div className="">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/invoices" 
          element={token ? <InvoicesPage /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/login"  element={<LoginPage/>} />
      </Routes>
    </div>
  )
}

export default App;
