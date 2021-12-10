import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import Spinner from 'react-native-loading-spinner-overlay';

export default class profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passInput: '',
      isEnabled: false,
      errorEmail: false,
      errorPass: false,
      blankCheck: false,
      data: [
        {id: 1, gender: 'Male'},
        {id: 2, gender: 'Female'},
      ],
      checked: 0,
      checkboxSelect1: false,
      checkboxSelect2: false,
      checkboxSelect3: false,
      isLoading: false,
    };
    this.isVisible = this.isVisible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeCheckbox1 = this.onChangeCheckbox1.bind(this);
    this.onChangeCheckbox2 = this.onChangeCheckbox2.bind(this);
    this.onChangeCheckbox3 = this.onChangeCheckbox3.bind(this);
  }
  emailChange = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      this.setState({
        emailInput: text,
        errorEmail: true,
        blankCheck: false,
      });
      return false;
    } else {
      this.setState({
        emailInput: text,
        errorEmail: false,
        blankCheck: false,
      });
    }
  };
  passChange = text => {
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    if (regExp.test(text) === false) {
      this.setState({
        passInput: text,
        errorPass: true,
        blankCheck: false,
      });
      return false;
    } else {
      this.setState({
        passInput: text,
        errorPass: false,
        blankCheck: false,
      });
    }
  };
  isVisible() {
    this.setState({
      isEnabled: !this.state.isEnabled,
    });
  }

  onSubmit = () => {
    if (this.state.emailInput != '' && this.state.passInput != '') {
      this.setState({
        isLoading: true,
        errorPass: false,
        errorEmail: false,
        blankCheck: false,
      });
      setTimeout(() => {
        this.setState({isLoading: false});
        Alert.alert(`Success`);
      }, 3000);
    } else {
      this.setState({blankCheck: true});
      Alert.alert('Fill all the details!');
    }
  };
  onChangeCheckbox1 = () => {
    this.setState({
      checkboxSelect1: !this.state.checkboxSelect1,
    });
  };
  onChangeCheckbox2 = () => {
    this.setState({
      checkboxSelect2: !this.state.checkboxSelect2,
    });
  };
  onChangeCheckbox3 = () => {
    this.setState({
      checkboxSelect3: !this.state.checkboxSelect3,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.profilePage}>
        <Spinner
          visible={this.state.isLoading}
          cancelable={true}
          textContent="Please Wait"
          textStyle={styles.loaderText}
        />
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 12,
            }}>
            <Text style={styles.heading}>
              Hello, {this.props.route.params.username}
            </Text>
            <View
              style={[
                styles.TextInput,
                {
                  borderColor:
                    this.state.errorEmail === true
                      ? 'red'
                      : this.state.blankCheck
                      ? 'red'
                      : 'black',
                },
              ]}>
              <Icon style={styles.icon} name="user" size={20} />
              <TextInput
                style={styles.textInput}
                placeholder={'Enter email'}
                fontSize={20}
                onChangeText={this.emailChange}
                value={this.state.emailInput}
              />
              {this.state.errorEmail === true ? (
                <Icon
                  style={[styles.icon, {color: 'red'}]}
                  name="exclamation-circle"
                  size={20}
                />
              ) : this.state.blankCheck === true ? (
                <Icon
                  style={[styles.icon, {color: 'red'}]}
                  name="exclamation-circle"
                  size={20}
                />
              ) : null}
            </View>
            {this.state.errorEmail === true ? (
              <Text style={styles.errorText}>
                {'\u2B24 Please enter email address in valid format.'}
              </Text>
            ) : null}
            {this.state.blankCheck === true ? (
              <Text style={styles.errorText}>
                {'\u2B24 Please enter email address.'}
              </Text>
            ) : null}
            <View
              style={[
                styles.TextInput,
                {
                  borderColor:
                    this.state.errorPass === true
                      ? 'red'
                      : this.state.blankCheck
                      ? 'red'
                      : 'black',
                },
              ]}>
              <Icon style={styles.icon} name="lock" size={20} />
              <TextInput
                style={styles.textInput}
                placeholder={'Enter password'}
                fontSize={20}
                secureTextEntry={!this.state.isEnabled}
                onChangeText={this.passChange}
                value={this.state.passInput}
              />
              {this.state.errorPass === true ? (
                <Icon
                  style={[styles.icon, {color: 'red'}]}
                  name="exclamation-circle"
                  size={20}
                />
              ) : this.state.blankCheck === true ? (
                <Icon
                  style={[styles.icon, {color: 'red'}]}
                  name="exclamation-circle"
                  size={20}
                />
              ) : null}

              <Icon
                style={styles.icon}
                name={!this.state.isEnabled ? 'eye-slash' : 'eye'}
                size={20}
                onPress={this.isVisible}
              />
            </View>
            {this.state.errorPass === true ? (
              <Text style={styles.errorText}>
                {'\u2B24 Please enter Password in valid format.'}
              </Text>
            ) : null}
            {this.state.blankCheck === true ? (
              <Text style={styles.errorText}>
                {'\u2B24 Please enter password.'}
              </Text>
            ) : null}
            {this.state.data.map((data, key) => {
              return (
                <View style={{marginTop: 20}} key={key}>
                  {this.state.checked == key ? (
                    <TouchableOpacity style={styles.radioBtn}>
                      <Ionicon
                        style={styles.icon}
                        name={'radio-button-on-outline'}
                        size={20}
                      />
                      <Text style={styles.heading}>{data.gender}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.radioBtn}
                      onPress={() => {
                        this.setState({checked: key});
                      }}>
                      <Ionicon
                        style={styles.icon}
                        name={'radio-button-off-outline'}
                        size={20}
                      />
                      <Text style={styles.heading}>{data.gender}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}

            <Text style={[styles.heading, {marginTop: 50}]}>Languages</Text>
            <View style={styles.checkBoxView}>
              <CheckBox
                disabled={false}
                tintColors={{true: 'green', false: 'black'}}
                value={this.state.checkboxSelect1}
                onValueChange={this.onChangeCheckbox1}
              />
              <Text style={styles.label}>Python</Text>
              <CheckBox
                disabled={false}
                tintColors={{true: 'green', false: 'black'}}
                value={this.state.checkboxSelect2}
                onValueChange={this.onChangeCheckbox2}
              />
              <Text style={styles.label}>Java</Text>
              <CheckBox
                disabled={false}
                tintColors={{true: 'green', false: 'black'}}
                value={this.state.checkboxSelect3}
                onValueChange={this.onChangeCheckbox3}
              />
              <Text style={styles.label}>Dart</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
              <Text style={{color: 'white'}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  profilePage: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  TextInput: {
    flexDirection: 'row',
    paddingRight: 10,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    fontSize: 15,
    borderWidth: 3,
    backgroundColor: '#7FFFD4',
  },
  textInput: {
    flex: 1,
    color: 'black',
  },
  icon: {
    marginHorizontal: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  button: {
    marginTop: 30,
    padding: 10,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A2A838',
    borderRadius: 90,
  },

  radioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkBoxView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  label: {
    color: 'black',
    fontSize: 18,
  },
  loaderText: {
    color: 'black',
    fontSize: 30,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
