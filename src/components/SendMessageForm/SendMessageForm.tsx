import React, { useState } from 'react';
import { COLORS } from '../../theme';
import { Button } from '../Button/Button';
import { Container, Input } from './SendMessageForm.styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

    return (
        <Container>
            <Input 
                style={{textAlignVertical: 'top'}}
                keyboardAppearence="dark"
                placeholder="Qual sua expectativa para o evento?"
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                multiline
                maxLength={140}
                value={message}
                onChangeText={setMessage}
                editable={!sendingMessage}
            />

            <Button 
                title="Enviar mensagem"
                color={COLORS.WHITE}
                backgroundColor={COLORS.BLUE}
            />
        </Container>
    )
}
