import { View, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import { StyledTextInput, StyledText, StyledButton, Icon } from './Styled/StyledComponents';
import Task from './Task/Task';
import { useState } from 'react';
import { primary, secondary, textPrimary, blankTask } from '@/utils/consts';

export default function Edit({ data, saveData, cancel, deleteData }:{
    data: IRitual,
    saveData: (ritual: IRitual) => void,
    cancel: () => void,
    deleteData?: () => void,
}) {
    const [ tempData, setTempData ] = useState(data);


    function updateTask(task: ITask, index: number) {
        const newTasks = tempData.tasks.concat([]);
        newTasks[index] = task;
        setTempData(prev => ({...prev, tasks: newTasks}));
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container} >
            <View style={styles.titleContainer}>
                <Pressable
                    onPress={cancel}
                >
                    <Icon
                        name="arrow.left"
                        color={textPrimary}
                    />
                </Pressable>
                <StyledTextInput 
                    type="sectionHeader"
                    style={styles.title}
                    value={ tempData.name }
                    onChangeText={(value) => setTempData(prev => ({...prev, name: value}))}
                />
            </View>

            <View style={styles.header_container}>
                <StyledText type="subheader" style={styles.header_item}>Habit</StyledText>
                <View style={styles.header_item}>
                    <StyledText type="subheader">Version</StyledText>
                    <View style={styles.header_version_container}>
                        <StyledText type="labelsAndButtons">Low</StyledText>
                        <StyledText type="labelsAndButtons">Med</StyledText>
                        <StyledText type="labelsAndButtons">High</StyledText>
                    </View>
                </View>
            </View>
            
            <View style={styles.tasksContainer}>
                <ScrollView keyboardDismissMode='on-drag'>
                    {tempData.tasks.map((el, index) => 
                        <Task 
                            task={el} 
                            key={index} 
                            mode="edit" 
                            updateTask={(task: ITask) => {updateTask(task, index)}}
                            deleteTask={() => setTempData(prev => ({...prev, tasks: prev.tasks.filter((_, ind) => ind !== index)}))}
                        /> 
                    )}
                    <Pressable 
                        style={({ pressed }) => [styles.addTaskContainer, pressed && styles.addTaskContainerPressed]}
                        onPress={() => {setTempData(prev => ({ ...prev, tasks: prev.tasks.concat(blankTask) }))}}
                    >
                        <StyledText type="labelsAndButtons">
                            + Add Task
                        </StyledText>
                    </Pressable>
                </ScrollView>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton 
                    type='delete'
                    onPress={deleteData}
                >Delete Ritual</StyledButton>
                <StyledButton 
                    onPress={() => {saveData(tempData)}}
                >Save Ritual</StyledButton>
            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: secondary,
        position: "absolute",
        top: 30,
        left: 20,
        width: "100%",
        height: "100%",
        padding: 15,
        borderRadius: 10,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    title: {
        padding: 10,
        marginBottom: 5,
        flexGrow: 1,
    },

    header_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    header_item: {
        paddingHorizontal: 10,
        alignItems: "center",
    },

    header_version_container: {
        flexDirection: "row",
        gap: 10,
    },

    tasksContainer: {
        flexGrow: 1,
    },

    addTaskContainer: {
        borderWidth: 1,
        borderColor: primary,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },

    addTaskContainerPressed: {
        backgroundColor: primary,
    },

    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
    },
});