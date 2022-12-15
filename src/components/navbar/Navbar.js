import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = ()=>{
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link" style={{color: "#fff"}}>Trang chủ</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "#fff"}}>
                        Thông tin 
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/" class="dropdown-item">Collector</Link>
                            <Link to="/" class="dropdown-item">Janitor Team</Link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "#fff"}}>
                        Nhiệm vụ
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/task" class="dropdown-item">Cho Collector</Link>
                            <Link to="/task" class="dropdown-item">Cho Janitor Team</Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#" style={{color: "#fff"}}>Liên hệ</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
    
export default Navbar;