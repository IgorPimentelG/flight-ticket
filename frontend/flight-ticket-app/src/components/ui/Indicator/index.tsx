import { useEffect, useState } from 'react';
import { Container, Marker } from './styles';

const Indicator: React.FC<{
  total: number;
  selected: number;
}> = ({ total, selected }) => {

	const [ids, setIds] = useState<number[]>([]);

	useEffect(() => {
		for (let i = 1; i <= total; i++) {
			setIds((currentState) => [...currentState, i]);
		}
	}, [total]);

	return(
		<Container>
			{ids.map((id) => (
				<Marker key={id} isActive={id === selected}/>
			))}
		</Container>
	);
};

export default Indicator;
