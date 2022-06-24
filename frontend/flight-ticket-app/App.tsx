import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Theme from './src/theme';
import Routes from '@routes';

export default function App() {
	return (
		<Theme>
			<StatusBar style='dark'/>
			<Routes/>
		</Theme>
	);
}
