import React from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Image, 
  FlatList, 
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Alert,
  ImageBackground
} from 'react-native';

//react-navigation imports
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
//component imports
import EventsComponent from './EventsComponent.js';
import NewsComponent from './NewsComponent.js';


// Uppercase when declaring static constants (this is static data)
const NEWS_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Zoom Help Room',
    img_link: 'http://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_223858/Image/Main%20Office_%20Zoom%20Link.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Library Tutoring',
    img_link: 'http://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_223858/Image/Corrected%20Principal%20&%20Parent_Guardian%20Meeting%20Slide%20(2).jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Zoom Help Room',
    img_link: 'http://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_223858/Image/Main%20Office_%20Zoom%20Link.jpg',
  },
];

const UPCOMING_EVENTS_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'PTA Meeting',
    month: 'Nov', 
    day: '14',
    time: '8:30am-9:30am'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Boardwalk Drive-in Movie',
    month: 'Nov', 
    day: '14',
    time: '8:30am-9:30am'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'PTA Meeting',
    month: 'Nov', 
    day: '14',
    time: '8:30am-9:30am'
  },
];

//kind of works like a stack
const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Santa Cruz High',
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
    <HomeStack.Screen 
      name="Events" 
      component={EventsComponent} 
      options={{
        title: 'Events',
        headerStyle: {
          backgroundColor: '#990000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Helvetica Neue',
          fontSize: 20,
        },
      }}
    />
     <HomeStack.Screen 
      name="News" 
      component={NewsComponent} 
      options={{
        title: 'News',
        headerStyle: {
          backgroundColor: '#990000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Helvetica Neue',
          fontSize: 20,
        },
      }}
    />
  </HomeStack.Navigator>
);



const UpcomingEventsItem = ({ title, month, day, time }) => (
  <View style={styles.eventsItem}>
    <View>
      <View style={styles.dateContainer}>
        <Text >{month}</Text>
        <Text>{day}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.eventsViewTitle}>{title}</Text>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  </View>
);

const NewsItem = ({ title, img_link}) => (
  <View style={styles.newsItem}>
    <View>
      <Image 
        style={styles.newsImage}
        source={{
          uri: img_link,
        }}
      />
    </View>
    <View style={{justifyContent: "center"}}>
      <Text style={styles.newsViewTitle}>{title}</Text>
      <TouchableOpacity
          onPress={() => Alert.alert('Open read more')}
          style={styles.readMoreButton}
        >
          <Text style={styles.viewEventsText}>Read more ></Text> 
        </TouchableOpacity>
    </View>
  </View>
);
// This is the home screen view component. Here we will style the home page, 
// including the Upcoming Events section and the News section
function HomeScreen({navigation}) {
  const renderUpcomingEventsItem = ({ item }) => (
    <UpcomingEventsItem 
      title={item.title}
      month={item.month}
      day={item.day}
      time={item.time}
    />
  );

  const renderNewsItem = ({ item }) => (
    <NewsItem 
      title={item.title} 
      img_link={item.img_link} 
    />
  );
  return (
    <ScrollView style={{flex: 1, backgroundColor: "#FFF"}}>
      <ImageBackground source={require('../assets/images/school-front-entrance.png')} style={styles.frontEntrancePicture} blurRadius={5}>
        <View style={{position: 'absolute', top:0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: "center"}}>
          <Text style={{ color: "#FFF", fontSize: 30, fontWeight: "700", letterSpacing: .3}}>Go Cardinals!</Text>
        </View>
      </ImageBackground>
      <View style={styles.mediaContainer}>
        <Text style={styles.titleStyle}>Upcoming Events</Text>
        <FlatList
          data={UPCOMING_EVENTS_DATA}
          renderItem={renderUpcomingEventsItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Events")}
          style={styles.viewEventsButton}
        >
          <Text style={styles.viewEventsText}>View all events ></Text> 
        </TouchableOpacity>
      </View>
      <View style={styles.mediaContainer}>
        <Text style={styles.titleStyle}>News</Text>
        <FlatList
          data={NEWS_DATA}
          renderItem={renderNewsItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("News")}
          style={styles.viewEventsButton}
        >
          <Text style={styles.viewEventsText}>View all news ></Text> 
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  frontEntrancePicture: {
    width: "100%",
    height: 122.5,
    resizeMode: 'contain',
  },
  eventsItem: {
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row"
  },
  newsItem: {
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    shadowColor: "#AAA",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: .3,
    marginTop: 5,
    marginLeft: 15
  },
  mediaContainer: {
    margin: 10,
  },
  eventsViewTitle: {
    fontSize: 24,
    fontWeight: "600",
    flexWrap: 'wrap'
  },
  newsViewTitle: {
    width: 120,
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "600",
    flexWrap: 'wrap'
  },
  viewEventsButton: {
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 20,
  },
  readMoreButton: {
    marginLeft: 10,
  },
  viewEventsText: {
    fontSize: 18,
    textDecorationLine: 'underline'
  },
  newsImage: {
    height: 200,
    width: 220,
    marginLeft: 5
  },
  dateContainer: {
    backgroundColor: "#EEE",
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    marginRight: 10,
    marginTop: 7,
    borderWidth: 1,
    borderColor: "#BBB",
    borderRadius: 5,
  },
  timeText: {
    fontWeight: "400",
    fontSize: 18
  }
});

export default HomeStackScreen;