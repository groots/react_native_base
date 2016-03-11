/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
let Main = require('./App/Components/Main');

let {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;


let styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000fff',
  }
});

class react_mobile_base extends Component {
  render() {
    return (
      <NavigatorIOS
        style={ styles.wrapper }
        initialRoute={{
          component: Main,
          title: 'IOS Base App'
        }} />
    );
  }
}


AppRegistry.registerComponent('react_mobile_base', () => react_mobile_base);
