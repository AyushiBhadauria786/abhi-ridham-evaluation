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
import SignIn from "./pages/signup/Signup";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Login from "./pages/Login";
import Signup from "./pages/signup/Signup";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoutes";
import AuthRoute from "./components/AuthRoute";
import type { AppDispatch, RootState } from "./redux/store";
import { Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { onAuthStateChanged } from "firebase/auth";
import { setAuthUser } from "./redux/authSlice";
import { auth } from "./firebase/firebase";
import type { User } from "./types";
import { Box, CircularProgress } from "@mui/material";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthInitialized } = useSelector((state: RootState) => state.auth);  

  //For redux store updation
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const user: User = {
          id: firebaseUser.uid,
          fullName: firebaseUser.displayName || "User",
          email: firebaseUser.email || "",
        };
        dispatch(setAuthUser(user));
      } else {
        dispatch(setAuthUser(null));
      }
    });

    // Cleanup 
    return () => unsubscribe();
  }, [dispatch]);

   if (!isAuthInitialized) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/header" element={<Header />} />

            <Route element={<AuthRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<FullLayout />}>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-transaction" element={<AddTransaction />} />
                <Route path="/transaction" element={<Transactions />} />
                <Route path="/budget" element={<Budget />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
              </Route>
            </Route>

            <Route path="/*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
