import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router/stack";

const Layout = () => {
  return (
    <Stack initialRouteName="Welcome">
      <Stack.Screen name="Welcome" options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" options={{ headerShown: false }} />
      <Stack.Screen name="ProfileSetup" options={{ headerShown: false }} />
      <Stack.Screen
        name="SuccessRegistration"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;
