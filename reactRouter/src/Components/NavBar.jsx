import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div grid grid-cols-3 gap-4>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/login">
        <h2>Login</h2>
      </Link>
      <Link to="/about">
        <h2>About</h2>
      </Link>
    </div>
  );
}

export default NavBar;
