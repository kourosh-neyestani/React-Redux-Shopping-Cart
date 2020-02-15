import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import icon from './icon-shopping-cart.png';
import './style.css';

function Header() {

    const cart = useSelector(state => state.cart);

    return (
        <header className="site-header">
            <Container>
                <h1>React Shopping Cart <small>v1.0</small></h1>
                <button className="header-button">
                    {cart !== 0 && <span class="count">{cart}</span>}
                    <img src={icon} alt="alt" />
                </button>
            </Container>
        </header>
    )

}

export default Header;