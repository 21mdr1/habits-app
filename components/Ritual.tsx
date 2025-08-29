import { View, StyleSheet, Pressable} from 'react-native';
import { secondary, tertiary, textPrimary } from '@/utils/consts';
import { StyledText, Icon } from './Styled/StyledComponents'
import { useContext } from 'react';
import { RitualContext } from '@/utils/context';
import Task from './Task/Task';

export default function Ritual({ edit, index }:{
    edit: () => void,
    index: number,
}) {

    const { data, setData } = useContext(RitualContext);
    const ritual = data[index];

    return (
        <View style={styles.container}>
            <StyledText type="sectionHeader">{ ritual.name }</StyledText>

            <Pressable 
                style={styles.versionContainer}
                onPress={() => {setData(prev => 
                    prev.with(index, { ...ritual, version: ritual.version === 3 ? 1 : ritual.version + 1 as 1 | 2 | 3 })
                )}}
            >
                {[1, 2, 3].map(ver => 
                    <View 
                        key={ver}
                        style={[styles.versionCircle, ritual.version === ver && styles.versionCircleSelected]}
                    />
                )}
            </Pressable>

            
            <View style={styles.tasks}>
                {ritual.tasks.filter(el => el.version[ritual.version - 1]).map((task, taskIndex) => (
                    <Task key={taskIndex} task={task} updateTask={(task) => {
                        setData(prev => 
                            prev.with(index, {...prev[index], tasks: ritual.tasks.map(el => 
                                el.name === task.name ? task : el
                            )})
                        )
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