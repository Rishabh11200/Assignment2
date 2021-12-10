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

const timePicker = () => {
  const [time, setTime] = useState(new Date());
  const [timeText, setTimeText] = useState('');
  const [open, setOpen] = useState(false);

  const onChange = (event, selectedTime) => {
    setOpen(Platform.OS === 'ios');
    const totalTime = new Date(selectedTime);
    var tempHour = totalTime.getHours();
    var min = totalTime.getMinutes();
    var sec = totalTime.getSeconds();
    var suffix = tempHour >= 12 ? 'PM' : 'AM';
    var hours = ((tempHour + 11) % 12) + 1;
    setTimeText('Time :-   ' + hours + ':' + min + ':' + sec + ' ' + suffix);
  };

  return (
    <SafeAreaView style={styles.timeScreen}>
      <ScrollView>
        <TouchableOpacity onPress={() => setOpen(true)} style={styles.button}>
          <Text style={styles.text}>Open Time picker</Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {open && (
            <DateTimePicker
              testID="dateTimePicker"
              value={time}
              mode="time"
              is24Hour={false}
              display="clock"
              onChange={onChange}
            />
          )}
          <View style={{marginTop: 40}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {timeText}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  timeScreen: {
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

export default timePicker;
