import { View, Text, SafeAreaView, TextInput, Image } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { PlainButton } from "@/components";

const Register = () => {
  return (
    <View className="flex-1 bg-white justify-between px-6 py-16">
      <View>
        <View className="items-center mb-[20px]">
          <Text className="text-black text-lg">Hey there,</Text>
          <Text className="text-black text-2xl">Create an Account</Text>
        </View>
        <View>
          <View className="bg-gray-100 px-5 py-4 rounded-xl mb-[12px]">
            <TextInput placeholder="Full Name" />
          </View>
          <View className="bg-gray-100 px-5 py-4 rounded-xl mb-[12px]">
            <TextInput placeholder="Phone Number" />
          </View>
          <View className="bg-gray-100 px-5 py-4 rounded-xl mb-[12px]">
            <TextInput placeholder="Email" />
          </View>
          <View className="bg-gray-100 px-5 py-4 rounded-xl mb-[12px]">
            <TextInput placeholder="Password" />
          </View>
          <View className="flex flex-row">
            <View className="w-[24px] h-[24px] border-2 border-gray-400 rounded-md mr-2"></View>
            <Text className="text-gray-400">
              By continuing you accept our Privacy Policy and{"\n"}Term of Use
            </Text>
          </View>
        </View>
      </View>
      <View>
        <PlainButton title="Register" />
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

export default Register;
