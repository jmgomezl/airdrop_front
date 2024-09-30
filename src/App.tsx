import NavbarComponent from "./components/navbar/NavbarComponent"
import LoginPage from "./pages/login/LoginPage"
import RegisterPage from "./pages/register/RegisterPage"
import ForgotPasswordPage from "./pages/forgotPassword/ForgotPasswordPage"

function App() {

  return (
   <>
   <NavbarComponent /> 
    <LoginPage />
    <RegisterPage />
    <ForgotPasswordPage />
   </>
  )
}

export default App
