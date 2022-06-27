import { Container, Field, Label, RootContainer } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const Input: React.FC<{
  label: string;
  attributes: object;
  isSecureTextEntry?: boolean;
}> = ({ label, attributes, isSecureTextEntry }) => {

	const [showText, setShowText] = useState(false);

	function changeDisplayText() {
		setShowText((currentState) => !currentState);
	}

	return(
		<RootContainer>
			<Label>{label}</Label>
			<Container>
				<Field
					{...attributes}
					placeholderTextColor='#8C8A93'
					autoCapitalize='none'
					secureTextEntry={!showText}
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
