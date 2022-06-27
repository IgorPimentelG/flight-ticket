import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, Indicator } from '@components/ui';
import { OnboardingProps } from '@shared/model/types/navigation';
import {
	Footer,
	Header,
	Icon,
	Label,
	Main,
	RootContainer,
	SubTitle,
	Title
} from './styles';

const OnboardingScreen = ({ navigation }: OnboardingProps) => {

	const TOTAL_INDICATOR = 3;
	const texts = [
		{
			title: 'Find a relax flight\n for next trip',
			subtitle: 'Try this smart app for your next\n flight booking ticket'
		},
		{
			title: 'Big world out there,\n Go Explore',
			subtitle: 'Easy to use the app for your next\n flight booking ticket'
		},
		{
			title: 'Ready to take\n off the flight',
			subtitle: 'Easy to use the app for your next\n flight booking ticket'
		},
	];

	const [indicator, setIndicator] = useState(0);

	function changeIndicator() {
		if (indicator + 1 === TOTAL_INDICATOR) {
			navigateToSignIn();
		} else {
			setIndicator((currentIndicator) => currentIndicator + 1);
		}
	}

	function navigateToSignIn() {
		navigation.replace('SignIn');
	}

	return(
		<RootContainer>
			<Header>
				<TouchableOpacity onPress={navigateToSignIn}>
					<Label>Skip</Label>
				</TouchableOpacity>
			</Header>

			<Main>
				<Icon/>
				<Title>{texts[indicator].title}</Title>
				<SubTitle>{texts[indicator].subtitle}</SubTitle>
			</Main>

			<Footer>
				<Indicator total={TOTAL_INDICATOR} selected={indicator + 1}/>
				<Button message={(indicator + 1) < TOTAL_INDICATOR ? 'Next' : 'Get Started'} onPress={changeIndicator}/>
			</Footer>
		</RootContainer>
	);
};

export default OnboardingScreen;
