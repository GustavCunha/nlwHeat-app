import styled from "styled-components/native";
import { FONTS } from "../../theme";

export const ButtonWrapper = styled.TouchableOpacity`
    height: 48px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 14px;
    font-family: ${FONTS.BOLD};
`;