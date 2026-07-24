import "./Navbar.css"

function navbar(){
    return(
        <nav ClassName="Navbar">

            <div ClassName="logo">
                Captain<span>Pro</span>

            </div>
            <ul ClassName="nav-links">
                <li>< a href="#">Home</a></li>
                <li>< a href="#">Features</a></li>
                <li>< a href="#">pricing</a></li>
                <li>< a href="#">contact</a></li>


            </ul>
            <div ClassName="nav-btns">
                <button ClassName="login">Login</button>
                  <button ClassName="register">Register</button>
                
            </div>
        </nav>
    );
}
export default Navbar;