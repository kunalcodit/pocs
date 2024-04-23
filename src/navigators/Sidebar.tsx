import { Example, Startup } from "@/screens";
import Dashboard from "@/screens/Dashboard/Dashboard";
import { navigationRef } from "@/types/navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import React from "react";

const Drawer = createDrawerNavigator();

/**
 * This is for opening the Drawer by Navigation Ref
 */
export function openDrawer() {
  navigationRef.dispatch(DrawerActions.openDrawer());
}

export default function Main() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Feed" component={Dashboard} />
      <Drawer.Screen name="Article" component={Example} />
    </Drawer.Navigator>
  );
}
