import styled from 'styled-components/native';

export const RootContainer = styled.View`
  flex: 1;
  padding: 30px 30px 5px 30px;
`;

export const Header = styled.View`
  margin: 20px 0;
  flex-direction: row;
  align-items: center;
`;

export const ScreenTitle = styled.Text`
  margin: 0 15px;
  font-size: 20px;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const Main = styled.View`
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const Link = styled.Text`
  width: 100%;
  margin: 10px 0 40px 0;
  text-align: right;
  color: ${({theme}) => theme.colors.main.primary};
`;

export const ContainerDivider = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0 10px 0;
  width: 100%;
`;

export const Line = styled.View`
  flex: 1;
  border: 0.5px solid #fff;
`;

export const Label = styled.Text`
  margin: 0 10px;
  font-size: 16px;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const Footer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const OutlineLink = styled.Text`
  color: ${({theme}) => theme.colors.main.primary};
  text-decoration: underline;
`;
