import { Label, Touchable } from './styles';

const Button: React.FC<{
  message: string;
  onPress: () => void;
}> = ({ message, onPress }) => {
	return(
		<Touchable onPress={onPress}>
			<Label>{message}</Label>
		</Touchable>
	);
};

export default Button;
