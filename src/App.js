import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/UserScreens/HomeScreen';
import DetailsScreen from './screens/UserScreens/DetailsScreen';
import IntroScreen from './screens/WalkthroughScreens/IntroScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          options={{
            headerShown: false,
          }}
          component={DetailsScreen}
        />
        <Stack.Screen
          name="Intro"
          options={{
            headerShown: false,
          }}
          component={IntroScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
