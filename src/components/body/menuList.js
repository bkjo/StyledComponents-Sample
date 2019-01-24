import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 120px;
    min-width: 120px;
  display: flex;
  flex-direction: column;
`

class MenuList extends Component {
    render() {
        return (
            <Container>
                menuList
            </Container>
        );
    }
}

export default MenuList;