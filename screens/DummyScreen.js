import React from 'react';
import {View, Text} from 'react-native';

//react-navigation imports
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const DummyStack = createStackNavigator();

function DummyScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Dummy Screen</Text>
    </View>
  );
}

const DummyStackScreen = ({navigation}) => (
  <DummyStack.Navigator>
    <DummyStack.Screen
      name="Home"
      component={DummyScreen}
      options={{
        title: 'School Feed',
        headerStyle: {
          backgroundColor: '#990000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Helvetica Neue',
          fontSize: 20,
        },
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            onPress={() => navigation.openDrawer()}
            backgroundColor="#990000"
          />
        ),
      }}
    />
  </DummyStack.Navigator>
);
export default DummyStackScreen;
