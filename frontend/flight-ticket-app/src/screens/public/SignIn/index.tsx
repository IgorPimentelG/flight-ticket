/* eslint-disable @typescript-eslint/no-empty-function */
import { Button, IconButton, Input, OutlineButton } from '@components/ui';
import { SocialIcon } from '@shared/model/enum/icon';
import { SignInProps } from '@shared/model/types/navigation';
import { TouchableOpacity } from 'react-native';
import {
	Header,
	ScreenTitle,
	RootContainer,
	Main,
	Title,
	Link,
	ContainerDivider,
	Line,
	Label,
	Footer,
	OutlineLink
} from './styles';

const SignInScreen = ({ navigation }: SignInProps) => {

	function goToSignUp() {
		navigation.push('SignUp');
	}

	return(
		<RootContainer>
			<Header>
				<IconButton onPress={() => {}}/>
				<ScreenTitle>Login</ScreenTitle>
			</Header>

			<Main>
				<Title>Welcome{'\n'}Back!</Title>

				<Input label='Your Email' attributes={{ placeholder: 'Enter your email' }}/>
				<Input
					isSecureTextEntry
					label='Password'
					attributes={{ placeholder: 'Enter your password' }}
				/>
			</Main>

			<TouchableOpacity>
				<Link>Forgot Password?</Link>
			</TouchableOpacity>

			<Button message='Login' onPress={() => {}}/>

			<ContainerDivider>
				<Line/>
				<Label>or</Label>
				<Line/>
			</ContainerDivider>

			<OutlineButton label='Sign in with Google' icon={SocialIcon.GOOGLE}/>
			<OutlineButton label='Sign in with Apple' icon={SocialIcon.APPLE}/>

			<Footer>
				<Label>Already have an account?</Label>
				<TouchableOpacity onPress={goToSignUp}>
					<OutlineLink>Sign up</OutlineLink>
				</TouchableOpacity>
			</Footer>
		</RootContainer>
	);
};

export default SignInScreen;
