import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.colors.text.secondary};
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  color: ${({theme}) => theme.colors.text.secondary};
`;
