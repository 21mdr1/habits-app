import { View, Pressable, StyleSheet } from 'react-native';
// import { useContext } from 'react';
import StyledText from './StyledText';
import { Icon } from './Icon';
import { tertiary, textPrimary, textSecondary } from '@/utils/consts';
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
                <StyledText type="bodyCopy">
                    { task.name }
                </StyledText>
            </View>
        )}

        {mode === 'edit' && (
            <View style={styles.editContainer}>
                <StyledText style={styles.editTaskname}>{ task.name }</StyledText>
                <StyledText type="labelsAndButtons" style={styles.editFrequency}>
                    { writeTaskFreq(task.frequency) }
                </StyledText>

                <View style={styles.editVersionContainer}>
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
                                    color={ textPrimary }
                                    size={ 17 } 
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

    editContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: tertiary,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
        gap: 10,
    },

    editTaskname: {
        flexGrow: 1,
    },

    editFrequency: {
        color: textSecondary,
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
    }

});