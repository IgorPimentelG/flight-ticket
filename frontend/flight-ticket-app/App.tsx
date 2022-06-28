import 'react-native-gesture-handler';
import Theme from './src/theme';
import Routes from '@routes';
import { StatusBar } from 'expo-status-bar';
import store from '@store/index';
import { Provider } from 'react-redux';

export default function App() {
	return (
		<Theme>
			<Provider store={store}>
				<StatusBar style='light'/>
				<Routes/>
			</Provider>
		</Theme>
	);
}
