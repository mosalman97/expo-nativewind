import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { CustomButton, CustomInput } from "@/components";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";

// inputlist data
const inputList = [
  {
    id: 1,
    placeholder: "Email",
    leftIcon: require("../../assets/email-icon.png"),
  },
  {
    id: 1,
    placeholder: "Password",
    leftIcon: require("../../assets/lock-icon.png"),
  },
];

const SignIn = () => {
  const router = useRouter();
  const [isAccept, setIsAccept] = useState(false);
  return (
    <View className="flex-1 bg-white px-6 py-16 justify-between">
      <View>
        <View className="items-center mb-[20px]">
          <Text className="text-black text-lg">Hey there,</Text>
          <Text className="text-black text-2xl font-bold">Welcome Back</Text>
        </View>
        <View>
          <View>
            {inputList?.map((item, index) => (
              <CustomInput
                leftIcon={item?.leftIcon}
                placeHolder={item.placeholder}
                containerStyle={{
                  marginBottom: 15,
                  width: 340,
                }}
              />
            ))}
          </View>
        </View>
      </View>
      <View>
        <CustomButton
          title="Login"
          onPress={() => {
            router.push("/(auth)/ProfileSetup");
          }}
        />
        <View className="flex flex-row justify-center items-center mt-[20px] mb-[20px]">
          <View className="w-[140px] h-[2px] bg-gray-300 rounded-lg"></View>
          <Text className="text-black text-md mx-[14px]">Or</Text>
          <View className="w-[140px] h-[2px] bg-gray-300 rounded-lg"></View>
        </View>
        <View className="flex flex-row justify-center">
          <View className="w-[50px] h-[50px] border-2 border-gray-400 justify-center items-center rounded-xl mr-[14px]">
            <Image source={require("../../assets/google.png")} />
          </View>
          <View className="w-[50px] h-[50px] border-2 border-gray-400 justify-center items-center rounded-xl ml-[14px]">
            <Image source={require("../../assets/facebook.png")} />
          </View>
        </View>
        <View className="flex flex-row justify-center mt-[30px]">
          <Text className="text-black text-md font-normal">
            Already have an account?{" "}
          </Text>
          <Text className="text-purple-700 text-md font-semibold">Login</Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
