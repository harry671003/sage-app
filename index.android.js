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
  Image,
  TextInput,
  Navigator,
  StatusBar,
} from 'react-native';

import { BasicApi } from './src/services/basic';

export class DataDisplay extends Component {
  constructor() {
    super();
    this.state = {
      data: 'Loading...'
    };
    this.fetchData();
  }

  async fetchData() {
    const api = new BasicApi();
    try {
      let response = await api.getData();
      let data = await response.json();
      this.setState({ data: data.data })
    }
    catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Text
        style={{color: '#fff', fontSize: 20}}
      >{this.state.data}</Text>
    )
  }
}

export default class SageApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#00eaff"
          hidden={true}
        />
        <DataDisplay/>
        <Image source={require('./assets/images/the-eye.png')} style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312f2c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText:{
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    left: 20,
  },
  body: {
    flex: 1,
    backgroundColor: '#fdf3f4'
  },
  image: {
    height: 150,
    width: 150,
  }
});

AppRegistry.registerComponent('sage', () => SageApp);
