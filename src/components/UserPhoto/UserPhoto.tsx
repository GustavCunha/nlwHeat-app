import React from 'react';
import { Avatar, Container } from './UserPhoto.styles';
import avatarImg from '../../assets/avatar.png';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../theme';

const SIZES ={
    SMALL: {
        containerSize: 32,
        avatarSize: 28,
    },
    NORMAL: {
        containerSize: 48,
        avatarSize: 42,
    },
}

type Props = {
    imageUri: string | undefined;
    sizes?: 'SMALL' | 'NORMAL';

}

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({imageUri, sizes = 'NORMAL'}: Props) {
    const {containerSize, avatarSize} = SIZES[sizes];
    
    return (
        <Container 
            colors={[COLORS.BLUE, COLORS.YELLOW]} 
            width={containerSize}
            height={containerSize}
            start={{x: 0, y: 0.8}}
            end={{x: 0.9, y: 1}}
        >
            <Avatar 
                source={{uri: imageUri || AVATAR_DEFAULT }}
                width={avatarSize}
                height={avatarSize}
            />
        </Container>
    )
}
