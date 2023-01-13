import styled from 'styled-components/native';

//TODO: Remove props below if not needed. leaving them now for future reference
interface HeadingProps {
  //color?: string;
}

export const H1 = styled.Text<HeadingProps>`
  font-size: 32px;
  color: ${props => props.theme.colors.accent3};
`;

export const H2 = styled.Text<HeadingProps>`
  font-size: 26px;
  color: ${props => props.theme.colors.accent3};
`;

export const H3 = styled.Text<HeadingProps>`
  font-size: 21px;
  color: ${props => props.theme.colors.accent3};
`;

export const P = styled.Text`
  font-size: 16px;
`;
