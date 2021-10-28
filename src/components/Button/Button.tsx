import React from 'react';
import { ActivityIndicator, ColorValue, TouchableOpacityProps } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { ButtonText, ButtonWrapper } from './Button.styles';

type Props = TouchableOpacityProps & { 
    title: string;
    color: ColorValue;
    backgroundColor: ColorValue;
    icon?: React.ComponentProps<typeof AntDesign>['name'];
    isLoading?: boolean;
}

export function Button({
    title, 
    color, 
    backgroundColor, 
    icon, 
    isLoading = false, 
    ...rest
}: Props) {
    return (
        <ButtonWrapper 
            style={{backgroundColor}} 
            activeOpacity={0.7}
            disabled={isLoading}
            {...rest}  
        >
            {isLoading ? <ActivityIndicator color={color}/> :
                <>
                    <AntDesign name={icon} size={24} style={{marginRight:12}}/>
                    <ButtonText style={{color}}>
                        {title}
                    </ButtonText>
                </>
            }
        </ButtonWrapper>
    )
}