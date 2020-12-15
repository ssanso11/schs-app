import React from 'react';
import {View, Text, FlatList} from 'react-native';

//react-navigation imports
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const TeacherListingStack = createStackNavigator();
const TEACHER_DATA = [
    {
        teacherName: "Adams, Larissa", 
        teacherSubject: "Social Studies",
        id: "0"
    
    },

    {
        teacherName: "Aldo, Rueben", 
        teacherSubject: "RSP",
        id: "1"
    },

    {
        teacherName: "Anopolsky, Adam", 
        teacherSubject: "RSP",
        id: "3"
    },

    {
        teacherName: "Andrews, Kelly", 
        teacherSubject: "Physical Education",
        id: "4"
    },

    {
        teacherName: "Arnold, Steve", 
        teacherSubject: "Campus Supervisor",
        id: "5"
    },

    {
        teacherName: "Bacon, Nick", 
        teacherSubject: "English",
        id: "6"
    },

    {
        teacherName: "Barret, Annie", 
        teacherSubject: "Physical Education",
        id: "7"
    },

    {
        teacherName: "Behr, Lindsay", 
        teacherSubject: "Fine Arts",
        id: "8"
    },

    {
        teacherName: "Block, Mistyn", 
        teacherSubject: "Resource Specialist",
        id: "9"
    },

    {
        teacherName: "Boscacci, Peter", 
        teacherSubject: "C.T.E",
        id: "10"
    },

    {
        teacherName: "Bouchti, Amine", 
        teacherSubject: "Mathematics, Computer Science",
        id: "11"
    },

    {
        teacherName: "Helena, Bradford", 
        teacherSubject: "English",
        id: "12"
    },

    {
        teacherName: "Brown, Jeanie", 
        teacherSubject: "Account Technician",
        id: "13"
    },

    {
        teacherName: "Buckley, Trevor", 
        teacherSubject: "Associate Mental Health Specialist",
        id: "14"
    },

    {
        teacherName: "Byrd, Sierra", 
        teacherSubject: "Library Media Assistant",
        id: "15"
    },

]
function TeacherListing() {
    const renderTeacherItem = ({item}) => (
        <View>
            <Text>
                {item.teacherName}
            </Text>

            <Text>
                {item.teacherSubject}
            </Text>

            <Text>
                {}
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
