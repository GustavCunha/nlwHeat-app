import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button/Button';
import { Container, Input } from './SendMessageForm.styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

    async function handleMessageSubmit() {
        const messageFormated = message.trim();

        if(messageFormated.length > 0) {
            setSendingMessage(true);
            await api.post('/messages', {message: messageFormated});
            setMessage('');
            Keyboard.dismiss();
            setSendingMessage(false);
            alert('Mensagem enviada com sucesso!'); 
        }else{
            alert('Escreva a mensagem para enviar.')
        }
    }

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
                isLoading={sendingMessage}
                onPress={handleMessageSubmit}
            />
        </Container>
    )
}
