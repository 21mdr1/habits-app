import { View, StyleSheet, DimensionValue } from 'react-native';
import { background, primary, textPrimary } from '@/utils/consts';
import { StyledModal, StyledText, StyledButton } from './Styled/StyledComponents';
import Slider from '@react-native-community/slider';
import { useContext, useMemo, useState } from "react";
import { RitualContext } from '@/utils/context';

export default function Prompt({ visible, setVisible }: {
    visible: boolean,
    setVisible: (_: boolean) => void,
}) {
    const { setData } = useContext(RitualContext);
    const [ sliderWidth, setSliderWidth ] = useState(0);
    const [ value, setValue ] = useState(0);
    const widths: DimensionValue[] = useMemo(() => [ 17 - 8 , sliderWidth / 2 - 8, sliderWidth - 17 - 8 ], [sliderWidth])

    return (
        <StyledModal visible={visible}>
            <StyledText type="sectionHeader">
                How do you feel today?
            </StyledText>
            <View 
                style={styles.emptySlider}
                onLayout={e => setSliderWidth(e.nativeEvent.layout.width)}
            >
                <Slider
                    minimumValue={0}
                    maximumValue={2}
                    step={1}
                    minimumTrackTintColor="transparent"
                    maximumTrackTintColor="transparent"
                    onValueChange={(e) => setValue(e)}
                    thumbTintColor="transparent"
                />
                <View style={[styles.filledSlider, { width: widths[value]}]}/>
                <View style={[styles.sliderButton, { left:  widths[value]}]} />
            </View>
            <StyledButton
                onPress={() => {
                    setData(prev => prev.map(ritual => ({...ritual, version: value + 1 as 1 | 2 | 3})));
                    setVisible(false);
                }}
            >
                Submit
            </StyledButton>
        </StyledModal>
    );
}

const styles = StyleSheet.create({
    stepMarker: {
        height: 20,
        backgroundColor: textPrimary,
        width: 2,
    },
    sliderButton: {
        width: 16,
        height: 30,
        borderRadius: 5,
        position: 'absolute',
        top: -5,
        backgroundColor: primary,
    },
    emptySlider: {
        borderRadius: 5,
        backgroundColor: background,
        height: 20,
    },
    filledSlider: {
        backgroundColor: textPrimary,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        height: "100%",
        position: "absolute",
        top: 0,
    }
});