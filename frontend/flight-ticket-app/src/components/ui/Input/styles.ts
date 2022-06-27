import styled from 'styled-components/native';

export const RootContainer = styled.View`
  margin: 5px 0;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.background.secondary};
`;

export const Field = styled.TextInput`
  color: #8C8A93;
  width: 93%;
`;

export const Label = styled.Text`
  margin: 10px 0;
  color: ${({theme}) => theme.colors.text.primary};
`;


