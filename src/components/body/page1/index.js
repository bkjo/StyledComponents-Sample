import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: skyblue;
`

class Page1 extends Component {
    render() {
        return (
            <Container>
                Page1
            </Container>
        );
    }
}

export default Page1;