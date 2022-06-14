import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0.0)).current;
    const position = useRef(new Animated.Value(-100)).current;

    const startMovingPosition = (initPosition:number=-100, duration:number=300) => {
        position.setValue(initPosition);
        return Animated.timing(
            position,
            {
                toValue: 0,
                 duration,
                useNativeDriver: true,
                // easing: Easing.bounce
            }
        )
    }

    const fadeIn = (duration:number=300) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration,
                useNativeDriver: true
            }
        ).start();

        // startMovingPosition().start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }
        ).start();

        // startMovingPosition().reset();
    }

    return{
        fadeIn,
        fadeOut,
        opacity,
        // top
        startMovingPosition,
        position
    }

}
