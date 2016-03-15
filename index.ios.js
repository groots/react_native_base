/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React  from 'react-native';
import Main   from './App/Components/Main';
import Styles from './App/Components/Styles';

let {
  AppRegistry,
  Component,
  Text,
  View,
  NavigatorIOS
} = React;

class react_mobile_base extends Component {
  render() {
    return (    
        <NavigatorIOS
          style={ Styles.appWrap }
          initialRoute={{
            component: Main,
            title: 'IOS Base App'
          }} />
    );
  }
}


AppRegistry.registerComponent('react_mobile_base', () => react_mobile_base);
