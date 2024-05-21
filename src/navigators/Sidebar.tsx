import { useTheme } from '@/theme';
import { navigationRef } from '@/types/navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import ApplicationNavigator from './Application';

const Drawer = createDrawerNavigator();

export default function Sidebar() {
	const { navigationTheme } = useTheme();

	return (
		<NavigationContainer ref={navigationRef} theme={navigationTheme}>
			<Drawer.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Drawer.Screen name="App" component={ApplicationNavigator} />
			</Drawer.Navigator>
			<FlashMessage position="bottom" floating />
		</NavigationContainer>
	);
}
