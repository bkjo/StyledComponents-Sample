import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border-radius: 50px;
    padding 5px;
    min-width: 120px;
    cursor: pointer;
    font-weight: 600;
    background: #474a98;
    color: #fff;
`;

const ButtonRender = ({handleButton, ButtonFilter}) => {
    return ButtonFilter.map((data)=>{
        return (
            <Button type="button" title={data} key={data} onClick={handleButton}>{data}</Button>
        );
    })
};

export default ButtonRender;