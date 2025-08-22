import { View, StyleSheet, Pressable} from 'react-native';
import { secondary, tertiary, textPrimary } from '@/utils/consts';
import StyledText from './StyledText';
import { Icon } from './Icon';
import Task from './Task';

const tasks = ["Take meds", "drink water", "make breakfast"]

export default function Ritual({ data }:{
    data: IRitual,
}) {
    return (
        <View style={styles.container}>
            <StyledText type="sectionHeader" style={styles.text}>{ data.name }</StyledText>

            <Pressable style={styles.versionContainer}>
                <View style={styles.versionCircle}></View>
                <View style={[styles.versionCircle, styles.versionCircleSelected]}></View>
                <View style={styles.versionCircle}></View>
            </Pressable>

            
            <View style={styles.tasks}>
                {data.tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </View>
            
            <Pressable style={styles.icon}>
                <Icon name="square.and.pencil" color={textPrimary} size={20} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: secondary,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 30,
    },
    tasks: {
        paddingTop: 10,
        gap: 8,
    },
    text: {
        color: textPrimary,
    },
    icon: {
        position: "absolute",
        right: 20,
        bottom: 10,
    },
    versionContainer: {
        flexDirection: "row",
        gap: 5,
        position: "absolute",
        right: 20,
        top: 15,
    },
    versionCircle: {
        width: 10,
        height: 10,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: textPrimary,
    },
    versionCircleSelected: {
        backgroundColor: tertiary,
    }
});