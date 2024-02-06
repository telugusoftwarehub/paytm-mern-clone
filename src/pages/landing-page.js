import React from "react";
import { Container, Row, Col } from "reactstrap";
import DefaultHeader from "../components/default-header";
// import { loginForm } from "../configs/forms/login-form";
// import Form from "../components/form";
import banner from "../images/1697527211984.avif";
import logo_small from "../images/logo_1.avif";

const LandingPage = () => {
    return <>
        {/* <Container className="shadow-lg position-fixed z-4 top-0 start-0" fluid> */}
        <Container className="shadow-lg  z-4 top-0 start-0" fluid>
            <Container>
                <DefaultHeader />
            </Container>
        </Container>
        <Container className="p-3 bg-light" fluid>
            <p className="text-center p-0 m-0">No Wallet KYC Required 😊 to pay using UPI on Paytm. Learn more.</p>
        </Container>
        <Container className="banner " fluid>
            <Container>
                <Row xs="1" md="2">
                    <Col className="about pt-5">
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