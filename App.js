/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

//react-navigation imports
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStackScreen from './screens/HomeScreen.js';
import DummyStackScreen from './screens/DummyScreen.js';
import DrawerContent from './screens/DrawerContent.js';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Dummy" component={DummyStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
