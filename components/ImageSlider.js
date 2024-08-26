import React from "react";
import { View, } from "react-native";
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { sliderImages } from "../constants/sliderImages";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function ImageSlider() {
    console.log(sliderImages);
    return(
        <Carousel 
            data={sliderImages}
            loop={true}
            autoplay={true}
            renderItem={itemCard}
            hasParallaxImages={true}
            sliderWidth={wp(100)}
            firstItem={1}
            autoplayInterval={4000}
            itemWidth={wp(100)-70}
            slideStyle={{display: 'flex', alignItems: 'center'}} 
            />
    )
}

const itemCard = ({item, sliderImages}, ParallaxProps) => {
    return (
        <View style={{width: wp(100)-70, height: hp(25)}}>
            <ParallaxImage 
                source={item}
                containerStyle={{borderRadius: 30, flex: 1}}
                style={{resizeMode: 'contain'}}
                parallaxFactor={1}
                {...ParallaxProps}
            />
        </View>
    )
}