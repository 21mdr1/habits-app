import { View, Pressable, StyleSheet } from "react-native";
import { StyledText, Icon } from "../Styled/StyledComponents";
import { textPrimary, backgroundSecondary } from "@/utils/consts";

export default function DisplayTask({ task, index, update }: {
    task: ITask,
    index: number,
    update: (task: ITask) => void,
}) {

    return (
        <Pressable
            style={styles.container}
            onPress={() => update({...task, completed: !task.completed})}
        >
            <View
                style={styles.checkBox}
            >
                {task.completed &&
                    <Icon 
                        style={styles.check}
                        name="checkmark"
                        size={17}
                    />
                }
            </View>
            <StyledText>{ task.name }</StyledText>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    container: {
        borderColor: "#F3E6D7",
        backgroundColor: backgroundSecondary,
        borderWidth: 3,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    checkBox: {
        borderRadius: 100,
        width: 13,
        height: 13,
        borderWidth: 1,
        borderColor: textPrimary,
    },

    check: {
        position: "absolute",
        top: -5,
        left: -1,
    },
});