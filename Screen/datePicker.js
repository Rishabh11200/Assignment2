import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const datePicker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setOpen(Platform.OS === 'ios');
    setDate(currentDate);
  };

  var formattedDate =
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  return (
    <SafeAreaView style={styles.dateScreen}>
      <ScrollView>
        <TouchableOpacity onPress={() => setOpen(true)} style={styles.button}>
          <Text style={styles.text}>Open Date picker</Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {open && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <View style={{marginTop: 40}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {formattedDate}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dateScreen: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  button: {
    marginTop: 10,
    padding: 10,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
    borderRadius: 90,
  },
});

export default datePicker;
