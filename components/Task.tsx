import { View, Pressable, StyleSheet } from 'react-native';
// import { useContext } from 'react';
import StyledText from './StyledText';
import StyledTextInput from './StyledTextInput';
import { Icon } from './Icon';
import { tertiary, textPrimary, textSecondary } from '@/utils/consts';
import { writeTaskFreq } from '@/utils/helpers';
// import { RitualContext } from '@/utils/context';

export default function Task({ task, mode = 'display', updateTask = (_: ITask) => {} }: {
    task: ITask
    mode?: 'display' | 'edit'
    updateTask?: (task: ITask) => void,
}) {

    // const { setData } = useContext(RitualContext);

    return (<>
        { mode === "display" && (
            <View style={styles.displayContainer}>
                <Pressable 
                    style={styles.displayCheckBoxUnchecked}
                    onPress={() => {}}
                />
                <StyledText type="bodyCopy">
                    { task.name }
                </StyledText>
            </View>
        )}

        {mode === 'edit' && (
            <View style={styles.editContainer}>
                <Icon name="line.3.horizontal" color={textPrimary} size={20}/>

                <StyledTextInput 
                    style={styles.editTaskname}
                    value={ task.name }
                    onChangeText={(value) => updateTask({ ...task, name: value })}
                />
                <Pressable
                    onPress={() => {}}
                >
                    <StyledText type="labelsAndButtons" style={styles.editFrequency}>
                        { writeTaskFreq(task.frequency) }
                    </StyledText>
                </Pressable>

                <View style={styles.editVersionContainer}>
                    {[1, 2, 3].map(ver => 
                        <Pressable 
                            key={ver}
                            style={styles.editVersionCircle}
                            onPress={() => {
                                const newVersion = task.version.concat([]);
                                newVersion[ver - 1] = !newVersion[ver - 1];
                                updateTask({ ...task, version: newVersion })
                            }}
                        >
                            { task.version[ver - 1] &&
                                <Icon 
                                    style={styles.editVersionCircleSelected}
                                    name="checkmark" 
                                    color={ textPrimary }
                                    size={ 17 } 
                                />  
                            }
                        </Pressable>
                    )}
                </View>
            </View>
        )}
    </>);
}

const styles = StyleSheet.create({
    displayContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    displayCheckBoxUnchecked: {
        borderRadius: 100,
        width: 13,
        height: 13,
        borderWidth: 1,
        borderColor: textPrimary,
    },

    editContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: tertiary,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        gap: 10,
        marginVertical: 5,
    },

    editTaskname: {
        flexGrow: 1,
        padding: 10,
    },

    editFrequency: {
        color: textSecondary,
    },

    editVersionContainer: {
        flexDirection: "row",
        gap: 15,
    },
    editVersionCircle: {
        width: 15,
        height: 15,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: textPrimary,
    },
    editVersionCircleSelected: {
        position: "absolute",
        top: -2,
        left: -1,
    }

});