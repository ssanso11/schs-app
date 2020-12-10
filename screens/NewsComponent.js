import React from 'react';
import {View, Text} from 'react-native';

//react-navigation imports
import 'react-native-gesture-handler';


function NewsComponent({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>News Screen</Text>
      </View>
    );
  }

export default NewsComponent;
