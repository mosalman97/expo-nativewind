import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router/stack";

const Layout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register/index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
