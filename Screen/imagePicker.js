import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';

const imagePicker = () => {
  const [srcImageGallery, setsrcImageGallery] = useState('');
  const [srcImageCamera, setsrcImageCamera] = useState('');
  const fromGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: false,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setsrcImageGallery(response.assets[0]['uri']);
      }
    });
  };
  const fromCamera = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: false,
    };

    launchCamera(options, response => {
      console.log(response.assets[0]['uri']);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setsrcImageCamera(response.assets[0]['uri']);
      }
    });
  };
  return (
    <SafeAreaView style={styles.imageScreen}>
      <ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => fromGallery()}>
          <Text style={{color: 'white'}}>Open Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => fromCamera()}>
          <Text style={{color: 'white'}}>Open Camera</Text>
        </TouchableOpacity>
        {srcImageGallery != '' && (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={{uri: srcImageGallery}} style={styles.imageStyle} />
          </View>
        )}
        {srcImageCamera != '' && (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={{uri: srcImageCamera}} style={styles.imageStyle} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageScreen: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 5,
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
  imageStyle: {
    margin: 20,
    height: 200,
    width: 200,
    borderColor: 'black',
  },
});

export default imagePicker;
