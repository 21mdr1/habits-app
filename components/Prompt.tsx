import { View, StyleSheet } from "react-native";
import { StyledModal, StyledText, StyledButton } from './Styled/StyledComponents';

export default function Prompt() {
    return (
        <StyledModal>
            <StyledText type="sectionHeader">
                How do you feel today?
            </StyledText>
            <StyledButton>
                Submit
            </StyledButton>
        </StyledModal>
    );
}

const styles = StyleSheet.create({
});