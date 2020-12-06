import React from 'react';
import {View, Text} from 'react-native';

//react-navigation imports
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const TeacherListingStack = createStackNavigator();

function TeacherListing() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Teacher List</Text>
    </View>
  );
}

const TeacherListingScreen = ({navigation}) => (
  <TeacherListingStack.Navigator>
    <TeacherListingStack.Screen
      name="Home"
      component={TeacherListing}
      options={{
        title: 'Teacher List',
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
  </TeacherListingStack.Navigator>
);
export default TeacherListingScreen;
