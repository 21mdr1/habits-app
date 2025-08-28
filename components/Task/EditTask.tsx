import { View, StyleSheet, Pressable } from "react-native";
import { useState } from 'react';
import EditFrequency from "./EditFrequency";
import { StyledTextInput, StyledButton, Icon } from '../Styled/StyledComponents';
import { writeTaskFreq } from "@/utils/helpers";
import { error, tertiary, textPrimary, textSecondary } from "@/utils/consts";

export default function EditTask({ task, update, del }:{
    task: ITask,
    update: (task: ITask) => void,
    del: () => void,
}) {
    const [ showDelete, setShowDelete ] = useState(false);
    const [ editFrequency, setEditFrequency ] = useState(false);


    return (<>
        <View
            style={[styles.container, showDelete && styles.side]}
        >
            <Pressable 
                style={styles.task}
                onPress={() => setShowDelete(false)}
            >
                <Pressable
                    onPress={() => setShowDelete(true)}
                >
                    <Icon name='line.3.horizontal' size={20} />
                </Pressable>

                <StyledTextInput 
                    style={[styles.name]}
                    value={ task.name }
                    onChangeText={value => update({...task, name: value})}
                />

                <StyledButton 
                    style={styles.freqButton}
                    textStyle={styles.freq}
                    onPress={() => setEditFrequency(true)}
                >
                    { writeTaskFreq(task.frequency) }
                </StyledButton>

                <View
                    style={styles.versions}
                >
                    {[0, 1, 2].map(ver => (
                        <Pressable
                            key={ver}
                            style={styles.circle}
                            onPress={() => {
                                const newVer = task.version.concat([]);
                                newVer[ver] = !newVer[ver];
                                update({ ...task, version: newVer});
                            }}
                        >
                            { task.version[ver] && (
                                <Icon 
                                    style={styles.check}
                                    name="checkmark"
                                    size={17}
                                />
                            )}
                        </Pressable>
                    ))}

                </View>
            </Pressable>

            {showDelete && (
                <StyledButton 
                    style={styles.deleteButton}
                    onPress={del}
                    textStyle={styles.deleteText}
                >
                    Delete
                </StyledButton>
            )}
        </View>

        {editFrequency && 
            <EditFrequency
                freq={task.frequency}
                update={(frequency) => {
                    update({...task, frequency});
                    setEditFrequency(false);
                }}
            />
        }
    </>);

}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 3,
        marginVertical: 5,
    },

    side: {
        position: "relative",
        left: -60, 
    },

    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,

        borderWidth: 1,
        borderColor: tertiary,
        borderRadius: 10,

        width: "100%",
        padding: 10,
    },

    name: {
        flexGrow: 1,
        padding: 10,
    },

    freqButton: {
        backgroundColor: "transparent",
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderWidth: 0,
    },

    freq: {
        color: textSecondary,
    },

    versions: {
        flexDirection: "row",
        gap: 15,
    },

    circle: {
        width: 15,
        height: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: textPrimary,
    },

    check: {
        position: "absolute",
        top: -2,
        left: -1,
    },

    deleteButton: {
        backgroundColor: error,
        borderWidth: 0,
        paddingHorizontal: 13,
        justifyContent: "center",
        alignSelf: "stretch",
    },

    deleteText: {
        color: '#FFFFFF'
    },
});