import { FlatList, StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { TaskContext } from '@/utils/context';
import StyledText from '@/components/Styled/StyledText';
import DisplayTask from '@/components/Task/DisplayTask';

export default function Main() {
    const { data, setData } = useContext(TaskContext);
    
    return (
        <>
            <View style={styles.container}>
                <StyledText 
                    type='pageHeader' 
                    color='secondary'
                    style={{textAlign: 'center'}}
                >
                    Habits
                </StyledText>
                <StyledText 
                    type='subheader' 
                    color='secondary'
                    style={{textAlign: 'center'}}
                >
                    Change your routine based on your energy level
                </StyledText>
            </View>

            <FlatList 
                contentContainerStyle={styles.container}
                data={data}
                renderItem={({item, index}) => 
                    <DisplayTask 
                        key={index} 
                        task={item} 
                        update={task => setData(prev => prev.with(index, task))}
                    />
                }
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
    },
})