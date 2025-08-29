import { View, StyleSheet, Pressable} from 'react-native';
import { secondary, tertiary, textPrimary } from '@/utils/consts';
import { StyledText, Icon } from './Styled/StyledComponents'
import Task from './Task/Task';
import { useContext } from 'react';
import { RitualContext } from '@/utils/context';

export default function Ritual({ data, edit, udpateTasks, index }:{
    data: IRitual,
    edit: () => void,
    udpateTasks: (taskArr: ITask[]) => void,
    index: number,
}) {

    const { setData } = useContext(RitualContext);

    return (
        <View style={styles.container}>
            <StyledText type="sectionHeader">{ data.name }</StyledText>

            <Pressable 
                style={styles.versionContainer}
                onPress={() => {setData(prev => {
                    const newArr = prev.concat([]);
                    newArr[index].version = newArr[index].version === 3 ?  1 : newArr[index].version + 1 as 1 | 2 | 3;
                    return newArr;
                })}}
            >
                {[1, 2, 3].map(ver => 
                    <View 
                        key={ver}
                        style={[styles.versionCircle, data.version === ver && styles.versionCircleSelected]}
                    />
                )}
            </Pressable>

            
            <View style={styles.tasks}>
                {data.tasks.filter(el => el.version[data.version - 1]).map((task, index) => (
                    <Task key={index} task={task} updateTask={(task) => {
                        const newArr = data.tasks.concat([]);
                        newArr[data.tasks.findIndex(el => el.name === task.name)] = task;
                        udpateTasks(newArr);
                    }} />
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