import styled from 'styled-components/native';

export const TextInputFull = styled.TextInput`
  width: 100%;
  border-bottom-color: ${props => props.theme.colors.primary};
  border-bottom-style: solid;
  border-bottom-width: 1;
  color: ${props => props.theme.colors.primary};
`;
