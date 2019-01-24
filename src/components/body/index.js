import React, { Component } from 'react';
import styled from 'styled-components';

import MenuList from './menuList';
import Content from './content';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background: blue;
`

class Body extends Component {
    render() {
        return (
            <Container>
                <MenuList/>
                <Content />
            </Container>
        );
    }
}

export default Body;