import { useEffect } from 'react';
import { Image } from 'react-native';
import { RootContainer } from './styles';
import { SplashProps } from '@shared/model/types/navigation';

const SplashScreen = ({ navigation }: SplashProps) => {

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Onboarding');
		}, 5000);
	});

	return(
		<RootContainer colors={['#2B1D4A', '#1F1E22']}>
			<Image source={require('../../../../assets/images/logo.png')}/>
		</RootContainer>
	);
};

export default SplashScreen;
