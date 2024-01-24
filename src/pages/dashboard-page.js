import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { client } from "../axiosConfig";
import sha256 from 'crypto-js/sha256';

const DashBoardPage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        client.get("/products").then((response) => {
            console.log('Response: ', response.data.products);
            setData(response.data.products)
        }).catch((err) => {
            console.log(err)
        });
    }, [])
    return <Container>
        <Row>
            <Col> <h1 className="text-center text-uppercase"> Dashboard Page after Successful Login!.  </h1> </Col>
        </Row>
        <Row>
            <ul className="products d-flex">
                {
                    data && data.length > 0 && data.map((item) => {
                        return <li>
                            <h2>{item.title}</h2>
                            <img src={item.thumbnail} />
                            <span>Price: Rs {item.price} </span>
                            <p>{item.description}</p>
                            {/* <Link to={`/details/${sha256(item.id)}`}>More Details</Link> */}
                            <Link to={`/details/${item.id}`}>More Details</Link>
                            <div className="btn_wrap">
                                <button className="cart">
                                    Add To Cart
                                </button>
                                <button className="buy">
                                    Buy Product
                                </button>
                            </div>
                        </li>
                    })
                }
            </ul>
        </Row>
    </Container>
}

export default DashBoardPage;