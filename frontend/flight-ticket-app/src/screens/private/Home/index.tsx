import { CardFlight, CardPlace, Search } from '@components/layout';
import { FlatList, ScrollView, View } from 'react-native';
import { ContainerLabels, Label, LabelName, RootContainer, SubTitle, Title } from './styles';

const HomeScreen = () => {

	// TEST
	const PLACES = [
		{
			id: 1,
			urlImage: 'https://i.pinimg.com/736x/42/cf/f2/42cff2824ae6517c891ab7a91d7fe0b0.jpg',
			country: 'France',
			city: 'Paris',
			rate: 4.8
		},
		{
			id: 2,
			urlImage: 'https://i.pinimg.com/736x/42/cf/f2/42cff2824ae6517c891ab7a91d7fe0b0.jpg',
			country: 'France',
			city: 'Paris',
			rate: 4.8
		}
	];

	return(
		<RootContainer>
			<LabelName>Hello! James</LabelName>
			<Title>Where are you going?</Title>

			<Search/>

			<ScrollView>
				<ContainerLabels>
					<SubTitle>Upcoming Flights</SubTitle>
					<Label>View All</Label>
				</ContainerLabels>

				<CardFlight/>

				<ContainerLabels>
					<SubTitle>Popular Places</SubTitle>
					<Label>View All</Label>
				</ContainerLabels>

				<ScrollView horizontal>
					{PLACES.map((item, index) => (
						<CardPlace
							key={index}
							city={item.city}
							country={item.country}
							rate={item.rate}
							urlImage={item.urlImage
							}/>
					))}
				</ScrollView>
			</ScrollView>
		</RootContainer>
	);
};

export default HomeScreen;
