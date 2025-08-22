import { View } from 'react-native';
import Ritual from '@/components/Ritual';
import Edit from '@/components/Edit';
import { useState } from 'react';

const data: IRitual[] = [
    {
        name: "Morning Ritual",
        version: 2,
        tasks: [
            {name: "Take meds", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [true, true, true]},
            {name: "Drink water", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [true, true, true]},
            {name: "Shower", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [false, false, true]},
            {name: "Make breakfast", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [false, true, true]},
            {name: "Go to the gym", completed: false, frequency: [3, 5], version: [false, false, true]},
        ],
    },
    {
        name: "Afternoon Ritual",
        version: 2,
        tasks: [
            {name: "Take a nap", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [true, true, true]},
            {name: "Read", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [false, true, true]},
        ]
    }
]

export default function Main() {
    const [ isEditing, setIsEditing ] = useState(false);


    return <>
        {/* Here goes the top thing */}
        <View></View>

        {data.map(el => <Ritual key={el.name} data={el} />)

        }

        {/* <Ritual /> */}

        {isEditing && <Edit />}
    </>
}