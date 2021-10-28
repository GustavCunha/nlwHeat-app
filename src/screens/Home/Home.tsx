import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Header } from '../../components/Header/Header';
import { MessageList } from '../../components/MessageList/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm/SendMessageForm';
import { SignInBox } from '../../components/SignInBox/SignInBox';
import { useAuth } from '../../hooks/auth';
import { Container } from './Home.styles';

export function Home() {
    const {user} = useAuth();

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <Container>
                <Header />

                <MessageList />
                
                {user ? <SendMessageForm /> : <SignInBox />}
            </Container>
        </KeyboardAvoidingView>
    )
}