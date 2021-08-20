import 'react-native-gesture-handler';
import React from 'react';
import { View,Text,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from './src/constants/colors';

import LandingScreen from './src/views/screens/LandingScreen';
import NameScreen from './src/views/screens/NameScreen';
import CreateAccountScreen from './src/views/screens/CreateAccountScreen';
import ChooseLanguageScreen from './src/views/screens/ChooseLanguageScreen';
import ChooseLnguageLevelScreen from './src/views/screens/ChooseLnguageLevelScreen';
import ChooseTranslatoinLanguageScreen from './src/views/screens/ChooseTranslationLanguageScreen';
import OnboardingCompleteScreen from './src/views/screens/OnboarginCompleteScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import LoginScreen from './src/views/screens/LoginScreen';
import ForgotPasswordScreen from './src/views/screens/ForgotPasswordScreen';
import PasswordResetSentScreen from './src/views/screens/PasswordResetSentScreen';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.backgroundColor} barStyle="dark-content"/>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={LandingScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="ChooseLanguage" component={ChooseLanguageScreen} />
        <Stack.Screen name="ChooseLnguageLevel" component={ChooseLnguageLevelScreen} />
        <Stack.Screen name="ChooseTranslatoinLanguage" component={ChooseTranslatoinLanguageScreen} />
        <Stack.Screen name="OnboardingComplete" component={OnboardingCompleteScreen} />
        <Stack.Screen name="Playhome" component={BottomNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="PasswordResetSent" component={PasswordResetSentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;