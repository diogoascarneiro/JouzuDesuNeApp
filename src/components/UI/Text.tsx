import styled from 'styled-components/native';
import {BaseText} from './BaseStyles';

//TODO: Remove props below if not needed. leaving them now for future reference
interface TextProps {
  color?: string;
  theme: any;
  align?: 'left' | 'center' | 'right';
}

export const Heading = styled.Text.attrs((props: TextProps) => ({
  color: props.color || props.theme.colors.accent3,
  align: props.align || 'left',
}))`
  font-family: 'VarelaRound-Regular';
  color: ${props => props.color};
  text-align: ${props => props.align};
  width: 100%;
`;

export const P = styled(BaseText).attrs((props: TextProps) => ({
  color: props.color || props.theme.colors.accent3,
  align: props.align || 'left',
}))`
  font-size: 16px;
  color: ${props => props.color};
  text-align: ${props => props.align};
  margin: 2% 0;
`;

export const H1 = styled(Heading)`
  font-size: 32px;
`;

export const H2 = styled(Heading)`
  font-size: 26px;
`;

export const H3 = styled(Heading)`
  font-size: 21px;
`;
