import styled from 'styled-components/native';

export const RootContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ContainerSettings = styled.View`
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.colors.text.primary};
`;

