import styled from 'styled-components/native';
import React from 'react';
import {Container} from '../../components/UI/BaseStyles';
import {P} from '../../components/UI/Text';
export {LogoS} from '../../components/UI/Logos';
export {H1, H2, H3} from '../../components/UI/Text';
export {UsernameInput, PasswordInput} from '../../components/UI/Inputs';
export {BtnFull} from '../../components/UI/Buttons';
import {TouchableOpacity} from 'react-native';

interface TextLinkProps {
  children: any;
  onPress: () => void;
}

export const MainContainer = styled(Container)`
  height: 90%;
  padding: 10%;
  //background-color: ${props => props.theme.colors.accent2};
  justify-content: center;
  align-items: center;
`;

export const AuthWrapper = styled(Container)``;

export const NavWrapper = styled(Container)`
  padding: 15px;
  height: auto;
`;

export const HeaderWrapper = styled(Container)`
  width: 100%;
  margin-bottom: 10%;
`;

export const LogoWrapper = styled(Container)`
  margin-bottom: 25px;
  align-items: center;
`;

export const ErrorText = styled(P)`
  color: red;
`;

export const TextLink = ({children, onPress}: TextLinkProps) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <P>{children}</P>
      </TouchableOpacity>
    </>
  );
};
