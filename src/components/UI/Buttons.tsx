import React from 'react';
import styled from 'styled-components/native';

interface BtnProps {
  onPress?: () => any;
  title: string;
}
const RoundedTouchableOpacity = styled.TouchableOpacity`
  height: 40px;
  width: 180px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  margin-top: 16px;
`;

const RoundedTouchableOpacityFull = styled(RoundedTouchableOpacity)`
  width: 100%;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.light};
  font-size: 16px;
`;

export const Btn = ({onPress, title}: BtnProps) => {
  return (
    <RoundedTouchableOpacity onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </RoundedTouchableOpacity>
  );
};

export const BtnFull = ({onPress, title}: BtnProps) => {
  return (
    <RoundedTouchableOpacityFull onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </RoundedTouchableOpacityFull>
  );
};
