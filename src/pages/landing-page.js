import React from "react";
import { Container, Row, Col } from "reactstrap";
import DefaultHeader from "../components/default-header";
import { loginForm } from "../configs/forms/login-form";
import Form from "../components/form";
import banner from "../images/1697527211984.avif";
import logo_small from "../images/logo_1.avif";


const LandingPage = () => {
    return <>
        <Container>
            <DefaultHeader />
        </Container>
        <Container className="banner" fluid>
            <Row xs="1" md="2">
                <Col>
                    <img src={logo_small} />
                    <h1>India's Most-loved Payments App</h1>
                    <p>Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.</p>
                </Col>
            </Row>
        </Container>
    </>
}

export default LandingPage;