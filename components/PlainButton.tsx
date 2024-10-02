import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const PlainButton = ({
  title,
  href,
  style,
}: {
  title: string;
  href?: any;
  style?: StyleSheet;
}) => {
  return (
    <Link href={href} asChild>
      <TouchableOpacity
        hitSlop={0.8}
        className="w[315px] h-[60px] bg-blue-600 rounded-full justify-center items-center"
      >
        <Text className="font-extrabold text-lg text-white">{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default PlainButton;
