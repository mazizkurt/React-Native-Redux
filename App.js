// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';
import HomeScreen from './screens/HomeScreen';
import ReduxScreen from './screens/Redux';
import ListScreen from './screens/ListScreen';

const store = configureStore()


const Stack = createNativeStackNavigator();

function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Redux" component={ReduxScreen} options={{headerTitle:'Notlarım'}}/>
          <Stack.Screen name="List" component={ListScreen} options={{headerTitle:'Listelerim'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

export default App;