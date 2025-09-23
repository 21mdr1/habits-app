import { StyleSheet } from "react-native";
import { useState } from "react";
import { TaskContext } from "./utils/context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CarroisGothicSC_400Regular } from '@expo-google-fonts/carrois-gothic-sc';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Syncopate_700Bold } from '@expo-google-fonts/syncopate';
import { useFonts } from "expo-font";
import { background } from "./utils/consts";
import Main from "./app/Main";

const ogData: ITask[] = [
  {name: "Morning Routine", description: "Brush teeth, stretch, meditate", emoji: "sun", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [true, true, true]},
  {name: "Exercise", description: "Yoga, walk, or jog", emoji: "bunny", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [true, true, true]},
  {name: "Read", description: "Read a book", emoji: "book", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [false, false, true]},
  {name: "Plan the day", description: "Set tasks & goals", emoji: "plant", completed: false, frequency: [0, 1, 2, 3, 4, 5, 6], version: [false, true, true]},
]

export default function App() {
  const [ data, setData ] = useState<ITask[]>(ogData);
  const [ loaded ] = useFonts({
    CarroisGothicSC_400Regular, Poppins_400Regular, Poppins_500Medium, Syncopate_700Bold
  });

  if(!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <TaskContext value={{data, setData}} >
        <Main />
      </TaskContext>
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