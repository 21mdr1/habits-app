import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';
import { textPrimary } from "@/utils/consts";

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

const MAPPING = {
    'square.and.pencil': 'edit',
    'line.3.horizontal': 'drag-handle',
    'checkmark': 'check',
    'arrow.left': 'arrow-back',
} as IconMapping;


export function Icon({ name, size = 24, color = textPrimary, style}: {
    name: IconSymbolName,
    size?: number,
    color?: string | OpaqueColorValue,
    style?: StyleProp<TextStyle>,
    weight?: SymbolWeight
}) {
    return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />
}