import { DefaultTheme, ThemeProvider } from 'styled-components';

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {

	const config: DefaultTheme = {
		colors: {
			text: {
				primary: '#FFFFFF',
				secondary: '#A5A8B0',
				tertiary: '#000000'
			},

			main: {
				primary: '#45EA69'
			},

			background: {
				primary: '#1D1D1F',
				secondary: '#313133',
				tertiary: '#51535E'
			},

			error: {
				primary: '#990918'
			}
		}
	};

	return(
		<ThemeProvider theme={config}>
			{children}
		</ThemeProvider>
	);
};

export default Theme;

