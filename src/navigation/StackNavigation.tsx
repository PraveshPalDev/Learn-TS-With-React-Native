import React, {JSX} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';
import ContextScreen from '../screens/ContextScreen';

export type RootStackParamList = {
  Home: undefined;
  Settings: {
    email: string;
    name: string;
  };
  Context: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Context" component={ContextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
