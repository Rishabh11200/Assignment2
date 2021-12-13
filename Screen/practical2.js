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
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class practical2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
    };
  }
  componentDidMount() {
    value = [
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
    this.setState({data: value});
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
  searchText = text => {
    this.setState({name: text});
  };

  onPressSearch = () => {
    const newData = this.state.data.filter(item => {
      const itemData = `${item.uName.toUpperCase()}`;

      const textData = this.state.name.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({data: newData});
  };
  render() {
    const {data} = this.state;
    return (
      <SafeAreaView style={styles.practicalScreen}>
        <View style={styles.staticContainer}>
          <Text style={styles.headingText}>People details</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.searchText}
            placeholder="Search"
            style={styles.textInput}
            textStyle={{color: '#000'}}
            clearButtonMode="always"
          />
        </View>

        <View style={{flex: 1}}>
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
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <KeyboardAvoidingView
            behaviour="position"
            keyboardVerticalOffset={Platform.os === 'ios' ? 64 : 0}>
            <View style={styles.button}>
              <TouchableOpacity onPress={this.onPressSearch}>
                <Icon style={styles.icon} name={'search'} size={20} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
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
    color: 'black',
  },
  item: {
    paddingTop: 30,
    fontSize: 18,
    height: 90,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    marginHorizontal: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  textInput: {
    borderRadius: 25,
    borderColor: '#333',
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
    borderRadius: 100,
  },
});
