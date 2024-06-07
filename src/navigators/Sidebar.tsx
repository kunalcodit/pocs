import { Dashboard } from '@/screens';
import { useTheme } from '@/theme';
import { navigationRef } from '@/types/navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import ApplicationNavigator from './Application';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function Sidebar() {
	const { navigationTheme } = useTheme();

	return (
		<NavigationContainer ref={navigationRef} theme={navigationTheme}>
			<Drawer.Navigator
				// eslint-disable-next-line react/no-unstable-nested-components
				drawerContent={props => {
					return <DrawerContent {...props} />;
				}}
				screenOptions={{
					headerShown: false,
				}}
			>
				<Drawer.Screen name="Dashboard" component={ApplicationNavigator} />
				<Drawer.Screen name="sd" component={Dashboard} />
			</Drawer.Navigator>
			<FlashMessage position="bottom" floating />
		</NavigationContainer>
	);
}
