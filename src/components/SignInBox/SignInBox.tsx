import React from 'react';
import { COLORS } from '../../theme';
import { Button } from '../Button/Button';
import { SignInBoxWrapper } from './SignInBox.styles';

export function SignInBox() {
    return (
        <SignInBoxWrapper>
            <Button 
                title="Entrar com o GitHub"
                color={COLORS.BLACK_PRIMARY}
                backgroundColor={COLORS.YELLOW}
                icon="github"
            />
        </SignInBoxWrapper>
    )
}
