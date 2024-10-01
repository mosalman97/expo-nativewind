import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Href, useRouter } from "expo-router";

const PlainButton = ({
  title,
  href,
  style,
}: {
  title: string;
  href?: any;
  style?: StyleSheet;
}) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      hitSlop={0.8}
      className="w[315px] h-[60px] bg-blue-600 rounded-full justify-center items-center"
      onPress={() => {
        if (href) {
          router.push(href);
        }
      }}
    >
      <Text className="font-extrabold text-lg text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default PlainButton;
