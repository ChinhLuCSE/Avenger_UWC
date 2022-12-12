import "./Header.css"
const Header = ()=>{
    return (
        <header>
          <div id="left-div">
              <img src="/image/UWC2.0_logo.jpg" alt="logo"/>
              <p style={{margin: "7px 0px 0px 0px"}}><strong>TÊN CÔNG TY - UWC 2.0</strong></p>
          </div>
          <div id="right-div">
              <button className="btn btn-light" style={{margin: "7px 0px 0px 0px"}}><a href="/#">Đăng nhập</a></button>
          </div>
        </header>
    );
}

export default Header;