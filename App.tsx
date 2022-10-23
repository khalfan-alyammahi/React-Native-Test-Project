import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import SignUpScreen, { Props, SignUpProps } from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import FeedScreen from "./screens/FeedScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Content from "./screens/Content";
import Market from "./screens/Market";
import Congratulations from "./screens/Congratulations";
import Profile from "./screens/Profile";
import Messages from "./screens/Messages";

const Stack = createNativeStackNavigator<RootStackParams>();

export type RootStackParams = {
  SignUp: undefined;
  Login: undefined;
  Feed: undefined;
  Content: undefined;
  Market: undefined;
  Congratulations: undefined;
  Profile: undefined;
  Messages: undefined;
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Messages"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="Market" component={Market} />
      <Stack.Screen name="Congratulations" component={Congratulations} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar backgroundColor="auto" style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
});
