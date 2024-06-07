import { Dashboard } from '@/screens';
import { BottomTabParamList } from '@/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function MainNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'Dashboard') {
						iconName = focused ? 'view-dashboard' : 'view-dashboard-outline';
					} else if (route.name === 'Report') {
						iconName = focused ? 'chart-bar-stacked' : 'chart-bar';
					} else if (route.name === 'Scheduler') {
						iconName = focused ? 'clock' : 'progress-clock';
					}
					return (
						<MaterialCommunityIcons name={iconName} size={size} color={color} />
					);
				},
			})}
		>
			<Tab.Screen name="Dashboard" component={Dashboard} />
			{/* <Tab.Screen name="Report" component={Dashboard} /> */}
			{/* <Tab.Screen name="Scheduler" component={Dashboard} /> */}
		</Tab.Navigator>
	);
}
