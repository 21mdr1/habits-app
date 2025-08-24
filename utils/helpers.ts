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