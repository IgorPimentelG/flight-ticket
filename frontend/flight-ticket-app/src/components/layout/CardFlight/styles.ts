import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.background.secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerInfo = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const LabelTime = styled.Text`
  position: relative;
  top: -30px;
  left: 5px;
  color: #DCDEE3;
`;

export const ContainerLocation = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  margin-top: 20px;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const LabelLocation = styled.Text`
  color: #EAEDFA;
  font-size: 16px;
`;

export const TitleInfo = styled.Text`
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.text.quaternary};
`;

export const LabelInfo = styled.Text`
  font-size: 18px;
  text-align: right;
  color: #EAEDFA;
`;

export const LabelPrice = styled.Text`
  color: #EAEDFA;
  font-size: 22px;
  font-weight: bold;
`;

export const ContainerLine = styled.View`
  position: relative;
  top: 15px;
  left: -40px;
  flex-direction: row;
  align-items: center;
`;

export const Circle = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background-color: ${({theme}) => theme.colors.background.primary};
`;

export const Line = styled.View`
  flex-direction: row;
  width: 100%;
  margin: 0 10px;
  height: 0;
  border: 1px dashed #EAEDFA;
`;
