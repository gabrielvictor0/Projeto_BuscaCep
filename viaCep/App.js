import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ContainerApp } from './styles';
import { Header } from './src/components/Header/Index';
import { Home } from './src/screens/HomeForm/index';


//FONTS
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';



export default function App() {
  const [fontLoaded, fontError] = useFonts({
    Roboto_500Medium, Roboto_700Bold
  });

  if(!fontLoaded && !fontError){
    return null;
  }
  return (
    <ContainerApp>
      <StatusBar style='auto'/>
      <Header/>
      <Home/>
    </ContainerApp>
  );
}
