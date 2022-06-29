import styled from 'styled-components/native';

export const RootContainer = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.background.primary};
`;

export const LabelName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0 5px 0;
  text-transform: capitalize;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const LabelEmail = styled.Text`
  margin-bottom: 30px;
  opacity: 0.7;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const ContainerImage = styled.View`
  padding: 10px;
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background-color: #C4C4C4;
`;

export const LogoutButton = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const LabelButton = styled.Text`
  color: #FF6363;
  font-size: 16px;
  margin-left: 15px;
`;

export const Options = styled.View``;
