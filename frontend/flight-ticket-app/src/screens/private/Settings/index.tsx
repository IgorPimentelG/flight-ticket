/* eslint-disable @typescript-eslint/no-empty-function */
import { MenuButton } from '@components/ui';
import { OutlineIcon } from '@shared/model/enum/icon';
import { ContainerSettings, Label, RootContainer } from './styles';

const SettingsScreen = () => {
	return(
		<RootContainer>
			<ContainerSettings>
				<Label>Settings</Label>
				<MenuButton icon={OutlineIcon.COLOR} label='Change app color' onPress={() => {}}/>
				<MenuButton icon={OutlineIcon.TYPOGRAPHY}label='Change app typography' onPress={() => {}}/>
				<MenuButton icon={OutlineIcon.TRANSLATE} label='Change app language' onPress={() => {}}/>
			</ContainerSettings>

			<MenuButton
				icon={OutlineIcon.DOWNLOAD}
				label='Import from Google calendar'
				onPress={() => {}}
			/>
		</RootContainer>
	);
};

export default SettingsScreen;
