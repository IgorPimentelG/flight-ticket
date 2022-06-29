import styled from 'styled-components/native';

export const RootContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ContainerLabels = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.text.quaternary};
`;

export const LabelName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.main.primary};
`;
