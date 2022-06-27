import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity`
  border: 1px solid #FFF;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background.primary};
`;
