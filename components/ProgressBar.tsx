import { View, StyleSheet } from "react-native";
import { useContext, useCallback } from "react";
import { StyledText } from './Styled/StyledComponents';
import { background, primary, textPrimary } from "@/utils/consts";
import { RitualContext } from "@/utils/context";

export default function ProgressBar() {
    const { data: rituals } = useContext(RitualContext);

    const getPercentage = useCallback(() => {
        let allTasks: ITask[] = []

        for(let ritual of rituals) {
            allTasks = allTasks.concat(
                ritual.tasks.filter(task => task.version[ritual.version - 1])
            )
        }

        const total = allTasks.length
        const completed = allTasks.filter(task => task.completed).length

        return total !== 0 ? (completed / total)*100 : 100;
    }, [rituals]);


    return (
        <View style={styles.container}>
            <StyledText type="subheader">Today's Progress</StyledText>
            <View style={styles.barEmpty}>
                <View style={[styles.barFull, { width: `${getPercentage()}%` } ]} />
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