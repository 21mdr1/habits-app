import { View, StyleSheet, Pressable} from 'react-native';
import { secondary, tertiary, textPrimary } from '@/utils/consts';
import StyledText from './StyledText';
import { Icon } from './Icon';
import Task from './Task';

export default function Ritual({ data, edit }:{
    data: IRitual,
    edit: () => void,
}) {
    return (
        <View style={styles.container}>
            <StyledText type="sectionHeader" style={styles.text}>{ data.name }</StyledText>

            <Pressable style={styles.versionContainer}>
                {[1, 2, 3].map(ver => 
                    <View 
                        key={ver}
                        style={[styles.versionCircle, data.version === ver && styles.versionCircleSelected]}
                    />
                )}
            </Pressable>

            
            <View style={styles.tasks}>
                {data.tasks.filter(el => el.version[data.version - 1]).map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </View>
            
            <Pressable 
                style={styles.icon}
                onPress={edit}
            >
                <Icon 
                    name="square.and.pencil" 
                    color={textPrimary} 
                    size={20} 
                />
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