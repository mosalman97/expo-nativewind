import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect } from "react";

// componets
import { PlainButton } from "@/components";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 bg-white-200 px-6 pb-8">
      <View className="flex-1 justify-end">
        <View className=" flex-1 justify-center items-center">
          <Image
            source={require("../assets/logo.png")}
            resizeMode="contain"
            width={100}
            height={100}
          />
        </View>
      </View>
      <Link asChild href={"/register"}>
        <PlainButton title={"Get Started"} />
      </Link>
    </View>
  );
};

export default index;
