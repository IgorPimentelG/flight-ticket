import { ReactNode } from 'react';
import { Container } from './styles';

const CardIconMenu: React.FC<{ children: ReactNode }> = ({ children }) => {
	return(
		<Container>
			{children}
		</Container>
	);
};

export default CardIconMenu;
