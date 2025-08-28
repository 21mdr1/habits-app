import { View, StyleSheet } from 'react-native';
import type { ViewProps, StyleProp, ViewStyle } from 'react-native';
import { background } from '@/utils/consts';

export default function Modal({ style, overlayStyle, ...rest }: ViewProps & {
    overlayStyle?: StyleProp<ViewStyle>;
}) {
    return (
        <View style={[ styles.overlay, overlayStyle ]}>
            <View
                style={[
                    styles.modal,
                    style
                ]}
                {...rest}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        inset: 0,
        zIndex: 99,

        padding: 15,

        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        backgroundColor: background,
        width: "100%",
        padding: 15,
        borderRadius: 10,
    },
});