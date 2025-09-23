import { StyleSheet } from "react-native";
import { textPrimary, textSecondary } from "./consts";

const colorStyles = StyleSheet.create({
    primary: {
        color: textPrimary,
    },
    secondary: {
        color: textSecondary,
    }
});

const textStyles = StyleSheet.create({
    pageHeader: {
        fontSize: 24,
        lineHeight: 32,
        fontFamily: "Syncopate_700Bold",
    },

    sectionHeader: {
        fontSize: 16,
        lineHeight: 20,
        fontFamily: "CarroisGothicSC_400Regular",
    },

    subheader: {
        fontSize: 13,
        lineHeight: 18,
        fontFamily: "Poppins_500Medium",
    },

    bodyCopy: {
        fontSize: 13,
        lineHeight: 18,
        letterSpacing: -.5,
        fontFamily: "Poppins_400Regular",
    },

    labelsAndButtons: {
        fontSize: 10,
        lineHeight: 20,
        fontFamily: "CarroisGothicSC_400Regular",
    }
});


export { textStyles, colorStyles }