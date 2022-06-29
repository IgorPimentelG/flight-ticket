import { Modal } from 'react-native';
import { Container, RootContainer, Title, Label, Button, LabelButton } from './styles';

const Dialog: React.FC<{
  title: string;
  label: string;
  isVisible: boolean;
  onClose: () => void;
}> = ({ title, label, isVisible, onClose }) => {
	return(
		<Modal animationType='fade' visible={isVisible} transparent>
			<RootContainer>
				<Container>
					<Title>{title}</Title>
					<Label>{label}</Label>

					<Button onPress={onClose}>
						<LabelButton>Confirmar</LabelButton>
					</Button>
				</Container>
			</RootContainer>
		</Modal>
	);
};

export default Dialog;
