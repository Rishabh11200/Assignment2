import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Flatlist from './Screen/Flatlist';
import customFont from './Screen/customFont';
import practical2 from './Screen/practical2';
import webView from './Screen/webView';
import CalendarPage from './Screen/CalendarPage';
import datePicker from './Screen/datePicker';
import Home from './Home';
import timePicker from './Screen/timePicker';
import imagePicker from './Screen/imagePicker';
import profile from './Screen/profile';

const Stack = createNativeStackNavigator();

const NavigationOfAllScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen
          name="Flatlist"
          component={Flatlist}
          options={{title: 'Flat List'}}
        />
        <Stack.Screen
          name="customFont"
          component={customFont}
          options={{title: 'Custom Fonts'}}
        />
        <Stack.Screen
          name="practical2"
          component={practical2}
          options={{title: 'Users List Practical Assingment'}}
        />
        <Stack.Screen
          name="webview"
          component={webView}
          options={{title: 'Web View'}}
        />
        <Stack.Screen
          name="calendarpage"
          component={CalendarPage}
          options={{title: 'Calendar Picker'}}
        />
        <Stack.Screen
          name="datePicker"
          component={datePicker}
          options={{title: 'Date Picker'}}
        />
        <Stack.Screen
          name="timePicker"
          component={timePicker}
          options={{title: 'Time Picker'}}
        />
        <Stack.Screen
          name="imagePicker"
          component={imagePicker}
          options={{title: 'Image Picker'}}
        />
        <Stack.Screen
          name="profile"
          component={profile}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationOfAllScreen;
