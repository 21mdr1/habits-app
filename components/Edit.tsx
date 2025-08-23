import { View, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import StyledTextInput from './StyledTextInput';
import Task from './Task';
import { useState } from 'react';
import { primary, secondary, tertiary } from '@/utils/consts';

export default function Edit({ data }:{
    data: IRitual,
}) {
    const [ tempData, setTempData ] = useState(data);


    function updateTask(task: ITask, index: number) {
        const newTasks = tempData.tasks.concat([]);
        newTasks[index] = task;
        setTempData(prev => ({...prev, tasks: newTasks}));
    }



    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container} >
            <StyledTextInput 
                type="sectionHeader"
                style={styles.title}
                value={ tempData.name }
                onChangeText={(value) => setTempData(prev => ({...prev, name: value}))}
            />

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
                        /> 
                    )}
                </ScrollView>
            </View>

            <Pressable
                style={({pressed}) => [styles.buttonContainer, pressed && styles.buttonContainerPressed]}
                onPress={() => {}}
            >
                <StyledText type="labelsAndButtons">
                    Save Ritual
                </StyledText>
            </Pressable>

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
    },
    title: {
        padding: 10,
        marginBottom: 5,
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

    buttonContainer: {
        backgroundColor: primary,
        alignSelf: "center",
        paddingHorizontal: 43,
        paddingVertical: 5,
        borderRadius: 10,
    },

    buttonContainerPressed: {
        backgroundColor: tertiary,
    },

});