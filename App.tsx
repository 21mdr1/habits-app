// import Index from "./app/index";
import { View, StyleSheet } from "react-native";
import { CarroisGothicSC_400Regular, useFonts as useCarroisFonts } from '@expo-google-fonts/carrois-gothic-sc';
import { Poppins_400Regular, Poppins_500Medium, useFonts as usePoppinsFonts } from '@expo-google-fonts/poppins';
import { Syncopate_700Bold, useFonts as useSyncopateFonts } from '@expo-google-fonts/syncopate';
import { background } from "./utils/consts";
import Ritual from "./components/Ritual";

export default function App() {

  const [ carroisLoaded ] = useCarroisFonts({
    CarroisGothicSC_400Regular
  });
  const [ poppinsLoaded ] = usePoppinsFonts({
    Poppins_400Regular, Poppins_500Medium
  });
  const [ syncopateLoaded ] = useSyncopateFonts({
    Syncopate_700Bold
  });

  if (!carroisLoaded || !poppinsLoaded || !syncopateLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Ritual />
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