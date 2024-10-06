import { Text, View, Image } from "react-native";
import React from "react";
import { CustomButton, CustomInput } from "@/components";
import { Link } from "expo-router";

// inputlist data
const inputList = [
  {
    id: 1,
    placeholder: "Choose Gender",
    leftIcon: require("../../assets/user-icon.png"),
    rightIcon: require("../../assets/dropdown-icon.png"),
  },
  {
    id: 2,
    placeholder: "Date of Birth",
    leftIcon: require("../../assets/calendar-icon.png"),
  },
  {
    id: 3,
    placeholder: "Your Weight",
    leftIcon: require("../../assets/weight-icon.png"),
  },
  {
    id: 4,
    placeholder: "Your Height",
    leftIcon: require("../../assets/height-icon.png"),
  },
];

const ProfileSetup = () => {
  return (
    <View className="flex-1 justify-center">
      <View className="w-[100%] h-[350px] mb-[30px]">
        <Image
          source={require("../../assets/gym-gl.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode={"contain"}
        />
      </View>
      <View className="">
        <View className="mb-[30px] items-center">
          <Text className="text-black font-extrabold text-2xl mb-[5px]">
            Let’s complete your profile
          </Text>
          <Text className="text-gray-400 font-normal text-sm">
            It will help us to know more about you!
          </Text>
        </View>
        <View className="pl-[30px] pr-[50px]">
          <View className="mb-[14px]">
            {inputList.map((item, index) => (
              <View className="flex flex-row justify-between" key={index}>
                <CustomInput
                  placeHolder={item.placeholder}
                  leftIcon={item.leftIcon}
                  rightIcon={item?.rightIcon}
                  key={index}
                  containerStyle={{
                    marginBottom: 15,
                    width: index == 2 || index == 3 ? 252 : 315,
                  }}
                />
                {index === 2 || index === 3 ? (
                  <View className="w-[48px] h-[48px] bg-primarybg rounded-xl items-center justify-center">
                    <Text className="text-white font-semibold">
                      {index === 2 ? "KG" : "CM"}
                    </Text>
                  </View>
                ) : null}
              </View>
            ))}
          </View>
          <Link href={"/(auth)/SignIn"} asChild>
            <CustomButton title="Confirm" />
          </Link>
        </View>
      </View>
    </View>
  );
};

export default ProfileSetup;
