import { Pressable, StyleSheet } from "react-native";
import type { PressableProps, TextProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import StyledText from "./StyledText";
import { error, primary, tertiary } from "@/utils/consts";

export default function StyledButton({ children, style, pressedStyle, textStyle, type='primary', ...rest }: PressableProps & TextProps & {
    style?: StyleProp<ViewStyle>,
    pressedStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    type?: 'primary' | 'delete';
}) {
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.container,
                type === 'primary' ? 
                    styles.primary : 
                    styles.delete,
                pressed && (type === 'primary' ? 
                    styles.primaryPressed : 
                    styles.deletePressed),
                style,
                pressed && pressedStyle
                ]}
            {...rest}
        >
            <StyledText type="labelsAndButtons" style={textStyle}>
                { children }
            </StyledText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        paddingHorizontal: 43,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
    },

    primary: {
        backgroundColor: primary,
        borderColor: primary,
    },

    delete: {
        borderColor: error,
    },

    primaryPressed: {
        backgroundColor: tertiary,
        borderColor: tertiary,
    },
    
    deletePressed: {
        backgroundColor: error,
    }

});