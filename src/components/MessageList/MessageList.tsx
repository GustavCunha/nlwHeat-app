import React from 'react';
import { ScrollView } from 'react-native';
import { Message } from '../Message/Message';
import { styles } from './MessageList.styles';

export function MessageList() {

    const message = {
        id: '1',
        text: 'Testando',
        user: {
            name: 'Carlos',
            avatar_url: 'https://randomuser.me/api/portraits/men/32.jpg',
        }
    }
    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="never"
        >
            <Message data={message}/>
            <Message data={message}/>
            <Message data={message}/>
            <Message data={message}/>
            
        </ScrollView>
    )
}
