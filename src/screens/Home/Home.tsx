import React from 'react';
import { Header } from '../../components/Header/Header';
import { MessageList } from '../../components/MessageList/MessageList';
import { Container } from './Home.styles';

export function Home() {
    return (
        <Container>
            <Header />

            <MessageList />
        </Container>
    )
}