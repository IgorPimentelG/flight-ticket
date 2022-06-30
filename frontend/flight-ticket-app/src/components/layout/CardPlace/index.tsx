import { Feather, Ionicons } from '@expo/vector-icons';
import { Container, Image, ContainerInfo, Footer, Label, Title } from './styles';

const CardPlace: React.FC<{
  country: string;
  city: string;
  rate: number;
  urlImage: string;
}> = ({ country, city, rate, urlImage }) => {
	return(
		<Container>
			<Image source={{ uri: urlImage }}/>
			<Title>{city}</Title>

			<Footer>
				<ContainerInfo>
					<Feather name='map-pin' color='#8C8A93' size={20}/>
					<Label>{country}</Label>
				</ContainerInfo>

				<ContainerInfo>
					<Ionicons name='star' color='#FF9A3E' size={20}/>
					<Label>{rate}</Label>
				</ContainerInfo>
			</Footer>
		</Container>
	);
};

export default CardPlace;
