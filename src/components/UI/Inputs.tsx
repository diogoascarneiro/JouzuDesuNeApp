import styled from 'styled-components/native';

export const TextInputFull = styled.TextInput`
  width: 100%;
  border-bottom-color: ${props => props.theme.colors.primary};
  border-bottom-width: 2px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  padding-bottom: 5px;
`;

export const UsernameInput = styled(TextInputFull).attrs(() => ({
  autoComplete: 'off',
  autoCapitalize: 'none',
  placeholder: 'Your username',
}))``;

export const EmailInput = styled(TextInputFull).attrs(() => ({
  autoComplete: 'off',
  autoCapitalize: 'none',
  placeholder: 'Your email',
}))``;

export const PasswordInput = styled(TextInputFull).attrs(() => ({
  autoComplete: 'off',
  autoCapitalize: 'none',
  placeholder: 'Your password',
  secureTextEntry: true,
}))``;
