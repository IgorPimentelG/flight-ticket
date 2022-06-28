/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SignInSchema } from '@shared/schemas';
import { ModalWarning } from '@components/layout';
import { SocialIcon } from '@shared/model/enum/icon';
import { yupResolver } from '@hookform/resolvers/yup';
import { Credentails } from '@shared/model/types/user';
import { SignInProps } from '@shared/model/types/navigation';
import { Button, IconButton, Input, OutlineButton } from '@components/ui';
import { TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
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

	const [error, setError] = useState({ show: false, message: '' });

	const { control, handleSubmit, formState: { errors } } = useForm<Credentails>({
		resolver: yupResolver(SignInSchema)
	});

	useEffect(() => {
		if (errors.email || errors.password) {
			let message = '';

			if (errors.email && errors.password) {
				message = `${errors.email.message}\n${errors.password.message}`;
			} else if (errors.email) {
				message = `${errors.email.message}`;
			} else if (errors.password) {
				message = `${errors.password.message}`;
			}

			setError({ show: true, message});
		}
	}, [errors]);

	function goToSignUp() {
		navigation.navigate('SignUp');
	}

	function goBack() {
		navigation.navigate('Onboarding');
	}

	async function onSubmit(data: Credentails) {
		console.log(data);
		try {
			console.log('response');
		} catch {
			console.log('error');
		}
	}

	function clearError() {
		setError({ show: false, message: '' });
	}

	return(
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<RootContainer>

				<ModalWarning
					isVisible={error.show}
					title='Ooops!'
					label={error.message}
					onClose={clearError}
				/>

				<Header>
					<IconButton onPress={goBack}/>
					<ScreenTitle>Login</ScreenTitle>
				</Header>

				<Main>
					<Title>Welcome{'\n'}Back!</Title>

					<Input
						label='Your Email'
						name='email'
						attributes={{ placeholder: 'Enter your email' }}
						control={control}
						hasError={!!errors.email}
					/>

					<Input
						label='Password'
						name='password'
						control={control}
						attributes={{ placeholder: 'Enter your password' }}
						hasError={!!errors.password}
						isSecureTextEntry
					/>
				</Main>

				<TouchableOpacity>
					<Link>Forgot Password?</Link>
				</TouchableOpacity>

				<Button message='Login' onPress={handleSubmit(onSubmit)}/>

				<ContainerDivider>
					<Line/>
					<Label>or</Label>
					<Line/>
				</ContainerDivider>

				<OutlineButton label='Sign in with Google' icon={SocialIcon.GOOGLE}/>
				<OutlineButton label='Sign in with Twitter' icon={SocialIcon.TWITTER}/>

				<Footer>
					<Label>Already have an account?</Label>
					<TouchableOpacity onPress={goToSignUp}>
						<OutlineLink>Sign up</OutlineLink>
					</TouchableOpacity>
				</Footer>
			</RootContainer>
		</TouchableWithoutFeedback>
	);
};

export default SignInScreen;
