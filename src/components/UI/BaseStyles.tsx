/* eslint-disable curly */
import styled from 'styled-components/native';

interface ContainerProps {
  padded?: boolean;
  paddedHorizontal?: boolean;
  paddedVertical?: boolean;
}

export const BaseText = styled.Text`
  font-size: 16px;
  font-family: 'VarelaRound-Regular';
`;

export const Container = styled.View<ContainerProps>`
  width: 100%;
  padding: ${({padded, paddedHorizontal, paddedVertical}) => {
    if (padded) return '5%';
    if (paddedHorizontal) return '0 5%';
    if (paddedVertical) return '5% 0';
    return '0';
  }};
`;
