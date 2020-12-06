import React from 'react';
import {View, Text, FlatList} from 'react-native';

//react-navigation imports
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const TeacherListingStack = createStackNavigator();
const TEACHER_DATA = [
    {
        teacherName: "Mr. Kumaishi", 
        teacherEmail: "stuartkumaishi@sccs.net",
        id: "0"
    
    },

    {
        teacherName: "Mr. Amine", 
        teacherEmail: "daddybouchti.net",
        id: "1"
    }
]
function TeacherListing() {
    const renderTeacherItem = ({item}) => (
        <View>
            <Text>
                {item.teacherName}
            </Text>

            <Text>
                {item.teacherEmail}
            </Text>
        </View>
    )
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FlatList
            data = {TEACHER_DATA} 
            renderItem = {renderTeacherItem}
            keyExtractor = {item => item.id}
        />
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
