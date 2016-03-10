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
		marginTop: 65,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	whiteText: {
		color: '#fff'
	}
});
class Main extends Component {
	render(){
		return (
			<View style={styles.mainContent}>
				<Text style={styles.whiteText}>The making of a homepage...</Text>
			</View>

		);
	}
}

module.exports = Main;