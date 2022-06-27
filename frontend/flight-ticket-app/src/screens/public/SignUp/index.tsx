/* eslint-disable @typescript-eslint/no-empty-function */
import Checkbox from 'react-native-bouncy-checkbox';
import { useTheme } from 'styled-components';
import { SocialIcon } from '@shared/model/enum/icon';
import { TouchableOpacity, View } from 'react-native';
import { SignUpProps } from '@shared/model/types/navigation';
import { ContainerTerm, CheckboxLabel, ContainerLabel } from './styles';
import { IconButton, Input, Button, OutlineButton } from '@components/ui';
import {
	Header,
	ScreenTitle,
	RootContainer,
	Main,
	Title,
	ContainerDivider,
	Line,
	Label,
	Footer,
	OutlineLink
} from '../SignIn/styles';


const SignUpScreen = ({ navigation }: SignUpProps) => {

	const theme = useTheme();

	function goToSignIn() {
		navigation.navigate('SignIn');
	}

	return(
		<RootContainer>
			<Header>
				<IconButton onPress={goToSignIn}/>
				<ScreenTitle>Registration</ScreenTitle>
			</Header>

			<Main>
				<Title>Create{'\n'}Account</Title>

				<Input label='Your Email' attributes={{ placeholder: 'Enter your email' }}/>
				<Input
					isSecureTextEntry
					label='Password'
					attributes={{ placeholder: 'Enter your password' }}
				/>
			</Main>

			<ContainerTerm>
				<Checkbox
					fillColor={theme.colors.main.primary}
					iconStyle={{ borderRadius: 5 }}
					checkIconImageSource={require('../../../../assets/icons/check.png')}
					size={20}
					unfillColor={theme.colors.background.primary}
				/>

				<View>
					<ContainerLabel>
						<CheckboxLabel>I agree to the</CheckboxLabel>
						<TouchableOpacity>
							<OutlineLink>Terms & Conditions</OutlineLink>
						</TouchableOpacity>
					</ContainerLabel>
					<ContainerLabel>
						<CheckboxLabel>and</CheckboxLabel>
						<TouchableOpacity>
							<OutlineLink>Privacy Policy</OutlineLink>
						</TouchableOpacity>
					</ContainerLabel>
				</View>
			</ContainerTerm>

			<Button message='Create account' onPress={() => {}}/>

			<ContainerDivider>
				<Line/>
				<Label>or</Label>
				<Line/>
			</ContainerDivider>

			<OutlineButton label='Sign up with Google' icon={SocialIcon.GOOGLE}/>
			<OutlineButton label='Sign up with Apple' icon={SocialIcon.APPLE}/>

			<Footer>
				<Label>Already have an account?</Label>
				<TouchableOpacity onPress={goToSignIn}>
					<OutlineLink>Login</OutlineLink>
				</TouchableOpacity>
			</Footer>
		</RootContainer>
	);
};

export default SignUpScreen;
