import StatusBar from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

export default class App extends React.Component {
  state = {
    isFontLoaded:false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.ttf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.ttf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.ttf'),
    });
    this.setState({isFontLoaded:true})
  }

  render(){
    return (
      (this.state.isFontLoaded === true) ? (<AppNavigator/>):(AppLoading)
    );
  }

}