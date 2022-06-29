import { Search } from '@components/layout';
import { ContainerLabels, Label, LabelName, RootContainer, SubTitle, Title } from './styles';

const HomeScreen = () => {
	return(
		<RootContainer>
			<LabelName>Hello! James</LabelName>
			<Title>Where are you going?</Title>

			<Search/>

			<ContainerLabels>
				<SubTitle>Upcoming Flights</SubTitle>
				<Label>View All</Label>
			</ContainerLabels>

			<ContainerLabels>
				<SubTitle>Popular Places</SubTitle>
				<Label>View All</Label>
			</ContainerLabels>
		</RootContainer>
	);
};

export default HomeScreen;
