import { Image } from 'react-native';
import { Container, Label } from './styles';
import { SocialIcon } from '@shared/model/enum/icon';

const OutlineButton: React.FC<{
  label: string;
  icon: SocialIcon;
}> = ({ label, icon }) => {

	const icons = {
		google: require('../../../../assets/icons/google.png'),
		apple: require('../../../../assets/icons/apple.png')
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
