import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { PlainButton } from "@/components";
import { useForm, Controller } from "react-hook-form";

type FormFields = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFields>();
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
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="flex flex-row justify-between bg-gray-100 px-5 py-4 rounded-xl mb-[18px]">
                <TextInput
                  autoCapitalize={"none"}
                  placeholder="Full Name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.name && (
                  <Text className="text-red-600 font-medium">
                    name missing!
                  </Text>
                )}
              </View>
            )}
            name="name"
          />
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 10,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="flex flex-row justify-between bg-gray-100 px-5 py-4 rounded-xl mb-[18px]">
                <TextInput
                  autoCapitalize={"none"}
                  placeholder="Phone Number"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.phoneNumber && (
                  <Text className="text-red-600 font-medium">
                    number missing!
                  </Text>
                )}
              </View>
            )}
            name="phoneNumber"
          />
          <Controller
            control={control}
            rules={{
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="flex flex-row justify-between bg-gray-100 px-5 py-4 rounded-xl mb-[18px]">
                <TextInput
                  autoCapitalize={"none"}
                  placeholder="Email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.email && (
                  <Text className="text-red-600 font-medium">
                    email missing!
                  </Text>
                )}
              </View>
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
              pattern:
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="flex flex-row justify-between  bg-gray-100 px-4 py-4 rounded-xl mb-[18px]">
                <TextInput
                  className="w-[50%]"
                  autoCapitalize={"none"}
                  secureTextEntry={true}
                  placeholder="Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                {errors.password && (
                  <Text className="text-red-600 font-medium w-[40%]">
                    password missing!
                  </Text>
                )}
              </View>
            )}
            name="password"
          />
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
        <PlainButton title="Register" onPress={handleSubmit(onSubmit)} />
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
