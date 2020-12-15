import React from 'react';
import {View, ImageBackground, Dimensions} from 'react-native';

let deviceWidth = Dimensions.get('window').width;

//react-navigation imports
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const MapStack = createStackNavigator();

function MapScreen() { 
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <ImageBackground
        style={{width:deviceWidth, aspectRatio:1/1.310626702}}
        source={require('../assets/images/school-map.png')}
        >
              
      </ImageBackground>
    </View>
  );
}

const MapStackScreen = ({navigation}) => (
  <MapStack.Navigator>
    <MapStack.Screen
      name="Home"
      component={MapScreen}
      options={{
        title: 'School Map',
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
  </MapStack.Navigator>
);
export default MapStackScreen;