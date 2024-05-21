import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
	createNavigationContainerRef,
	ParamListBase,
} from '@react-navigation/native';
import {
	createStackNavigator,
	StackScreenProps,
} from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Main: undefined;
	Record: undefined;
	Dashboard: undefined;
	Login: undefined;
};

export type BottomTabParamList = {
	Dashboard: undefined;
	Report: undefined;
	Scheduler: undefined;
};

export const Stack = createStackNavigator<ApplicationStackParamList>();

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;

export const navigationRef =
	createNavigationContainerRef<ApplicationStackParamList>();

// export type DashboardProps = StackScreenProps<
// 	ApplicationStackParamList,
// 	'Dashboard'
// >;

export type DashProps = BottomTabScreenProps<ParamListBase, 'Dashboard'>;

export type LoginProps = StackScreenProps<ApplicationStackParamList, 'Login'>;
