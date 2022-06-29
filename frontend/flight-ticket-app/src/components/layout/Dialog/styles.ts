import styled from 'styled-components/native';

export const RootContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.View`
  width: 65%;
  padding: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 26px;
`;

export const Label = styled.Text`
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  align-items: center;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.error.primary};
`;

export const LabelButton = styled.Text`
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
`;
