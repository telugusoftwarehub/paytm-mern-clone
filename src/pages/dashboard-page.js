import React from "react";
import {Container, Row, Col} from "reactstrap"
const DashBoardPage = () => {
    return <Container>
        <Row>
            <Col> <h1 className="text-center text-uppercase"> Dashboard Page after Successful Login!.  </h1> </Col>
        </Row>
        <div className="d-flex p-2">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe illo, perferendis rerum, quidem ipsa, ex quaerat debitis iure modi cupiditate et earum temporibus nemo nulla velit itaque in omnis nihil.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe illo, perferendis rerum, quidem ipsa, ex quaerat debitis iure modi cupiditate et earum temporibus nemo nulla velit itaque in omnis nihil.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe illo, perferendis rerum, quidem ipsa, ex quaerat debitis iure modi cupiditate et earum temporibus nemo nulla velit itaque in omnis nihil.</p>    
        </div>
    </Container>
}

export default DashBoardPage;