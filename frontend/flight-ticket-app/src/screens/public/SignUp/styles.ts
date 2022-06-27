import styled from 'styled-components/native';

export const ContainerTerm = styled.View`
  flex-direction: row;
  margin: 20px 0;
  flex-wrap: wrap;
`;

export const CheckboxLabel = styled.Text`
  font-size: 14px;
  margin: 0 3px;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const ContainerLabel = styled.View`
  flex-direction: row;
`;
