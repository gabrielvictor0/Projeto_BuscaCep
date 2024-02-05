import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ContainerApp } from './styles';
import { Header } from './src/components/Header/Index';
import { HomeChoice } from './src/screens/HomeChoice/index';



//FONTS
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator } from "@react-navigation/stack"
import { FormCep } from './src/screens/FormCep/index'
import { FormAddress } from './src/screens/FormAddress';

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, fontError] = useFonts({
    Roboto_500Medium, Roboto_700Bold
  });

  if(!fontLoaded && !fontError){
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
          headerShown: false
        }} >
        <Stack.Screen name='Home' component={HomeChoice}></Stack.Screen>
        <Stack.Screen name='FormCep' component={FormCep}></Stack.Screen>
        <Stack.Screen name='FormAddress' component={FormAddress}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // <ContainerApp>
    //   <StatusBar style='auto'/>
    //   <Header/>
    //   <HomeChoice/>
      
    // </ContainerApp>
  );
}
