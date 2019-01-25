import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: gray;
`

class Page3 extends Component {
    render() {
        return (
            <Container>
                Page3
            </Container>
        );
    }
}

export default Page3;