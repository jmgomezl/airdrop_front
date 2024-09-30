import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/navbar/NavbarComponent";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ForgotPasswordPage from "./pages/forgotPassword/ForgotPasswordPage";

function App() {

  return (
   <Router>
   <NavbarComponent />
   <Routes>
    <Route path="/login" element = { <LoginPage />} />
    <Route path= "/register" element = {< RegisterPage /> }  />
    <Route path="/password-recovery" element={ <ForgotPasswordPage />}  />
    </Routes> 
   </Router>
  )
}

export default App
