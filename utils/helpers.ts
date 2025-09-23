import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function writeTaskFreq(freq: number[]) {
    const days = [ "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat" ]

    if(freq.length === 7) {
        return "( Every Day )"
    } else if(freq.length === 2 && freq.includes(0) && freq.includes(6)) {
        return "( Weekends )"
    } else if(freq.length === 5 && !freq.includes(0) && !freq.includes(6)) {
        return "( Weekdays )"
    }

    return "( " + freq.map(el => days[el]).join(", ") + " )"
}

export function sendDeleteAlert(name: string, onConfirm: () => void) {
    Alert.alert(
        "Confirmation",
        `Are you sure you want to delete this ${name}? This action cannot be undone.`,
        [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "Yes",
                onPress: onConfirm
            }
        ]
    )
}
