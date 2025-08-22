import { View, Pressable, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import Task from './Task';
import { useState } from 'react';
import { secondary } from '@/utils/consts';

export default function Edit({ data }:{
    data: IRitual,
}) {
    const [ tempData, setTempData ] = useState(data);

    return (
        <View style={styles.container}>
            <StyledText type="sectionHeader">{ tempData.name }</StyledText>

            <StyledText type="subheader">Habit</StyledText>
            <StyledText type="subheader">Version</StyledText>
            <StyledText type="labelsAndButtons">Low</StyledText>
            <StyledText type="labelsAndButtons">Med</StyledText>
            <StyledText type="labelsAndButtons">High</StyledText>
            
            {tempData.tasks.map((el, index) => <Task task={el} key={index} mode="edit" /> )}

            <Pressable>
                <StyledText type="labelsAndButtons">
                    Save Ritual
                </StyledText>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: secondary,
    }
});