import { StyledModal, StyledText, StyledButton } from './Styled/StyledComponents';
import Slider from "./Slider";
import { useCallback, useContext, useState } from "react";
import { RitualContext } from "@/utils/context";

export default function Prompt() {
    const [ step, setStep ] = useState(0)
    const [ isVisible, setIsVisible ] = useState(true);
    const { data, setData } = useContext(RitualContext);

    const handlePress = useCallback(() => {
        // setData(prev => {
        //     const newArr = prev.concat([]);
        //     for (const el of newArr) {
        //         el.version = step + 1 as 1 | 2 | 3;
        //     }
        //     return prev;
        // });
        setIsVisible(false);
    }, [setData, step]);

    return (
        <StyledModal
            visible={isVisible}
        >
            <StyledText type="sectionHeader">
                How do you feel today?
            </StyledText>
            <Slider />
            <StyledButton
                onPress={handlePress}
            >
                Submit
            </StyledButton>
        </StyledModal>
    );
}