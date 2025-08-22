import { View, StyleSheet } from "react-native";
import { CarroisGothicSC_400Regular } from '@expo-google-fonts/carrois-gothic-sc';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Syncopate_700Bold } from '@expo-google-fonts/syncopate';
import { useFonts } from "expo-font";
import { background } from "./utils/consts";
import Main from "./app/Main";

export default function App() {
  const [ loaded ] = useFonts({
    CarroisGothicSC_400Regular, Poppins_400Regular, Poppins_500Medium, Syncopate_700Bold
  });

  if(!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Main />
    </View>
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