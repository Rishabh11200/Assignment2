import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const getTodaysDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return year + '-' + month + '-' + date;
};
const CalendarPage = () => {
  const [text, isSetText] = useState('');
  const onPressDate = date => {
    const {day, month, year} = date;
    isSetText('You selected : ' + day + ' \\ ' + month + ' \\ ' + year);
  };
  return (
    <SafeAreaView style={styles.calendarpage}>
      <ScrollView>
        <Calendar
          style={{marginTop: 30}}
          current={Date(getTodaysDate())}
          minDate={'2000-01-01'}
          maxDate={'2050-12-31'}
          onDayPress={day => {
            onPressDate(day);
          }}
          enableSwipeMonths={true}
        />
        <View style={styles.datePrint}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            {text}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  calendarpage: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  datePrint: {
    justifyContent: 'center',
    paddingTop: 10,
    alignItems: 'center',
  },
});
export default CalendarPage;
