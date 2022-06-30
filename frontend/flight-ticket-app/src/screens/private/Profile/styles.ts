import styled from 'styled-components/native';

export const RootContainer = styled.View`
  padding:  0 20px 230px 20px;
`;

export const ContainerProfile = styled.View`
  width: 100%;
  margin: 20px 0 40px 0;
  align-items: center;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const LabelName = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const LabelOption = styled.Text`
  margin: 10px 0;
  font-size: 16px;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const ContainerSettings = styled.View`
  margin-top: 20px;
`;

export const ContainerAccount = styled.View`
  margin-top: 20px;
`;

export const ContainerEmirates = styled.View`
  margin-top: 15px;
`;

export const ContainerImage = styled.View`
  padding: 20px;
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: #c4c4c4;
`;

export const EditImageButton = styled.TouchableOpacity`
  position: relative;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: -35px;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: #FFF;
`;
