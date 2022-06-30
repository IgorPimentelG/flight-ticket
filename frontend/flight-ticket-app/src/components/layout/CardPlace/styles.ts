import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px 10px 15px 10px;
  margin-right: 15px;
  width: 75%;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background.secondary};
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  object-fit: contain;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin: 15px 0;
  color: ${({theme}) => theme.colors.text.primary};
`;

export const Label = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  color: #8C8A93;
`;
