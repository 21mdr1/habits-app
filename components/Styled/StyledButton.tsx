import { Pressable, StyleSheet, type PressableProps, type StyleProp, type ViewStyle } from "react-native";
import StyledText from "./StyledText";
import { error, primary, tertiary } from "@/utils/consts";

export default function StyledButton({ style, pressedStyle, type='primary', text='', ...rest }: PressableProps & {
    style?: StyleProp<ViewStyle>,
    pressedStyle?: StyleProp<ViewStyle>,
    type?: 'primary' | 'delete';
    text?: string;
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
            <StyledText type="labelsAndButtons">
                { text }
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
    },
    
    deletePressed: {
        backgroundColor: error,
    }

});