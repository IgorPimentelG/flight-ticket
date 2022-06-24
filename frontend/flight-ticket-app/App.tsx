import 'react-native-gesture-handler';
import Theme from './src/theme';
import Routes from '@routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	return (
		<Theme>
			<StatusBar style='light'/>
			<Routes/>
		</Theme>
	);
}
