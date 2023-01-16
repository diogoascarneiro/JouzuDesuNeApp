import styled from 'styled-components/native';
import {Container} from '../../components/UI/BaseStyles';
export {LogoS} from '../../components/UI/Logos';
export {H1, H2, H3} from '../../components/UI/Text';
export {UsernameInput, PasswordInput} from '../../components/UI/Inputs';
export {BtnFull} from '../../components/UI/Buttons';

export const MainContainer = styled(Container)`
  height: 100%;
  padding: 10%;
  //background-color: ${props => props.theme.colors.accent2};
  justify-content: center;
  align-items: center;
`;

export const AuthWrapper = styled(Container)``;

export const HeaderWrapper = styled(Container)`
  width: 100%;
  margin-bottom: 10%;
`;

export const LogoWrapper = styled(Container)`
  margin-bottom: 25px;
  align-items: center;
`;
