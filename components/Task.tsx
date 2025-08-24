import { View, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import StyledText from './StyledText';
import StyledTextInput from './StyledTextInput';
import { Icon } from './Icon';
import { error, tertiary, textPrimary, textSecondary } from '@/utils/consts';
import { writeTaskFreq } from '@/utils/helpers';
import { primary, altTertiary } from '@/utils/consts';

function EditFrequency({ frequency, updateFrequency }: {
    frequency: number[],
    updateFrequency: (frequency: number[]) => void,
}) {

    const [ tempFrequency, setTempFrequency ] = useState(frequency);

    return (
        <View style={styles.overlay}>
            <View style={styles.editFreqContainer}>
                {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
                    <Pressable
                        key={day}
                        style={styles.dayContainer}
                        onPress={() => setTempFrequency(prev => (
                            prev.includes(index) ? prev.filter((el) => el !== index) : prev.concat([ index ])
                        ))}
                    >
                        <StyledText>
                            { `Every ${day}` }
                        </StyledText>
                        {tempFrequency.includes(index) && 
                            <Icon 
                                name="checkmark"
                                color={textSecondary}
                                size={24}
                            />
                        }
                    </Pressable>
                ))}
                <Pressable
                    style={styles.editFreqButton}
                    onPress={() => updateFrequency(tempFrequency)}
                >
                    <StyledText type="labelsAndButtons">Save Frequency</StyledText>
                </Pressable>
            </View>
        </View>
    );
} 


export default function Task({ task, mode = 'display', updateTask = (_: ITask) => {}, deleteTask = () => {} }: {
    task: ITask
    mode?: 'display' | 'edit'
    updateTask?: (task: ITask) => void,
    deleteTask?: () => void
}) {
    const [ fontSize, setFontSize ] = useState<number>(13);
    const [ isEditingFreq, setIsEditingFreq ] = useState(false);
    const [ showDeleteOption, setShowDeleteOption ] = useState(false);

    return (<>
        { mode === "display" && (
            <View style={styles.displayContainer}>
                <Pressable 
                    style={styles.displayCheckBoxUnchecked}
                    onPress={() => {updateTask({...task, completed: !task.completed})}}
                >
                    { task.completed &&
                        <Icon 
                            style={styles.displayCheck}
                            name="checkmark" 
                            color={ textPrimary }
                            size={ 17 } 
                        />  
                    }
                </Pressable>
                <StyledText type="bodyCopy">
                    { task.name }
                </StyledText>
            </View>
        )}

        {mode === 'edit' && (
            <View
                style={[styles.editDeleteContainer, showDeleteOption && styles.editContainerSide]}
            >
                <View style={styles.editContainer}>
                    <Pressable
                        onPress={() => {setShowDeleteOption(prev => !prev)}}
                    >
                        <Icon name="line.3.horizontal" color={textPrimary} size={20}/>
                    </Pressable>

                    <StyledTextInput 
                        style={[styles.editTaskname, { fontSize }]}
                        value={ task.name }
                        onChangeText={(value) => {
                            if (task.name.length > value.length && value.length < 12) {
                                fontSize <= 13 && setFontSize(Math.ceil(fontSize * 1.1));
                            } else if (task.name.length < value.length && value.length > 8) {
                                fontSize >= 8 && setFontSize(Math.ceil(fontSize / 1.1));
                            }
                            updateTask({ ...task, name: value });
                        }}
                    />
                    <Pressable
                        onPress={() => {setIsEditingFreq(true)}}
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
                {showDeleteOption &&
                    <Pressable
                        style={styles.editDeleteButton}
                        onPress={deleteTask}
                    >
                        <StyledText type="labelsAndButtons" style={styles.editDeleteText}>Delete</StyledText>
                    </Pressable>
                }
                
            </View>
        )}

        {isEditingFreq && (
            <EditFrequency 
                frequency={task.frequency}
                updateFrequency={(frequency: number[]) => {updateTask({...task, frequency}); setIsEditingFreq(false)}}
            />
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
    displayCheck: {
        position: "absolute",
        top: -5,
        left: -1,
    },

    editContainer: {
        flexGrow: 1,
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
        maxWidth: "37%",
    },

    editFrequency: {
        color: textSecondary,
    },

    overlay: {
        position: "absolute",
        zIndex: 99,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
    },
    editFreqContainer: {
        backgroundColor: altTertiary,
        width: "100%",
        padding: 15,
        borderRadius: 10,
    },
    dayContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
        borderWidth: 1,
        borderColor: tertiary,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    editFreqButton: {
        backgroundColor: primary,
        alignSelf: "center",
        paddingHorizontal: 43,
        paddingVertical: 5,
        borderRadius: 10,
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
    },

    editDeleteContainer: {
        flexDirection: "row",
        gap: 3,
    },

    editContainerSide: {
        position: "relative",
        left: -20,
    },
    editDeleteButton: {
        backgroundColor: error,
        borderRadius: 10,
        marginVertical: 5,
        padding: 13,
        justifyContent: "center",
    },
    editDeleteText: {
        color: "white",
    }

});