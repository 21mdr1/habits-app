import { TextInput, StyleSheet, type TextInputProps } from "react-native";
import { primary } from "@/utils/consts";
import { textStyles } from "@/utils/styles";

export default function StyledTextInput({ style, type="bodyCopy", ...rest }: TextInputProps & {
    type?: 'pageHeader' | 'sectionHeader' | 'subheader' | 'bodyCopy' | 'labelsAndButtons';
}) {

    return (
        <TextInput
            style={[
                type === 'pageHeader' && textStyles.pageHeader,
                type === 'sectionHeader' && textStyles.sectionHeader,
                type === 'subheader' && textStyles.subheader,
                type === 'bodyCopy' && textStyles.bodyCopy,
                type === 'labelsAndButtons' && textStyles.labelsAndButtons,
                styles.input,
                style,
            ]}
            {...rest}
        />
    );

}


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: primary,
        borderRadius: 10,
    }
});