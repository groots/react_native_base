'use strict';
import React from 'react-native';
import Styles from './Styles';
import Search from './Search';
let {
	Component,
	View,
	Text,
	StyleSheet
} = React;

class Main extends Component {
	render(){
		return (
			<View style={Styles.mainContent}>
				<Search />
				<Text style={ Styles.titleText }>The making of a homepage...</Text>
			</View>

		);
	}
}

module.exports = Main;