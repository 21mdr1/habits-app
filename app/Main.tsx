import { FlatList, StyleSheet } from 'react-native';
import { useContext, useState } from 'react';
import { RitualContext } from '@/utils/context';
import ProgressBar from '@/components/ProgressBar';
import Ritual from '@/components/Ritual';
import StyledButton from '@/components/Styled/StyledButton';
import Edit from '@/components/Edit';
import { blankRitual } from '@/utils/consts';
import { sendDeleteAlert } from '@/utils/helpers';
import Prompt from '@/components/Prompt';

export default function Main() {
    const [ editing, setEditing ] = useState(-1);
    const { data, setData } = useContext(RitualContext);

    return (
        <>
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
            
            <Prompt />

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
        </>
    );
}

const styles = StyleSheet.create({
    ritualsContainer: {
        gap: 15,
    },
})