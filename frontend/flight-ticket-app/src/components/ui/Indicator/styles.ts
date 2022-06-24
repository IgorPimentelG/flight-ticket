import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Marker = styled.View<any>`
  margin-right: 15px;
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: ${
	({theme, isActive}) => isActive ?
		theme.colors.main.primary :
		theme.colors.background.tertiary
};
`;
