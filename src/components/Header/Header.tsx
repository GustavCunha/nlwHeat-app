import React from 'react';
import { useAuth } from '../../hooks/auth';
import { Container, LogoutButton, LogoutText } from './Header.styles';

import LogoSvg from '../../assets/logoDoWhile.svg';
import { TouchableOpacity } from 'react-native';
import { UserPhoto } from '../UserPhoto/UserPhoto';

export function Header() {
    const {user, signOut} = useAuth();

    return (
        <Container>
            <LogoSvg />

            <LogoutButton>
            {user && 
                <TouchableOpacity onPress={signOut}>
                    <LogoutText>Sair</LogoutText> 
                </TouchableOpacity>
            } 
                <UserPhoto imageUri={user?.avatar_url}/>
            </LogoutButton>
        </Container>
    )
}
