import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { COLORS } from "../../theme";

export const Avatar = styled.Image<{width: number, height: number}>`
    border-width: 2px;
    border-color: ${COLORS.BLACK_SECONDARY};
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: ${props => props.width / 2}px;
`;

export const Container = styled(LinearGradient)<{width: number, height: number}>`
    justify-content: center;
    align-items: center;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: ${props => props.width / 2}px;
`;