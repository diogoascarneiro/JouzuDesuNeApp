import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';
import {H3} from '../UI/Text';
import {Container} from '../UI/BaseStyles';
export {P} from '../UI/Text';
export {Btn} from '../UI/Buttons';

export const Wrapper = styled.View`
  width: 200px;
  height: 400px;
  border: 1px solid black;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  justify-content: center;
`;

export const InnerContainer = styled(Container)`
  padding: 20px;
`;
export const TitleText = styled(H3)`
  text-align: center;
  padding: 5px;
`;
