import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

function onPressCountryName(item) {
  Alert.alert('You selected:' + item.country + ' country.');
}
const Flatlist = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {country: 'United State'},
          {country: 'Bhutan'},
          {country: 'France'},
          {country: 'India'},
          {country: 'Liberia'},
          {country: 'Vietnam'},
          {country: 'Zambia'},
          {country: 'Saudi Arabia'},
          {country: 'Panama'},
          {country: 'Latvia'},
        ]}
        renderItem={({item}) => (
          <View>
            <TouchableWithoutFeedback onPress={() => onPressCountryName(item)}>
              <Text style={styles.item}>{item.country}</Text>
            </TouchableWithoutFeedback>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 2,
              width: '100%',
              backgroundColor: 'black',
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Flatlist;
