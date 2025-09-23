import { Text, type TextProps } from "react-native";
import { textStyles, colorStyles } from "@/utils/styles";

export default function StyledText({ style, type='bodyCopy', color='primary', ...rest }: TextProps & {
  type?: 'pageHeader' | 'sectionHeader' | 'subheader' | 'bodyCopy' | 'labelsAndButtons';
  color?: 'primary' | 'secondary';
}) {
    return (
        <Text
            style={[
                type === 'pageHeader' && textStyles.pageHeader,
                type === 'sectionHeader' && textStyles.sectionHeader,
                type === 'subheader' && textStyles.subheader,
                type === 'bodyCopy' && textStyles.bodyCopy,
                type === 'labelsAndButtons' && textStyles.labelsAndButtons,
                color === 'primary' && colorStyles.primary,
                color === 'secondary' && colorStyles.secondary,
                style,
            ]}
            {...rest}
        />
    );
}