import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, SignInScreen, SignUpScreen, OnboardingScreen } from '@screens/public';
import { PublicStackParamList } from '@shared/model/types/navigation';

const PublicRoutes = () => {

	const Stack = createNativeStackNavigator<PublicStackParamList>();

	return(
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Splash'
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name='Splash' component={SplashScreen}/>
				<Stack.Screen name='Onboarding' component={OnboardingScreen}/>
				<Stack.Screen name='SignIn' component={SignInScreen}/>
				<Stack.Screen name='SignUp' component={SignUpScreen}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default PublicRoutes;
