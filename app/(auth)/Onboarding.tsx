import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import { useRouter } from "expo-router";

// packages
import Swiper from "react-native-swiper";

// onboarding data
const onBoardingData = [
  {
    id: 1,
    title: "Track Your Goal",
    subTitle: `Don't worry if you have trouble determining\nyour goals,We can help you determine your\ngoals and track your goals`,
    img: require("../../assets/images/img-onboarding-one.png"),
  },
  {
    id: 2,
    title: "Get Burn",
    subTitle:
      "Let’s keep burning, to achive yours goals,it\nhurts only temporarily, if you give up now\nyou will be in pain forever",
    img: require("../../assets/images/img-onboarding-two.png"),
  },
  {
    id: 3,
    title: "Eat Well",
    subTitle:
      "Let's start a healthy lifestyle with us,we\ncan determine your diet every day. healthy\neating is fun",
    img: require("../../assets/images/img-onboarding-three.png"),
  },
  {
    id: 4,
    title: "Improve Sleep\nQuality",
    subTitle:
      "Improve the quality of your sleep with us,\ngood quality sleep can bring a good mood in the morning",
    img: require("../../assets/images/img-onboarding-four.png"),
  },
];

const Onboarding = () => {
  const swipeRef = useRef<Swiper>(null);
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const lastslide = activeIndex === onBoardingData.length - 1;
  return (
    <View className="flex-1 items-center justify-start pb-[20px]">
      <Swiper
        ref={swipeRef}
        loop={false}
        dot={false}
        showsPagination={false}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onBoardingData?.map((data, index) => {
          return (
            <View className="flex-1" key={index}>
              <View className="w-[100%] h-[60%]">
                <Image
                  source={data?.img}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  resizeMode={"cover"}
                />
              </View>
              <View className="flex-1 px-[30px] pt-[60px]">
                <View>
                  <Text className="text-black font-extrabold text-2xl mb-[12px]">
                    {data?.title}
                  </Text>
                  <Text className="text-gray-400  text-left font-normal text-base leading-6">
                    {data?.subTitle}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    if (lastslide) {
                      router.navigate("/(auth)/SignUp");
                    } else {
                      swipeRef?.current?.scrollBy(1);
                    }
                  }}
                  hitSlop={0.8}
                  className="absolute right-8 bottom-6 justify-center items-center  w-[60px] h-[60px] bg-white rounded-full border-2 border-primarybg"
                >
                  <View className="w-[48px] h-[48px] rounded-full bg-primarybg justify-center items-center">
                    <View className="w-[18px] h-[18px]">
                      <Image
                        source={require("../../assets/right-arrow.png")}
                        className="w-[100%] h-[100%]"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
