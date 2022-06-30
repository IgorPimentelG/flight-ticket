/* eslint-disable @typescript-eslint/no-empty-function */
import { ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { image, pencil } from '@assets/icons/varied';
import { OutlineIcon } from '@shared/model/enum/icon';
import { ProfileProps } from '@shared/model/types/navigation';
import { Button, LogoutButton, MenuButton } from '@components/ui';
import {
	LabelName,
	LabelOption,
	RootContainer,
	ContainerProfile,
	ContainerButtons,
	ContainerSettings,
	ContainerAccount,
	ContainerEmirates,
	ContainerImage,
	EditImageButton,
} from './styles';

const ProfileScreen = ({ navigation }: ProfileProps) => {
	return(
		<RootContainer>
			<ContainerProfile>
				<ContainerImage>
					<SvgXml xml={image} color='#FFF' width={30} height={30}/>

					<EditImageButton>
						<SvgXml xml={pencil} color='#000' width={10} height={10}/>
					</EditImageButton>
				</ContainerImage>
				<LabelName>James Bond</LabelName>
			</ContainerProfile>

			<ContainerButtons>
				<Button message='Upcoming Trips' onPress={() => {}}/>
				<Button message='Last Trips' onPress={() => {}}/>
			</ContainerButtons>

			<ScrollView>
				<ContainerSettings>
					<LabelOption>Settings</LabelOption>
					<MenuButton label='App Settings' icon={OutlineIcon.SETTING} onPress={() => navigation.navigate('Settings')}/>
				</ContainerSettings>

				<ContainerAccount>
					<LabelOption>Account</LabelOption>
					<MenuButton label='Change account name' icon={OutlineIcon.USER} onPress={() => {}}/>
					<MenuButton label='Change account password' icon={OutlineIcon.KEY} onPress={() => {}}/>
					<MenuButton label='Change account image' icon={OutlineIcon.CAMERA} onPress={() => {}}/>
				</ContainerAccount>

				<ContainerEmirates>
					<LabelOption>Emirates</LabelOption>
					<MenuButton label='My Trips' icon={OutlineIcon.TRIP} onPress={() => {}}/>
					<MenuButton label='FAQ' icon={OutlineIcon.WARNING} onPress={() => {}}/>
					<MenuButton label='Help & Feedback' icon={OutlineIcon.LIGHTNING} onPress={() => {}}/>
					<MenuButton label='Shared app' icon={OutlineIcon.LIKE} onPress={() => {}}/>
				</ContainerEmirates>

				<LogoutButton/>
			</ScrollView>
		</RootContainer>
	);
};

export default ProfileScreen;
