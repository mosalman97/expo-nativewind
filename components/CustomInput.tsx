import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ViewStyle,
  TextInputProps,
  ImageSourcePropType,
} from "react-native";
import React from "react";

interface CustomInputProps {
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  placeHolder: string;
  containerStyle?: ViewStyle;
  inputProps?: TextInputProps;
}

const CustomInput = ({
  leftIcon,
  rightIcon,
  placeHolder,
  containerStyle,
  inputProps,
}: CustomInputProps) => {
  return (
    <View
      style={[containerStyle]}
      className="w-[315px] h-[48px] bg-gray-200 px-[15px] flex flex-row items-center 
    rounded-xl"
    >
      <>
        {leftIcon && (
          <View className="w-[20px] h-[20px] mr-[10px]">
            <Image
              source={leftIcon}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
        )}
        <TextInput
          placeholder={placeHolder}
          className="w-[60%]"
          {...inputProps}
        />
      </>
      {rightIcon && (
        <TouchableOpacity className="w-[20px] h-[20px] absolute right-5">
          <Image
            source={require("../assets/dropdown-icon.png")}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;
