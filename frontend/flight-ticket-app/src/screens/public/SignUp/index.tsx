/* eslint-disable @typescript-eslint/no-empty-function */
import Checkbox from 'react-native-bouncy-checkbox';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { SignUpSchema } from '@shared/schemas';
import { ModalWarning } from '@components/layout';
import { SocialIcon } from '@shared/model/enum/icon';
import { yupResolver } from '@hookform/resolvers/yup';
import { Credentails } from '@shared/model/types/user';
import { SignUpProps } from '@shared/model/types/navigation';
import { ContainerTerm, CheckboxLabel, ContainerLabel } from './styles';
import { IconButton, Input, Button, OutlineButton } from '@components/ui';
import { TouchableOpacity, View, TouchableWithoutFeedback, Keyboard  } from 'react-native';
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

	const [error, setError] = useState({ show: false, message: '' });
	const { control, handleSubmit, formState: { errors } } = useForm<Credentails>({
		resolver: yupResolver(SignUpSchema)
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

	function goBack() {
		navigation.navigate('SignIn');
	}

	function clearError() {
		setError({ show: false, message: '' });
	}

	function onSubmit(data: Credentails) {

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
					<ScreenTitle>Registration</ScreenTitle>
				</Header>

				<Main>
					<Title>Create{'\n'}Account</Title>

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

				<Button message='Create account' onPress={handleSubmit(onSubmit)}/>

				<ContainerDivider>
					<Line/>
					<Label>or</Label>
					<Line/>
				</ContainerDivider>

				<OutlineButton label='Sign up with Google' icon={SocialIcon.GOOGLE}/>
				<OutlineButton label='Sign up with Twitter' icon={SocialIcon.TWITTER}/>

				<Footer>
					<Label>Already have an account?</Label>
					<TouchableOpacity onPress={goBack}>
						<OutlineLink>Login</OutlineLink>
					</TouchableOpacity>
				</Footer>
			</RootContainer>
		</TouchableWithoutFeedback>
	);
};

export default SignUpScreen;
