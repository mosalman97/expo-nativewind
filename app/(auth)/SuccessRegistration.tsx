import { Text, View, Image } from "react-native";
import React from "react";
import { CustomButton } from "@/components";
import { Link } from "expo-router";

const SuccessRegistration = () => {
  return (
    <View className="flex-1 px-[25px] pb-[35px]">
      <View className="flex-1 justify-center items-center">
        <View className="w-[277px] h-[304px] mb-[44px]">
          <Image
            source={require("../../assets/success-icon.png")}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <View className="items-center">
          <Text className="text-black text-xl font-bold mb-[5px]">
            Welcome, Stefani
          </Text>
          <Text className="text-gray-600 text-base font-normal text-center">
            You are all set now, let’s reach your {"\n"} goals together with us
          </Text>
        </View>
      </View>
      <CustomButton title={"Go To Home"} />
    </View>
  );
};

export default SuccessRegistration;
