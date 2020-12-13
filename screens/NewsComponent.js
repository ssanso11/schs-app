import React from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Image, 
  FlatList, 
  StatusBar,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';

//react-navigation imports
import 'react-native-gesture-handler';

const NEWS_DATA = [
  
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
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Back to School Night',
    img_link: 'https://p8cdn4static.sharpschool.com/UserFiles/Servers/Server_223858/Image/BTSN%20Video.Slide.png',
  },
];

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

function NewsComponent({ navigation }) {
  const renderNewsItem = ({ item }) => (
    <NewsItem 
      title={item.title} 
      img_link={item.img_link} 
    />
  );
    return (
      <ScrollView style={{flex: 1, backgroundColor: "#FFF"}}>
      <View style={styles.mediaContainer}>
        <Text style={styles.titleStyle}>All News</Text>
        <FlatList
          data={NEWS_DATA}
          renderItem={renderNewsItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
        
      </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
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
    newsViewTitle: {
      width: 120,
      marginLeft: 10,
      fontSize: 24,
      fontWeight: "600",
      flexWrap: 'wrap'
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
  });

export default NewsComponent;
