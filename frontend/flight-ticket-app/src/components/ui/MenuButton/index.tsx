import { Container, ContainerInfo, Label } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { OutlineIcon } from '@shared/model/enum/icon';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { iconsMenu } from '@shared/helpers/icons';

const MenuButton: React.FC<{
  label: string;
  icon: OutlineIcon;
  onPress: () => void;
}> = ({ label, icon, onPress }) => {
	const theme = useTheme();

	return(
		<Container onPress={onPress}>
			<ContainerInfo>
				<SvgXml
					xml={iconsMenu[icon]}
					color={theme.colors.text.secondary}
					width={25}
					height={25}
				/>
				<Label>{label}</Label>
			</ContainerInfo>

			<MaterialIcons
				name='keyboard-arrow-right'
				color={theme.colors.text.secondary}
				size={25}
			/>
		</Container>
	);
};

export default MenuButton;
