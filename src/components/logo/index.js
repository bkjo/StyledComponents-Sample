import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';
const LogoWrapper = styled.div`
  width: 120px;
  min-width: 120px;
`;

const MenuTrigger = styled.a`
  display : inline-block;
  box-sizing : border-box;
  
  position : relative;
	width : 25px;
  height : 25px;
  margin: 10px;
`;

const MenuTriggerSpan = styled.span`
  display : inline-block;
  box-sizing : border-box;

	position : absolute;
	left : 0;
	width : 100%;
	height : 5px;
	background-color : #000;
	border-radius : 5px;
}
&:nth-of-type(1){
	top : 0;
}
&:nth-of-type(2){
	top : 10px;
}
&:nth-of-type(3){
	bottom : 0;
}
`;

class Logo extends Component {
    render() {
      return (
        <LogoWrapper>
            <MenuTrigger href="#">
              <MenuTriggerSpan />
              <MenuTriggerSpan />
              <MenuTriggerSpan />
            </ MenuTrigger>
        </ LogoWrapper>
      );
    }
  }
  
  export default Logo;