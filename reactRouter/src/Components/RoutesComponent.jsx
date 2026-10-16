import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function RoutesComponent() {
  return <div>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/login" element={<h1>Login Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </div>;
}

export default RoutesComponent;