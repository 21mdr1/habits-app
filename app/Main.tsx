import { FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import { RitualContext } from '@/utils/context';
import ProgressBar from '@/components/ProgressBar';
import Ritual from '@/components/Ritual';
import StyledButton from '@/components/Styled/StyledButton';
import Edit from '@/components/Edit';
import { blankRitual } from '@/utils/consts';
import { sendDeleteAlert } from '@/utils/helpers';

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

export default function Main() {
    const [ editing, setEditing ] = useState(-1);
    const [ data, setData ] = useState<IRitual[]>(ogData);

    return (
        <RitualContext value={{data, setData}} >
            <ProgressBar />

            <FlatList 
                contentContainerStyle={styles.ritualsContainer}
                data={data}
                renderItem={({item, index}) => 
                    <Ritual 
                        data={item} 
                        edit={() => setEditing(index)}
                        udpateTasks={(taskArr: ITask[]) =>
                            setData(prev => {
                                const newArray = prev.concat([]);
                                newArray[index].tasks = taskArr;
                                return newArray;
                            })
                        }
                    />
                }
                ListFooterComponent={
                    <StyledButton 
                        onPress={() => {
                            const len = data.length;
                            setData(prev => prev.concat(blankRitual));
                            setEditing(len);
                        }}
                        text="+ Add Ritual"
                    />
                }
            />
            

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
                    cancel={() => setEditing(-1)}
                    deleteData={() => 
                        sendDeleteAlert("ritual", () => {
                            setData(prev => {
                                const newArray = prev.concat([]);
                                newArray.splice(editing, 1);
                                return newArray;
                            });
                            setEditing(-1);
                        })
                    }
                />
            }
        </RitualContext>
    );
}

const styles = StyleSheet.create({
    ritualsContainer: {
        gap: 15,
    },
})