import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  margin: 10px 0%;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  color: ${({theme}) => theme.colors.text.primary};
`;
