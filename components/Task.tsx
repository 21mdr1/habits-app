import { View, Pressable, StyleSheet } from 'react-native';
// import { useContext } from 'react';
import StyledText from './StyledText';
import { Icon } from './Icon';
import { textPrimary } from '@/utils/consts';
import { writeTaskFreq } from '@/utils/helpers';
// import { RitualContext } from '@/utils/context';


export default function Task({ task, mode = 'display' }: {
    task: ITask
    mode?: 'display' | 'edit'
}) {

    // const { setData } = useContext(RitualContext);

    return (<>
        { mode === "display" && (
            <View style={styles.displayContainer}>
                <Pressable 
                    style={styles.displayCheckBoxUnchecked}
                    onPress={() => {}}
                />
                <StyledText type="bodyCopy" style={styles.displayText}>
                    { task.name }
                </StyledText>
            </View>
        )}

        {mode === 'edit' && (
            <View>
                <StyledText>{ task.name }</StyledText>
                <StyledText type="labelsAndButtons">
                    { writeTaskFreq(task.frequency) }
                </StyledText>

                <View>
                    {[1, 2, 3].map(ver => 
                        <Pressable 
                            key={ver}
                            style={styles.editVersionCircle}
                            onPress={() => {}}
                        >
                            { task.version[ver - 1] &&
                                <Icon 
                                    style={styles.editVersionCircleSelected}
                                    name="checkmark" 
                                    color="black" 
                                    size={ 15 } 
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
    displayText: {
        color: textPrimary,
    },

    editVersionCircle: {
        width: 13,
        height: 13,
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