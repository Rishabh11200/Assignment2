import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {
  const window = useWindowDimensions();
  const {height, width} = window;
  return (
    <SafeAreaView style={styles.homescreen}>
      <ScrollView>
        <Text
          style={styles.heading(
            width,
          )}>{`Hello, Check the UI Components.`}</Text>
        <TouchableOpacity
          style={styles.button(width)}
          onPress={() => navigation.navigate('Flatlist')}>
          <Text style={styles.text(width)}>List view</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button(width)}
          onPress={() => navigation.navigate('customFont')}>
          <Text style={styles.text(width)}>Custom Fonts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button(width)}
          onPress={() => navigation.navigate('practical2')}>
          <Text style={styles.text(width)}>
            Users list (Practical Assingment)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button(width)}
          onPress={() => navigation.navigate('webview')}>
          <Text style={styles.text(width)}>Web View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button(width)}
          onPress={() => navigation.navigate('calendarpage')}>
          <Text style={styles.text(width)}>Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button(width)}
          onPress={() => navigation.navigate('datePicker')}>
          <Text style={styles.text(width)}>Date Picker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button(width)}
          onPress={() => navigation.navigate('timePicker')}>
          <Text style={styles.text(width)}>Time Picker</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button(width)}
          onPress={() => navigation.navigate('imagePicker')}>
          <Text style={styles.text(width)}>Image Picker</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 5,
  },
  text: width => ({
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  }),
  heading: width => ({
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  }),
  button: width => ({
    marginTop: 10,
    padding: 10,
    marginHorizontal: width / 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD580',
    borderRadius: 90,
  }),
});
export default Home;
