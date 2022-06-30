import { image } from '@assets/icons/varied';
import { SvgXml } from 'react-native-svg';
import {
	ContainerImage,
	LabelEmail,
	LabelName,
	RootContainer
} from './styles';
import {
	DrawerItemList,
	DrawerContentScrollView,
	DrawerContentComponentProps
} from '@react-navigation/drawer';
import { LogoutButton } from '@components/ui';

const MenuDrawer = (props: DrawerContentComponentProps) => {
	return(
		<RootContainer>
			<DrawerContentScrollView>

				<ContainerImage>
					<SvgXml xml={image} height={30} width={30} color='#FFF'/>
				</ContainerImage>

				<LabelName>James Bond</LabelName>
				<LabelEmail>info@test.com</LabelEmail>

				<DrawerItemList {...props}/>

				<LogoutButton/>

			</DrawerContentScrollView>
		</RootContainer>
	);
};

export default MenuDrawer;
