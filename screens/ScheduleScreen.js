import React from 'react';
import {View, Text} from 'react-native';

//react-navigation imports
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const ScheduleStack = createStackNavigator();

function ScheduleScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Schedule Screen</Text>
    </View>
  );
}

const ScheduleStackScreen = ({navigation}) => (
  <ScheduleStack.Navigator>
    <ScheduleStack.Screen
      name="Home"
      component={ScheduleScreen}
      options={{
        title: 'Bell Schedule',
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
  </ScheduleStack.Navigator>
);
export default ScheduleStackScreen;
