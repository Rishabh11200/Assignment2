import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

const customFont = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>Hey, These are Custom Fonts...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
  },
  firstText: {
    fontSize: 30,
    fontFamily: 'PlayfairDisplay-VariableFont_wght',
    color: 'black',
  },
});

export default customFont;
