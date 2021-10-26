import React from 'react';
import { Container, LogoutButton, LogoutText } from './Header.styles';

import LogoSvg from '../../assets/logo.svg';
import { TouchableOpacity } from 'react-native';
import { UserPhoto } from '../UserPhoto/UserPhoto';

export function Header() {
    return (
        <Container>
            <LogoSvg />

            <LogoutButton>
                <TouchableOpacity> 
                    <LogoutText>Sair</LogoutText>
                </TouchableOpacity>
                
                <UserPhoto imageUri="https://randomuser.me/api/portraits/women/44.jpg"/>
            </LogoutButton>
        </Container>
    )
}
