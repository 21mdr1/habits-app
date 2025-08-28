import { Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { StyledText, StyledButton, Icon, StyledModal } from '../Styled/StyledComponents';
import { altTertiary, tertiary, textSecondary } from '@/utils/consts';

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function EditFrequency({ freq, update }: {
    freq: number[],
    update: (freq: number[]) => void,
}) {
    const [ tempFreq, setTempFreq ] = useState(freq);

    return (
        <StyledModal style={styles.modal}>
            {days.map((day, ind) => (
                <Pressable
                    key={day}
                    style={styles.day}
                    onPress={() => setTempFreq(prev => 
                        prev.includes(ind) ? prev.filter(el => el !== ind) : prev.concat([ind])
                    )}
                >
                    <StyledText>{ `Every ${day} ` }</StyledText>
                    {tempFreq.includes(ind) && 
                        <Icon 
                            name="checkmark"
                            color={textSecondary}
                            size={17}
                        />
                    } 
                </Pressable>
            ))}

            <StyledButton 
                onPress={() => update(tempFreq)}
            >
                Save Frequency
            </StyledButton>
        </StyledModal>
    );
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: altTertiary,
    },

    day: {
        flexDirection: "row",
        justifyContent: "space-between",

        borderWidth: 1,
        borderColor: tertiary,
        borderRadius: 10,

        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
});