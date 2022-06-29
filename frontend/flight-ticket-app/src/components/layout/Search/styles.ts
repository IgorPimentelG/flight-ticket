import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin: 20px 0;
  padding: 15px 10px;
  border-radius: 15px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background.secondary};
`;

export const Input = styled.TextInput`
  width: 80%;
  font-size: 16px;
  text-align: center;
  color: ${({theme}) => theme.colors.text.secondary};
`;
