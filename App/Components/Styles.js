'use strict';

import React from 'react-native';

const {
	StyleSheet 
} = React;

let Styles = StyleSheet.create({
	appWrap: {
		flex: 1
	}, 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000fff',
  },
	button: {
		flex: 1,
		marginTop: 15,
		padding: 10,
		backgroundColor: '#ffffff'
	}, 
	inputText: {
		borderColor: 'white', 
		height: 50, 
		borderWidth: 4
	},
	titleText: {
		fontWeight: '900', 
		color: '#fff',
		fontSize: 26
	}, 
	mainContent: {
		flex: 1,
		padding: 30,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#ff0000'
	}
});

module.exports = Styles;