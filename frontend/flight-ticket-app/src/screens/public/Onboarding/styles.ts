import styled from 'styled-components/native';

export const RootContainer = styled.SafeAreaView`
  flex: 1;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background.primary};
`;

export const Header = styled.View`
  width: 100%;
  align-items: flex-end;
  margin: 20px 0;
`;

export const Main = styled.View`
  align-items: center;
  width: 100%;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.View`
  height: 290px;
  width: 190px;
  margin: 20px 0;
  border-radius: 100px;
  border: 20px solid ${({theme}) => theme.colors.background.secondary};
`;

export const Title = styled.Text`
  margin: 10px 0;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const SubTitle = styled.Text`
  margin: 10px 0;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: ${({theme}) => theme.colors.text.secondary};
`;

export const Label = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.text.primary};
`;
