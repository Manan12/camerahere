/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import Camera from 'react-native-camera';

export default class camerahere extends Component {
  clickkedme(){
    alert("was clicked");
  }
  render() {
    return (
      <View style={styles.container}>
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>

        <TouchableHighlight onPress={this.clickkedme.bind(this)}>
          <View style={{ borderRadius: 15}}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>CAPTURE</Text>
          </View>
        </TouchableHighlight>
        </Camera>
      </View>


    );
  }
  takePicture() {
const options = {};
//options.location = ...
this.camera.capture({metadata: options})
  .then((data) => console.log(data))
  .catch(err => console.error(err));
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('camerahere', () => camerahere);
