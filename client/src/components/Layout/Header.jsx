import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };

  return (
    <div className="main_container">
      <nav className="navbar">
        <Link to="/" className="navbar_brand">
          My App
        </Link>
        <div>
          {auth.user ? (
            <>
              <Link
                to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
              >
                <button className="white_btn">Dashboard</button>
              </Link>

              <Link to="/login">
                <button className="white_btn" onClick={handleLogout}>
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="white_btn">Login</button>
              </Link>

              <Link to="/register">
                <button className="white_btn">Register</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
