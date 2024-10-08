import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View, } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from "../components/ImageSlider";

export default function home() {
    return(
        <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']} >
            <StatusBar style="dark" />

            {/* punchline and avatar*/}

            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text
                        style={{fontSize: hp(4.5)}}
                        className="font-bold tracking-wide text-neutral-700"
                    >
                        READY TO
                    </Text>
                    <Text
                        style={{fontSize: hp(4.5)}}
                        className="font-bold tracking-wide text-rose-500"
                    >
                        WORKOUT
                    </Text>
                </View>

                <View className="flex justify-center items-center space-y-2">
                    <Image 
                        source={require('../assets/images/avatar.png')}
                        style={{height: hp(6), width: hp(6)}} 
                        className="rounded-full"                        
                    />
                    <View 
                        className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
                        style={{height: hp(5.5), width: hp(5.5)}}
                    >   
                        <Ionicons name="notifications" size={hp(3)} color="gray" />
                        
                    </View>
                </View>
            </View>

            {/* image slider */}

            <View>
                <ImageSlider />
            </View>

        </SafeAreaView>
    )
}