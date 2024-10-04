import {
  Text,
  TouchableOpacity,
  ViewStyle,
  ImageSourcePropType,
  Image,
  View,
} from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  containerStyle?: ViewStyle;
  leftIcon?: ImageSourcePropType;
  onPress?: () => void;
}

const CustomButton = ({
  title,
  containerStyle,
  leftIcon,
  onPress,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[containerStyle]}
      className="w[315px] h-[60px] bg-primarybg rounded-full flex flex-row justify-center items-center"
      hitSlop={0.8}
      onPress={onPress}
    >
      {leftIcon && (
        <View className="w-[24px] h-[24px] mr-[8px]">
          <Image
            source={leftIcon}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
      )}
      <Text className="font-extrabold text-lg text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
