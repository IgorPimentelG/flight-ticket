import { SvgXml } from 'react-native-svg';
import { Container, Label } from './styles';
import { useTheme } from 'styled-components';
import { MenuIcon } from '@shared/model/enum/icon';
import { home, plane, calendar, user } from '@assets/icons/tabMenu';

const TabBarButton: React.FC<{
  label: string;
  icon: MenuIcon;
  focused: boolean;
}> = ({ label, icon, focused }) => {

	const theme = useTheme();
	const icons = { home, plane, calendar, user };

	return(
		<Container isFocused={focused}>
			<SvgXml
				xml={icons[icon]}
				width={20}
				height={20}
				color={focused ? theme.colors.main.primary : theme.colors.icon.primary}
			/>
			<Label isFocused={focused}>
				{label}
			</Label>
		</Container>
	);
};

export default TabBarButton;
