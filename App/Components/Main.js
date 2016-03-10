'use strict';
import React from 'react-native';
let {
	Component,
	View,
	Text,
	StyleSheet
} = React;

const styles = StyleSheet.create({
	mainContent: {
		flex: 1,
		padding: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#3c3c3c'
	}
});
class Main extends Component {
	render(){
		return (
			<View style={styles.mainContent}>
				<Text>The making of a homepage...</Text>
			</View>

		);
	}
}

module.exports = Main;