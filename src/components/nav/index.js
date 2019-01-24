import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../logo';

const Container = styled.div`
    witdht: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    background: yellow;
`;
const Button = styled.button`
    border-radius: 50px;
    padding 5px;
    min-width: 120px;
    cursor: pointer;
    font-weight: 600;
    background: #474a98;
    color: #fff;
`;
const NavButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

class Nav extends Component {
    render() {
        return (
            <Container>
                <Logo />
                <NavButton>
                    <Button>button1</Button>
                    <Button>button2</Button>
                    <Button>button3</Button>
                </NavButton>
            </Container>
        );
    }
}

export default Nav;