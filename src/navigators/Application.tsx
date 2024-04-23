import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useTheme } from "@/theme";

import {
  navigationRef,
  type ApplicationStackParamList,
} from "@/types/navigation";
import Main from "./Sidebar";
import Analysis from "@/screens/Analysis/Analysis";

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <NavigationContainer theme={navigationTheme} ref={navigationRef}>
      <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={Main} />
        <Stack.Screen name="Analysis" component={Analysis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
