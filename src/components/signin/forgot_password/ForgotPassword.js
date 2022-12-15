import "./ForgotPassword.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as React from 'react';

const ForgotPassword = ()=>{
    
    // const [checked, setChecked] = React.useState(false);

    // const handleChange = () => {
    //   setChecked(!checked);
    // };

    return (

    <Container style={{marginTop: '50px'}}>
        <Row width={200} >
            <Col xs={12|{order: 'last'}} md={12|{order: 'last'}} lg={8|{order: 'last'}} style={{justifyContent: `center`}}>
                <div className="left-container animate">
                    <div>
                        <img src="/image/company_image.jpg" style={{width: `100%`}} alt="Anh cong ty" />
                    </div>
                </div>
                
            </Col>
            
            <Col xs={12|{order: 'first'}} md={12|{order: 'first'}} lg={4|{order: 'first'}}>
                <div className="modal-content animate" method="post">
                    <div class="imgcontainer">
                        KHÔI PHỤC MẬT KHẨU
                    </div>
                    <div className="sub-form-container">
                        <form className="modal-content animate" >
                            <div className="container">
                                <input type="text" placeholder="Số điện thoại đã đăng ký" name="uname" required />

                                <button type="submit">Lấy mã xác thực</button>
                            </div>
                        </form>
                    
                        <form className="modal-content animate" >
                            <div className="container">
                                <input type="password" placeholder="Mã xác thực" name="psw" required />
                                    
                                <button type="submit">Xác thực</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
                
            </Col>
        </Row>
    </Container>

    );

}

export default ForgotPassword