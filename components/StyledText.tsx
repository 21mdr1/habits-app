import { Text, type TextProps } from "react-native";
import { textStyles } from "@/utils/styles";

export default function StyledText({ style, type='bodyCopy', ...rest }: TextProps & {
  type?: 'pageHeader' | 'sectionHeader' | 'subheader' | 'bodyCopy' | 'labelsAndButtons';
}) {
    return (
        <Text
            style={[
                type === 'pageHeader' &&textStyles.pageHeader,
                type === 'sectionHeader' && textStyles.sectionHeader,
                type === 'subheader' && textStyles.subheader,
                type === 'bodyCopy' && textStyles.bodyCopy,
                type === 'labelsAndButtons' && textStyles.labelsAndButtons,
                style,
            ]}
            {...rest}
        />
    );
}