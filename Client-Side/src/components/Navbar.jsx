import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Captain<span>Pro</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="nav-btns">
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;