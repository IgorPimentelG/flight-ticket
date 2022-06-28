/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Field, Label, RootContainer } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Control, useController } from 'react-hook-form';

const Input: React.FC<{
  name: string;
  label: string;
  attributes: object;
  isSecureTextEntry?: boolean;
  hasError: boolean;
  control: Control<any>;
}> = ({ name, label, attributes, isSecureTextEntry, hasError, control}) => {

	const [showText, setShowText] = useState(false);
	const { field } = useController({ control, name });

	function changeDisplayText() {
		setShowText((currentState) => !currentState);
	}

	return(
		<RootContainer>
			<Label>{label}</Label>
			<Container hasError={hasError}>
				<Field
					{...attributes}
					value={field.value}
					onChangeText={field.onChange}
					hasError={hasError}
					placeholderTextColor='#8C8A93'
					autoCapitalize='none'
					secureTextEntry={!showText && isSecureTextEntry}
				/>

				{ isSecureTextEntry && (
					<TouchableOpacity onPress={changeDisplayText}>
						{ showText ? (
							<Ionicons name='eye-off-outline' size={20} color='#8C8A93'/>
						) : (
							<Ionicons name='eye-outline' size={20} color='#8C8A93'/>
						)}
					</TouchableOpacity>
				)}
			</Container>
		</RootContainer>
	);
};

export default Input;
