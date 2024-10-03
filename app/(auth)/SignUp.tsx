import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CustomButton, CustomInput } from "@/components";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";

// inputlist data
const inputList = [
  {
    id: "name",
    placeHolder: "Full Name",
    icon: require("../../assets/user-icon.png"),
  },
  {
    id: "phone",
    placeHolder: "Phone Number",
    icon: require("../../assets/phone-icon.png"),
  },
  {
    id: "email",
    placeHolder: "Email",
    icon: require("../../assets/email-icon.png"),
  },
  {
    id: "password",
    placeHolder: "Password",
    icon: require("../../assets/lock-icon.png"),
  },
];

type FormFields = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFields>();
  const router = useRouter();
  const [isAccept, setIsAccept] = useState(false);
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <View className="flex-1 bg-white justify-between px-6 py-16">
      <View>
        <View className="items-center mb-[20px]">
          <Text className="text-black text-lg">Hey there,</Text>
          <Text className="text-black text-2xl">Create an Account</Text>
        </View>
        <View>
          <View className="items-center justify-center">
            {inputList.map((data, index) => (
              <CustomInput
                placeHolder={data.placeHolder}
                key={index}
                leftIcon={data.icon}
                containerStyle={{
                  marginBottom: 18,
                  width: 340,
                }}
              />
            ))}
          </View>
          <View className="flex flex-row mt-[8px]">
            <TouchableOpacity
              onPress={() => {
                setIsAccept(!isAccept);
              }}
              className="w-[20px] h-[20px] border-2 justify-center items-center border-gray-400 rounded-2xl mr-2"
            >
              {isAccept && (
                <View className="w-[10px] h-[10px] bg-black rounded-lg"></View>
              )}
            </TouchableOpacity>
            <Text className="text-gray-400">
              By continuing you accept our Privacy Policy and{"\n"}Term of Use
            </Text>
          </View>
        </View>
      </View>
      <View>
        <CustomButton
          title="Register"
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

export default SignUp;
