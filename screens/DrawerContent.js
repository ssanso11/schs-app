import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function DrawerContent(props) {
  return (
    <View style={{flex: 1, backgroundColor: '#990000'}}>
      <DrawerContentScrollView>
        <View>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Image
              source={require('../assets/images/cardinallogo.png')}
              style={styles.cardinalImage}
            />
            <View
              style={{marginLeft: 15, flexDirection: 'column', paddingTop: 10}}>
              <Text style={styles.titleText}>Santa Cruz</Text>
              <Text style={styles.titleText}>High School</Text>
            </View>
          </View>
          <View style={styles.lineStyle} />

          <View style={styles.drawerSection}>
            <DrawerItem
              labelStyle={{
                color: '#eff0f1',
                fontWeight: '600',
                fontFamily: 'Helvetica Neue',
                fontSize: 16,
              }}
              icon={({_, size}) => (
                <Icon name="home-outline" color="#eff0f1" size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              labelStyle={{
                color: '#eff0f1',
                fontWeight: '600',
                fontFamily: 'Helvetica Neue',
                fontSize: 16,
              }}
              icon={({_, size}) => (
                <Icon name="bookmark-outline" color="#eff0f1" size={size} />
              )}
              label="Dummy"
              onPress={() => {
                props.navigation.navigate('Dummy');
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardinalImage: {
    width: 70,
    height: 70,
    marginLeft: 10,
  },
  drawerSection: {
    paddingTop: 15,
    paddingLeft: 30,
    // backgroundColor: '#AA0000',
    // height: '100%',
    // flexGrow: 1,
  },
  titleText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
  lineStyle: {
    borderWidth: 0.4,
    borderColor: '#d8d8db',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
  },
});

export default DrawerContent;
