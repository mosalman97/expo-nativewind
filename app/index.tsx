import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  return <Redirect href={"/(auth)/Welcome"} />;
};

export default index;
