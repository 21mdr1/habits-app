import { View, StyleSheet } from "react-native";
import { StyledText } from './Styled/StyledComponents';
import { background, primary, textPrimary } from "@/utils/consts";

export default function ProgressBar() {
    return (
        <View style={styles.container}>
            <StyledText type="subheader">Today's Progress</StyledText>
            <View style={styles.barEmpty}>
                <View style={styles.barFull} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: primary,
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        gap: 20,
    },
    barEmpty: {
        backgroundColor: background,
        height: 25,
        borderRadius: 5,
    },
    barFull: {
        backgroundColor: textPrimary,
        height: "100%",
        // width: "50%",
        borderRadius: 5,
    },
});