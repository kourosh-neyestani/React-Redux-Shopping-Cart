import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import icon from './icon-shopping-cart.png';
import './style.css';

function Header() {

    const [show, setShow] = useState(false);
    const cart = useSelector(state => state.cart);

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return (
        <header className="site-header">
            {console.log(cart)}
            <Container>
                <h1>React Shopping Cart <small>v1.0</small></h1>
                <button className="header-button" onClick={handleShow}>
                    {cart !== 0 && <span className="count">{cart}</span>}
                    <img src={icon} alt="alt" />
                </button>
            </Container>
            <div className={["site-sidenav", show && "active"].join(" ")}>
                <span className="sidenav-close" onClick={handleHide}></span>
                <div className="sidenav-inner">

                </div>
                <div className="sidenav-footer">
                    <div className="sidenav-checkout">
                        <Row>
                            <Col>
                                <span className="total">Total:</span>
                            </Col>
                            <Col>
                                <span className="count">${cart}</span>
                            </Col>
                        </Row>
                    </div>
                    <Button variant={cart === 0 ? "dark" : "primary"} size="lg" disabled={cart === 0 && true} block>CHECKOUT</Button>
                </div>
            </div>
        </header>
    )

}

export default Header;