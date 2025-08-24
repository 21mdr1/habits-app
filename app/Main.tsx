import { View, StyleSheet, Alert, Pressable } from 'react-native';
import { RitualContext } from '@/utils/context';
import Ritual from '@/components/Ritual';
import Edit from '@/components/Edit';
import StyledText from '@/components/StyledText';
import { primary } from '@/utils/consts';
import { useState } from 'react';

const ogData: IRitual[] = [
    {
        name: "Morning Ritual",
        version: 2,
        tasks: [
            {name: "Take meds", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [true, true, true]},
            {name: "Drink water", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [true, true, true]},
            {name: "Shower", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [false, false, true]},
            {name: "Make breakfast", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [false, true, true]},
            {name: "Go to the gym", completed: false, frequency: [3, 5], version: [false, false, true]},
        ],
    },
    {
        name: "Afternoon Ritual",
        version: 2,
        tasks: [
            {name: "Take a nap", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [true, true, true]},
            {name: "Read", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [false, true, true]},
        ]
    }
]

const blankRitual: IRitual = {
    name: '',
    version: 1,
    tasks: []
}

export default function Main() {
    const [ editing, setEditing ] = useState(-1);
    const [ data, setData ] = useState<IRitual[]>(ogData);

    return (
        <RitualContext value={{data, setData}} >
            {/* Here goes the top thing */}
            <View></View>

            <View style={styles.ritualsContainer}>
                {data.map((el, index) => 
                    <Ritual 
                        key={el.name} 
                        data={el} 
                        edit={() => {setEditing(index)}} 
                        udpateTasks={(taskArr: ITask[]) => {
                            setData(prev => {
                                const newArray = prev.concat([]);
                                newArray[index].tasks = taskArr;
                                return newArray;
                            });
                        }}
                    />
                )}
                <Pressable
                    style={styles.ritualsAddButton}
                    onPress={() => {
                        const len = data.length;
                        setData(prev => prev.concat(blankRitual));
                        setEditing(len);
                    }}
                >
                    <StyledText type="labelsAndButtons">
                        + Add Ritual
                    </StyledText>
                </Pressable>
            </View>

            {editing > -1 && 
                <Edit 
                    data={data[editing]}  
                    saveData={(data: IRitual) => {
                        setData(prev => {
                            const newArray = prev.concat([]);
                            newArray[editing] = data;
                            return newArray;
                        });
                    setEditing(-1);
                    }}
                    cancel={() => {setEditing(-1)}}
                    deleteData={() => {
                        Alert.alert(
                            "Confirmation",
                            "Are you sure you want to delete this ritual? This action cannot be undone.",
                            [
                                {
                                    text: "Cancel",
                                    style: "cancel"
                                },
                                {
                                    text: "Yes",
                                    onPress: () => {
                                        setData(prev => {
                                            const newArray = prev.concat([]);
                                            newArray.splice(editing, 1);
                                            return newArray;
                                        });
                                        setEditing(-1);
                                    }
                                }
                            ]
                        )
                    }}
                />}
        </RitualContext>
    );
}

const styles = StyleSheet.create({
    ritualsContainer: {
        gap: 15,
    },
    ritualsAddButton: {
        backgroundColor: primary,
        borderRadius: 10,
        alignSelf: "center",
        paddingHorizontal: 43,
        paddingVertical: 5,
    }
})