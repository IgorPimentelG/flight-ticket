import { NavigationContainer } from '@react-navigation/native';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, TripsScreen, ProfileScreen, FlightsScreen } from '@screens/private';

const PrivateRoutes = () => {

	const Tab = createBottomTabNavigator();

	return(
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarStyle: {
						backgroundColor: '#3D3C3F'
					},
					tabBarLabel: ''
				}}
			>
				<Tab.Screen
					name='Home'
					component={HomeScreen}
					options={{
						tabBarIcon: () => <Entypo name='home' size={30}/>
					}}
				/>
				<Tab.Screen
					name='Flights'
					component={FlightsScreen}
					options={{
						tabBarIcon: () => <FontAwesome name='plane' size={30}/>
					}}
				/>

				<Tab.Screen
					name='Trips'
					component={TripsScreen}
					options={{
						tabBarIcon: () => <FontAwesome5 name='calendar-minus'/>
					}}
				/>

				<Tab.Screen
					name='Profile'
					component={ProfileScreen}
					options={{
						tabBarIcon: () => <FontAwesome5 name='user'/>
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default PrivateRoutes;
