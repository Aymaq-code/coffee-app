import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import BlogPageElementor from "../components/BlogPageElementor";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Login() {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("aymaq");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const [loginError, setLoginError] = useState("");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setLoginError("");

    const newErrors = {
      email: email.trim() === "",
      password: password.trim() === "",
    };

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
    }

    const loginSuccess = login(email, password);
    if (!loginSuccess) {
      setLoginError("Invalid email or password");
    }
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/cart", { replace: true });
  }, [isAuthenticated, navigate]);

  function handleEye() {
    setIsEyeOpen((prev) => !prev);
  }

  return (
    <div className="logInPage">
      <Navigation />
      <div className="container">
        <div className="logInPage__contents">
          <div className="logInPage__contents-form">
            <h3>Login</h3>

            {loginError && <div className="error-message">{loginError}</div>}

            <form onSubmit={handleSubmit}>
              <div className="email-pass">
                <input
                  type="email"
                  placeholder="Email address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? "error" : ""}
                />
              </div>
              {errors.email && (
                <span className="fillWarning">This field is mandatory</span>
              )}

              <div className="password">
                <input
                  type={isEyeOpen ? "text" : "password"}
                  placeholder="Password *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? "error" : ""}
                />
                <img
                  src={
                    isEyeOpen
                      ? "/images/logIn/eye-open.svg"
                      : "/images/logIn/eye-closed.svg"
                  }
                  alt="toggle password visibility"
                  onClick={handleEye}
                  style={{ cursor: "pointer" }}
                />
              </div>
              {errors.password && (
                <span className="fillWarning">This field is mandatory</span>
              )}

              <Button type="primary">Login</Button>
            </form>

            <div className="rememberMe">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <br />
            <a href="#forgot">Lost your password?</a>
          </div>

          <BlogPageElementor />
        </div>
      </div>
      <Footer />
    </div>
  );
}
