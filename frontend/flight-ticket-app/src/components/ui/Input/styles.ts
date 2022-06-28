import styled from 'styled-components/native';

export const RootContainer = styled.View`
  margin: 5px 0;
`;

export const Container = styled.View<any>`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.background.secondary};
  ${({theme, hasError}) => hasError ? `border: 1px solid ${theme.colors.error.primary}` : 'border: none;'}
`;

export const Field = styled.TextInput<any>`
  color: #8C8A93;
  width: 93%;
`;

export const Label = styled.Text`
  margin: 10px 0;
  color: ${({theme}) => theme.colors.text.primary};
`;


