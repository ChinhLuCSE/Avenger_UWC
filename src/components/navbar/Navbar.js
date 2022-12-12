import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = ()=>{
    return (
        <div id="nav-box">
          <div style={{backgroundColor: "#fff"}}></div>
          <nav className="navbar d-flex justify-content-center" id="navbar">
              <div className="dropdown">
                  <Link to="/" className="dropbtn" style={{textDecoration: 'none'}}>Trang chủ</Link>
              </div>
              <div className="dropdown">
                  <button className="dropbtn">Thông tin</button>
                  <div className="dropdown-content">
                      <Link to="/">Collector</Link>
                      <Link to="/">Janitor Team</Link>
                  </div>
              </div>
              <div className="dropdown">
                  <button className="dropbtn">Nhiệm vụ</button>
                  <div className="dropdown-content">
                      <Link to="/task">Cho Collector</Link>
                      <Link to="/task">Cho Janitor</Link>
                  </div>
              </div>
              <div className="dropdown">
                  <a href="/#" className="dropbtn" style={{textDecoration: 'none'}}>Liên hệ</a>
              </div>
          </nav>
          <div style={{backgroundColor: "#fff"}}></div>
        </div>
    );
}
    
export default Navbar;