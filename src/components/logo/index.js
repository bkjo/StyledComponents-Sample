import React, { Component } from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: 120px;
  min-width: 120px;
`


class Logo extends Component {
    render() {
      return (
        <LogoWrapper>
            Logo
        </LogoWrapper>
      );
    }
  }
  
  export default Logo;