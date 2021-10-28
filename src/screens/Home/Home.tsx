import React from 'react';
import { Header } from '../../components/Header/Header';
import { MessageList } from '../../components/MessageList/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm/SendMessageForm';
import { SignInBox } from '../../components/SignInBox/SignInBox';
import { Container } from './Home.styles';

export function Home() {
    return (
        <Container>
            <Header />

            <MessageList />

            {/* <SignInBox /> */}
            <SendMessageForm />
        </Container>
    )
}