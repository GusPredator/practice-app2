import React, { Component } from 'react';
import styled from 'styled-components'

class Login extends Component {
    render() {
        return (
            <Wrapper>
                <LogBox>Este es el login</LogBox>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    justify-content: center;
    align-content: center;
    background-color: #66696B;
`

const LogBox = styled.div`
    margin: auto;
    background-color: skyblue;
    width: 300px;
    height: 300px;
`

export default Login;