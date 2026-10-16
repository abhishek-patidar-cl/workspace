import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Link style={{ textDecoration: "none", color: "dark-blue" }} to="/">
        <h2>Home</h2>
      </Link>
      <Link style={{ textDecoration: "none", color: "dark-blue" }} to="/login">
        <h2>Login</h2>
      </Link>
      <Link style={{ textDecoration: "none", color: "dark-blue" }} to="/about">
        <h2>About</h2>
      </Link>
    </div>
  );
}

export default NavBar;
