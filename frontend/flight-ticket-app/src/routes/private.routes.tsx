import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { MenuIcon } from '@shared/model/enum/icon';
import { Image, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { IconButton, TabBarButton } from '@components/ui';
import { CardIconMenu, MenuDrawer } from '@components/layout';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PrivateStackParamList } from '@shared/model/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	HomeScreen,
	TripsScreen,
	ProfileScreen,
	FlightsScreen,
	SettingsScreen
} from '@screens/private';

const PrivateRoutes = () => {

	const theme = useTheme();
	const Tab = createBottomTabNavigator();
	const Drawer = createDrawerNavigator();
	const Stack = createNativeStackNavigator<PrivateStackParamList>();

	function StackNavigation () {
		return(
			<Stack.Navigator
				screenOptions={({ navigation }) => ({
					headerTintColor: '#FFF',
					contentStyle: { backgroundColor: theme.colors.background.primary },
					headerStyle: { backgroundColor: theme.colors.background.primary },
					headerLeft: () => (
						<IconButton onPress={() => navigation.goBack()}/>
					)
				})}
			>
				<Stack.Screen
					name='Profile'
					component={ProfileScreen}
				/>

				<Stack.Screen
					name='Settings'
					component={SettingsScreen}
				/>
			</Stack.Navigator>
		);
	}

	function TabBarNavigation() {
		return(
			<Tab.Navigator
				sceneContainerStyle={{ backgroundColor: theme.colors.background.primary }}
				screenOptions={({ navigation }) => ({
					tabBarShowLabel: false,
					headerTintColor: '#FFF',
					headerLeft: () => (
						<TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
							<Image
								source={require('../../assets/icons/menu.png')}
								width={25}
								height={25}
							/>
						</TouchableOpacity>
					),
					headerStyle: {
						backgroundColor: theme.colors.background.primary,
						shadowColor: 'transparent',
						height: 100
					},
					headerLeftContainerStyle: {
						paddingLeft: 20,
						paddingRight: 20,
						height: 80
					},
					tabBarStyle: {
						backgroundColor: '#3D3C3F',
						height: 60,
						paddingLeft: 15,
						paddingRight: 15,
						borderTopColor: 'transparent'
					},
				})}
			>
				<Tab.Screen
					name='Home'
					component={HomeScreen}
					options={{
						headerTitle: '',
						tabBarIcon: ({ focused }) => (
							<TabBarButton label='home' icon={MenuIcon.HOME} focused={focused}/>
						),
					}}
				/>

				<Tab.Screen
					name='Flights'
					component={FlightsScreen}
					options={{
						headerTitle: 'Available Flights',
						tabBarIcon: ({ focused }) => (
							<TabBarButton label='plane' icon={MenuIcon.PLANE} focused={focused}/>
						),
					}}
				/>

				<Tab.Screen
					name='Trips'
					component={TripsScreen}
					options={{
						headerTitle: 'My Trips',
						tabBarIcon: ({ focused }) => (
							<TabBarButton label='trips' icon={MenuIcon.CALENDAR} focused={focused}/>
						),
					}}
				/>

				<Tab.Screen
					name='Profile'
					component={StackNavigation}
					options={{
						headerShown: false,
						headerTitle: 'Profile',
						tabBarIcon: ({ focused }) => (
							<TabBarButton label='profile' icon={MenuIcon.USER} focused={focused}/>
						)
					}}
				/>
			</Tab.Navigator>
		);
	}

	return(
		<NavigationContainer>
			<Drawer.Navigator
				drawerContent={(props) => <MenuDrawer {...props}/>}
				screenOptions={{
					headerShown: false,
					drawerLabelStyle: { color: '#95949B', marginLeft: -20 }
				}}
			>
				<Drawer.Screen
					name='TabMenu'
					component={TabBarNavigation}
					options={{
						title: 'Home',
						drawerIcon: () => (
							<CardIconMenu>
								<AntDesign name='home' color={theme.colors.main.primary} size={20}/>
							</CardIconMenu>
						)
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default PrivateRoutes;
