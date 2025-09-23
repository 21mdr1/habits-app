import { View, Pressable, StyleSheet } from "react-native";
import { StyledText, Icon } from "../Styled/StyledComponents";
import { primary, primaryVariant, primaryHighlight, primaryHighlightVariant } from "@/utils/consts";

export default function DisplayTask({ task, update }: {
    task: ITask,
    update: (task: ITask) => void,
}) {

    return (
        <Pressable
            style={styles.container}
            onPress={() => update({...task, completed: !task.completed})}
        >
            <View style={styles.text}>
                <StyledText type="sectionHeader">{ task.name }</StyledText>
                <StyledText>{ task.description }</StyledText>
            </View>
            <View
                style={[
                    styles.checkBox, 
                    task.completed && {backgroundColor: primary} 
                ]}
            >
                <Icon 
                    color={primary}
                    name="checkmark"
                    size={13}
                />
            </View>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    container: {
        borderColor: primaryVariant,
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    text: {
        flexGrow: 1,
    },
    checkBox: {
        borderRadius: 100,
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: primaryHighlightVariant,
        backgroundColor: primaryHighlight,
        justifyContent: "center",
        alignItems: "center",
    },
});