import { StyleSheet } from "react-native";
import { useState } from "react";
import { RitualContext } from "./utils/context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CarroisGothicSC_400Regular } from '@expo-google-fonts/carrois-gothic-sc';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Syncopate_700Bold } from '@expo-google-fonts/syncopate';
import { useFonts } from "expo-font";
import { background } from "./utils/consts";
import Main from "./app/Main";

const ogData: IRitual[] = [
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

export default function App() {
  const [ loaded ] = useFonts({
    CarroisGothicSC_400Regular, Poppins_400Regular, Poppins_500Medium, Syncopate_700Bold
  });

  if(!loaded) {
    return null;
  }

  const [ data, setData ] = useState<IRitual[]>(ogData);

  return (
    <GestureHandlerRootView style={styles.container}>
      <RitualContext value={{data, setData}} >
        <Main />
      </RitualContext>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    padding: 20,
    paddingTop: 30,
    height: "100%",
    width: "100%",
  }
});