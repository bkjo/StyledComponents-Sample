import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { actionCreators } from '../../reducer';
import Logo from '../logo';
import ButtonRender from './buttonRender';

const Container = styled.div`
    witdht: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    background-color: yellow;
`;

const NavButton = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const ButtonFilter = ["PAGE1","PAGE2","PAGE3"];

class Nav extends Component {
    
    _handleButton = (e) =>{
        const {selectButton} = this.props;
        selectButton(e.target.title);
    }
    
    render() {
        return (
            <Container>
                <Logo />
                <NavButton>
                    <ButtonRender handleButton={this._handleButton} ButtonFilter={ButtonFilter}/>
                </NavButton>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const { item } = state;
    return {
        item
    };
};


const mapDispatcherToProps = dispatch => {
    return {
        selectButton: (item) => dispatch(actionCreators.selectButton(item))
    }
};

export default connect(mapStateToProps,mapDispatcherToProps)(Nav);