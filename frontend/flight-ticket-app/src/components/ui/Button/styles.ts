import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.main.primary};
`;

export const Label = styled.Text`
  font-weight: 700;
  color: ${({theme}) => theme.colors.text.tertiary};
`;
