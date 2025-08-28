import { View, Modal, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import type { ViewProps } from 'react-native';
import { background } from '@/utils/consts';

export default function StyledModal({ children, style, overlayColor, ...rest }: ViewProps & {
    overlayColor?: string,
}) {
    return (
        <Modal
            transparent={true}
            {...rest}
        >   
            <GestureHandlerRootView style={[styles.overlay, overlayColor && {backgroundColor: overlayColor}]}>
                <View style={[ styles.modal, style ]}>
                    { children }
                </View>
            </GestureHandlerRootView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0,0, .25)',
        padding: 15,
    },

    modal: {
        backgroundColor: background,
        width: "100%",
        padding: 15,
        borderRadius: 10,
    },
});