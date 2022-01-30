import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../src/main/main';
import Login from '../src/login/login';
import CharacterInfo from '../src/character/info';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRootName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="CharacterInfo" component={CharacterInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;