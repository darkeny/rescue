import React from 'react'
import { ButtonLogin, ButtonLogout, Container, Content, H1 } from './styles'
import { Login } from '../../components/button-login'
import { Logout } from '../../components/button-logout'
import { useEffect } from 'react'
import { gapi } from 'gapi-script'

const clientId = "860354870799-orkpm9nlfkdiimhduf8h07pf05tumhu8.apps.googleusercontent.com";

export const Auth = () => {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client:auth2', start)
    })
    return (
        <Container>
            <ButtonLogout>
                <Logout />
            </ButtonLogout>
            <Content>
                <H1>Entrar para Rescue</H1>
                <ButtonLogin>
                    <Login />
                </ButtonLogin>

            </Content>
        </Container>
    )
}