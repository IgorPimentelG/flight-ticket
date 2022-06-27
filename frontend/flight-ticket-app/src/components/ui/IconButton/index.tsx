import Ionicons from '@expo/vector-icons/Ionicons';
import { Touchable } from './styles';

const IconButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
	return(
		<Touchable onPress={onPress}>
			<Ionicons name='arrow-back'size={20} color='#FFF'/>
		</Touchable>
	);
};

export default IconButton;
