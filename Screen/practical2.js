import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from 'react-native';

export default class practical2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    values = [
      {uName: 'Jamari Gould'},
      {uName: 'Adelyn Sutton'},
      {uName: 'Elsa Mckee'},
      {uName: 'Selina Watson'},
      {uName: 'Abraham Barber'},
      {uName: 'Lamont Ware'},
      {uName: 'Alina Zamora'},
      {uName: 'Gordon Humphrey'},
      {uName: 'Cierra Kirby'},
      {uName: 'Antony Beck'},
      {uName: 'Finn Riley'},
      {uName: 'Emmy Parrish'},
      {uName: 'Ezekiel Knight'},
      {uName: 'Mathias Clay'},
      {uName: 'Jessica Phelps'},
      {uName: 'Kaden Welch'},
      {uName: 'Carla Gentry'},
      {uName: 'Kamryn Norris'},
      {uName: 'Russell Bennett'},
      {uName: 'Oswaldo Grimes'},
    ];
    this.setState({data: values});
  }

  onPressUserName(item) {
    var name = item.uName;
    this.props.navigation.navigate('profile', {username: name});
    ToastAndroid.showWithGravity(
      'Your name is ' + name + '.',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }
  render() {
    const {data} = this.state;
    return (
      <SafeAreaView style={styles.practicalScreen}>
        <View style={styles.staticContainer}>
          <Text style={styles.headingText}>People details</Text>
        </View>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity onPress={() => this.onPressUserName(item)}>
                  <Text style={styles.item}>{item.uName}</Text>
                </TouchableOpacity>
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
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  practicalScreen: {
    flex: 1,
    margin: 10,
  },
  staticContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    paddingTop: 30,
    fontSize: 18,
    height: 90,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});
