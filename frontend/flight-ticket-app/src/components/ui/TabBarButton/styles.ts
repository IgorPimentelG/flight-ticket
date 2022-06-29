import styled from 'styled-components/native';

export const Container = styled.View<any>`
  align-items: center;
  flex-direction: row;
  padding: 10px 15px;
  border-radius: 50px;
  background-color: ${({theme, isFocused}) => isFocused ? theme.colors.background.primary : 'transparent'};
`;

export const Label = styled.Text<any>`
  display: ${({isFocused}) => isFocused ? 'flex' : 'none'};
  margin-left: 10px;
  text-transform: capitalize;
  color: ${({theme}) => theme.colors.text.primary};
`;
