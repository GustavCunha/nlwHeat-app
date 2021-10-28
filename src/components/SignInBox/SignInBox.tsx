import React from 'react';
import { useAuth } from '../../hooks/auth';
import { COLORS } from '../../theme';
import { Button } from '../Button/Button';
import { SignInBoxWrapper } from './SignInBox.styles';

export function SignInBox() {
    const {signIn, isSigning} = useAuth();

    return (
        <SignInBoxWrapper>
            <Button 
                title="Entrar com o GitHub"
                color={COLORS.BLACK_PRIMARY}
                backgroundColor={COLORS.YELLOW}
                icon="github"
                onPress={signIn}
                isLoading={isSigning}
            />
        </SignInBoxWrapper>
    )
}
