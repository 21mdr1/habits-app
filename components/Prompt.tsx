import { useSharedValue } from "react-native-reanimated";
import { StyledModal, StyledText, StyledButton } from './Styled/StyledComponents';
import Slider from "./Slider";
import { useCallback, useContext, useEffect, useState } from "react";
import { RitualContext } from "@/utils/context";

export default function Prompt() {
    const step = useSharedValue<0 | 1 | 2>(0);
    const [ isVisible, setIsVisible ] = useState(true);
    const { data, setData } = useContext(RitualContext);

    const handlePress = useCallback(() => {
        setData(prev => {
            const newArr = prev.concat([]);
            for (const el of newArr) {
                el.version = step.value + 1 as 1 | 2 | 3;
            }
            return prev;
        });
        setIsVisible(false);
        console.log(data);
    }, [setData, step.value]);

    return (
        <StyledModal
            visible={isVisible}
        >
            <StyledText type="sectionHeader">
                How do you feel today?
            </StyledText>
            <Slider step={step} />
            <StyledButton
                onPress={handlePress}
            >
                Submit
            </StyledButton>
        </StyledModal>
    );
}