import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: pink;
`

class Page2 extends Component {
    render() {
        return (
            <Container>
                Page2
            </Container>
        );
    }
}

export default Page2;