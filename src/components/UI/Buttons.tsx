import React from 'react';
import styled from 'styled-components/native';

interface btnProps {
  onPress?: () => any;
  title: string;
}
const RoundedTouchableOpacity = styled.TouchableOpacity`
  height: 60px;
  width: 180px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  margin-top: 16px;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.light};
  font-size: 16px;
`;

export const RoundedBtn = ({onPress, title}: btnProps) => {
  return (
    <RoundedTouchableOpacity onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </RoundedTouchableOpacity>
  );
};
