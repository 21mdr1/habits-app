import { View } from 'react-native';
import Ritual from '@/components/Ritual';
import Edit from '@/components/Edit';
import { useState } from 'react';

export default function Main() {
    const [ isEditing, setIsEditing ] = useState(false);


    return <>
        {/* Here goes the top thing */}
        <View></View>

        <Ritual />

        {isEditing && <Edit />}
    </>
}