import { createNavigationContainerRef } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

export type ApplicationStackParamList = {
  Startup: undefined;
  Example: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;

export const navigationRef =
  createNavigationContainerRef<ApplicationStackParamList>();
