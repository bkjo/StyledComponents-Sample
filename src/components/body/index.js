import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`

class Body extends Component {

    _handlePage = () => {
        const {item} = this.props;
        switch(item){
            case "PAGE1":
                return <Page1 />;
            case "PAGE2":
                return <Page2 />;
            case "PAGE3":
                return <Page3 />;
            default :
                return null;
        }
    }

    render() {
        return (
            <Container>
                {this._handlePage()}
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

export default connect(mapStateToProps)(Body);