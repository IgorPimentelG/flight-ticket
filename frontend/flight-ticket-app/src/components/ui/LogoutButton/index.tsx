import { SimpleLineIcons } from '@expo/vector-icons';
import { authActions } from '@store/actions';
import { useDispatch } from 'react-redux';
import { Container, Label } from './styles';

const LogoutButton = () => {

	const { logout } = authActions;
	const dispatch = useDispatch();

	function handleLogout() {
		dispatch(logout());
	}

	return(
		<Container onPress={handleLogout}>
			<SimpleLineIcons name='logout' color='#FF6363' size={20}/>
			<Label>Logout</Label>
		</Container>
	);
};

export default LogoutButton;
