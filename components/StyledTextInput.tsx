import { TextInput, StyleSheet, type TextInputProps } from "react-native";
import { primary, textPrimary } from "@/utils/consts";

export default function StyledTextInput({ style, type="bodyCopy", ...rest }: TextInputProps & {
    type?: 'pageHeader' | 'sectionHeader' | 'subheader' | 'bodyCopy' | 'labelsAndButtons';
}) {

    return (
        <TextInput
            style={[
                type === 'pageHeader' ? styles.pageHeader : undefined,
                type === 'sectionHeader' ? styles.sectionHeader : undefined,
                type === 'subheader' ? styles.subheader : undefined,
                type === 'bodyCopy' ? styles.bodyCopy : undefined,
                type === 'labelsAndButtons' ? styles.labelsAndButtons : undefined,
                styles.input,
                style,
            ]}
            {...rest}
        />
    );

}


const styles = StyleSheet.create({
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
        fontFamily: "Poppins_400Regular",
    },

    labelsAndButtons: {
        fontSize: 10,
        lineHeight: 20,
        fontFamily: "CarroisGothicSC_400Regular",
    },
    input: {
        borderWidth: 1,
        borderColor: primary,
        borderRadius: 10,
        color: textPrimary,

    }
});