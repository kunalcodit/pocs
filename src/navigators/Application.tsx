import { Login, Record } from '@/screens';
import { useTheme } from '@/theme';
import { Stack } from '@/types/navigation';
import Tab from './Tab';

export default function Application() {
	const { variant } = useTheme();

	return (
		<Stack.Navigator
			key={variant}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Main" component={Tab} />
			<Stack.Screen name="Record" component={Record} />
		</Stack.Navigator>
	);
}
