import { StyleSheet } from "react-native";
import { textPrimary } from "./consts";

const colorStyles = StyleSheet.create({
    text: {
        color: textPrimary,
    }
});

const textStyles = StyleSheet.create({
    pageHeader: {
        fontSize: 24,
        lineHeight: 32,
        fontFamily: "Syncopate_700Bold",
        ...colorStyles.text,
    },

    sectionHeader: {
        fontSize: 16,
        lineHeight: 20,
        fontFamily: "CarroisGothicSC_400Regular",
        ...colorStyles.text,
    },

    subheader: {
        fontSize: 13,
        lineHeight: 18,
        fontFamily: "Poppins_500Medium",
        ...colorStyles.text,
    },

    bodyCopy: {
        fontSize: 13,
        lineHeight: 18,
        fontFamily: "Poppins_400Regular",
        ...colorStyles.text,
    },

    labelsAndButtons: {
        fontSize: 10,
        lineHeight: 20,
        fontFamily: "CarroisGothicSC_400Regular",
        ...colorStyles.text,
    }
});


export { textStyles }