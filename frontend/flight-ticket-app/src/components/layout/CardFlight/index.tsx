import { Image, View } from 'react-native';
import {
	Container,
	Title,
	Header,
	TitleInfo,
	ContainerInfo,
	LabelInfo,
	ContainerLocation,
	LabelLocation,
	LabelTime,
	LabelPrice,
	Footer,
	ContainerLine,
	Line,
	Circle
} from './styles';

const CardFlight = () => {
	return(
		<Container>
			<Header>
				<Title>nyc</Title>
				<Image source={require('@assets/images/plane.png')}/>
				<Title>SFO</Title>
			</Header>

			<ContainerLocation>
				<LabelLocation>New York City</LabelLocation>
				<LabelTime>2h/{'\n'}35m</LabelTime>
				<LabelLocation>San Fransisco</LabelLocation>
			</ContainerLocation>

			<ContainerInfo>
				<View>
					<TitleInfo>date & time</TitleInfo>
					<LabelInfo>Feb 25, 11:30pm</LabelInfo>
				</View>

				<View>
					<TitleInfo>flight number</TitleInfo>
					<LabelInfo>AB689</LabelInfo>
				</View>
			</ContainerInfo>

			<ContainerLine>
				<Circle/>
				<Line/>
				<Circle/>
			</ContainerLine>

			<Footer>
				<Image source={require('@assets/images/logo_circle.png')}/>
				<LabelPrice>$500</LabelPrice>
			</Footer>
		</Container>
	);
};

export default CardFlight;
