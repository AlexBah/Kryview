import React from 'react';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';


export default class App extends React.Component {
  state = {
    isFontLoaded:false,
    screenName:'Register',
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
      (this.state.isFontLoaded === true) ? 
      (<AppNavigator screenname={this.state.screenName}/>) : 
      (AppLoading)
    );
  }

}