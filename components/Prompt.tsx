import { View, StyleSheet } from "react-native";
import { Modal, StyledText, StyledButton } from './Styled/StyledComponents';

export default function Prompt() {
    return (
        <Modal overlayStyle={styles.overlay}>
            <StyledText type="sectionHeader">
                How do you feel today?
            </StyledText>
            <StyledButton
                text="Submit"
            />
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0, 0,0, .25)',
    },
});