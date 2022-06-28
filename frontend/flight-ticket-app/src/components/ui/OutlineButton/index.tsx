import { Image } from 'react-native';
import { Container, Label } from './styles';
import { SocialIcon } from '@shared/model/enum/icon';

const OutlineButton: React.FC<{
  label: string;
  icon: SocialIcon;
}> = ({ label, icon }) => {

	const icons = {
		google: require('../../../../assets/icons/google.png'),
		twitter: require('../../../../assets/icons/twitter.png')
	};

	return(
		<Container>
			<Image
				width={15}
				height={15}
				resizeMode='contain'
				source={icons[icon]}
			/>
			<Label>{label}</Label>
		</Container>
	);
};

export default OutlineButton;
