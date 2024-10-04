import { View, Image } from "react-native";
import React from "react";

// componets
import { CustomButton } from "@/components";
import { Link } from "expo-router";

const Welcome = () => {
  return (
    <View className="flex-1 bg-white-200 px-6 pb-8">
      <View className="flex-1 justify-end">
        <View className=" flex-1 justify-center items-center">
          <Image
            source={require("../../assets/logo.png")}
            resizeMode="contain"
            width={100}
            height={100}
          />
        </View>
      </View>
      <Link asChild href={"/(auth)/Onboarding"}>
        <CustomButton title={"Get Started"} />
      </Link>
    </View>
  );
};

export default Welcome;
