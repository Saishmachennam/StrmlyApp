// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoogleLogin from './src/auth/GoogleLogin';
import BottomNavigator from './src/bottomnavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={GoogleLogin} />
        <Stack.Screen name="Reels" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
