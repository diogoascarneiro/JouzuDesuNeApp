import styled from 'styled-components/native';
import {BaseText} from './BaseStyles';

//TODO: Remove props below if not needed. leaving them now for future reference
interface TextProps {
  color?: string;
  theme: any;
}

export const H1 = styled.Text.attrs((props: TextProps) => ({
  color: props.color || props.theme.colors.accent3,
}))`
  font-size: 32px;
  font-family: 'VarelaRound-Regular';
  color: ${props => props.color};
`;

export const H2 = styled.Text.attrs((props: TextProps) => ({
  color: props.color || props.theme.colors.accent3,
}))`
  font-size: 26px;
  font-family: 'VarelaRound-Regular';
  color: ${props => props.color};
`;

export const H3 = styled.Text.attrs((props: TextProps) => ({
  color: props.color || props.theme.colors.accent3,
}))`
  font-size: 21px;
  font-family: 'VarelaRound-Regular';
  color: ${props => props.color};
`;

export const P = styled(BaseText).attrs((props: TextProps) => ({
  color: props.color || props.theme.colors.accent3,
}))`
  font-size: 16px;
  color: ${props => props.color};
`;
