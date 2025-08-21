import { View, Pressable, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import { textPrimary } from '@/utils/consts';

export default function Task({ task }: {
    task: string
}) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.checkBoxUnchecked}/>
            <StyledText type="bodyCopy" style={styles.text}>{ task }</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    checkBoxUnchecked: {
        borderRadius: 100,
        width: 13,
        height: 13,
        borderWidth: 1,
        borderColor: textPrimary,
    },
    text: {
        color: textPrimary,
    }
});