import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const PlainButton = ({
  title,
  style,
  onPress,
}: {
  title: string;
  href?: any;
  style?: StyleSheet;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      hitSlop={0.8}
      className="w[315px] h-[60px] bg-blue-600 rounded-full justify-center items-center"
      onPress={onPress}
    >
      <Text className="font-extrabold text-lg text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default PlainButton;
