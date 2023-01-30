import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';
import {H3} from '../UI/Text';
export {P} from '../UI/Text';

export const Wrapper = styled.View`
  width: 100px;
  height: 200px;
  border: 1px solid black;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  justify-content: center;
`;

export const TitleText = styled(H3)`
  text-align: center;
  padding: 5px;
`;
