import "./Login.css"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as React from 'react';

const Login = ()=>{

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };

    return (

    <Container style={{marginTop: '50px'}}>
        <Row width={200} >
            <Col xs={12|{order: 'last'}} md={12|{order: 'last'}} lg={8|{order: 'last'}} style={{justifyContent: `center`}}>
                <div className="left-container animate">
                    <div>
                        <img src="image/company_image.jpg" style={{width: `100%`}} alt="Anh cong ty" />
                    </div>
                </div>
                
            </Col>
            
            <Col xs={12|{order: 'first'}} md={12|{order: 'first'}} lg={4|{order: 'first'}}>
                <form className="modal-content animate" method="post">
                    
                    <div className="container">
                        <label for="uname"><b>Tên đăng nhập</b></label>
                        <input type="text" placeholder="Nhập tên đăng nhập" name="uname" required />
                    
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Nhập mật khẩu" name="psw" required />
                            
                        <button type="submit">Đăng nhập</button>
                        <label>
                            <input
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                            />
                            &nbsp;&nbsp;Remember me
                        </label>
                    </div>
                
                    <div className="container">
                        <span class="psw">Forgot <a href="/login/forgotpw">password?</a></span>
                    </div>
                </form>
            </Col>
        </Row>
    </Container>

    );
}

export default Login