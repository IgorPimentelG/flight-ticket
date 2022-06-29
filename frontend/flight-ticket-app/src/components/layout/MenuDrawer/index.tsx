import { image } from '@assets/icons/varied';
import { SvgXml } from 'react-native-svg';
import { SimpleLineIcons } from '@expo/vector-icons';
import { ContainerImage, LabelButton, LabelEmail, LabelName, LogoutButton, Options, RootContainer } from './styles';
import {
	DrawerItemList,
	DrawerContentScrollView,
	DrawerContentComponentProps
} from '@react-navigation/drawer';

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

				<LogoutButton>
					<SimpleLineIcons name='logout' color='#FF6363' size={20}/>
					<LabelButton>Logout</LabelButton>
				</LogoutButton>

			</DrawerContentScrollView>
		</RootContainer>
	);
};

export default MenuDrawer;
