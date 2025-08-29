import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import { background, primary, tertiary, textPrimary } from "@/utils/consts";

export default function Slider() {
    const step = useSharedValue<0 | 1 | 2>(0);
    const steps = [.1, .5, .9]
    const [ sliderWidth, setSliderWidth ] = useState(0);

    const  isPressed = useSharedValue(false);
    const position = useSharedValue(0);

    const sliderButtonAnimated = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: sliderWidth * steps[step.value] - 8 },
            ],
            backgroundColor: isPressed.value ? tertiary : primary,
        }
    });

    const fillBarAnimated = useAnimatedStyle(() => {
        return {
            width: `${steps[step.value] * 100}%`
        }
    })

    const start = useSharedValue(0);

    const gesture = Gesture.Pan()
        .onBegin(() => {
            isPressed.value = true;
        })
        .onUpdate(e => {
            position.value = e.translationX + start.value

            
            if (position.value <= sliderWidth * .3) {
                step.value = 0;
            } else if (position.value <= sliderWidth * 0.7) {
                step.value = 1;
            } else {
                step.value = 2;
            }

            position.value = sliderWidth * steps[step.value];
        })
        .onEnd(() => {
            start.value = position.value
        })
        .onFinalize(() => {
            isPressed.value = false
        })

    return (
        <View 
            style={styles.emptySlider}
            onLayout={e => {
                setSliderWidth(e.nativeEvent.layout.width);
                position.value = e.nativeEvent.layout.width * .1 - 8;
            }}
        >
            <Animated.View style={[styles.filledSlider, fillBarAnimated]}/>
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.sliderButton, sliderButtonAnimated]}/>
            </GestureDetector>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderButton: {
        width: 16,
        height: 30,
        borderRadius: 5,
        position: 'absolute',
        top: -5,
    },
    emptySlider: {
        borderRadius: 5,
        backgroundColor: background,
        height: 20,
    },
    filledSlider: {
        backgroundColor: textPrimary,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        height: "100%",
    }
});