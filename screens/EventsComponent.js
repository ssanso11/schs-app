import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Agenda} from 'react-native-calendars';

//react-navigation imports
import 'react-native-gesture-handler';


export default class EventsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {}
    };
  }

  render() {
    return (
      <Agenda
        testID="agenda"
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={Date()}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        theme={{
          dotColor: '#990000',
          selectedDayBackgroundColor: '#990000',
          agendaDayNumColor: '#990000',
          agendaTodayColor: '#990000',
          todayTextColor: '#990000',
          textSectionTitleColor: '#000000',
        }}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'PTA Meeting ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        testID="item"
        style={[styles.item, {height: item.height}]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is an empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});