import { Dashboard } from '@/screens';
import { BottomTabParamList } from '@/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function MainNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tab.Screen name="Dashboard" component={Dashboard} />
			<Tab.Screen name="Report" component={Dashboard} />
			<Tab.Screen name="Scheduler" component={Dashboard} />
		</Tab.Navigator>
	);
}
