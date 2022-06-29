import { TouchableOpacity } from 'react-native';
import { Container, Input } from './styles';
import { EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

const Search = () => {

	const theme = useTheme();

	return(
		<Container>
			<TouchableOpacity>
				<EvilIcons name='search' size={30} color={theme.colors.main.primary}/>
			</TouchableOpacity>

			<Input
				placeholder='Search a flight'
				placeholderTextColor={theme.colors.text.secondary}
			/>

			<TouchableOpacity>
				<SimpleLineIcons
					name='microphone'
					size={20}
					color={theme.colors.text.secondary}
				/>
			</TouchableOpacity>
		</Container>
	);
};

export default Search;
