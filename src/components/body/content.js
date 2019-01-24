import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: gray;
`

class MenuList extends Component {
    render() {
        return (
            <Container>
                content
            </Container>
        );
    }
}

export default MenuList;