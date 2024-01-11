import React from "react";
import { Container, Row, Col } from "reactstrap";
import DefaultHeader from "../components/default-header";
// import { loginForm } from "../configs/forms/login-form";
// import Form from "../components/form";
import banner from "../images/1697527211984.avif";
import logo_small from "../images/logo_1.avif";

const LandingPage = () => {
    return <>
        <Container>
            <DefaultHeader />
        </Container>
        <Container className="banner" fluid>
            <Container>
                <Row xs="1" md="2">
                    <Col className="about">
                        <div className="paytm_logo">
                            <img src={logo_small} />
                        </div>
                        <h1>India's Most-loved Payments App</h1>
                        <p>Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.</p>
                    </Col>
                </Row>
            </Container>
            <div className="paytm_app_img">
                <img src={banner} alt="app banner" />
            </div>
        </Container>
    </>
}

export default LandingPage;