/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import Main from './App/Components/Main';

let {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;


const styles = StyleSheet.create({
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
      
        initialRoute={{
          title:'IOS Base App',
          component: Main
        }} />
    );
  }
}


AppRegistry.registerComponent('react_mobile_base', () => react_mobile_base);
