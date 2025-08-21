import Index from "./app/index";
import { CarroisGothicSC_400Regular, useFonts as useCarroisFonts } from '@expo-google-fonts/carrois-gothic-sc';
import { Poppins_400Regular, Poppins_500Medium, useFonts as usePoppinsFonts } from '@expo-google-fonts/poppins';
import { Syncopate_700Bold, useFonts as useSyncopateFonts } from '@expo-google-fonts/syncopate';

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
    <>
      <Index />
    </>
  );
}