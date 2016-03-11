'use strict';
import React from 'react-native';
let {
	Component,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View,
	ActivityIndicatorIOS
} = React;

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchTerm: '',
			isLoading: false,
			error: false
		}
	}
	handleSearch(event){
		this.setState({
			searchTerm: event.nativeEvent.text
		});
		console.log('SEARCH Changed');
	}
	handleSubmit(){
		this.setState({
			isLoading: true
		});
		console.log('Form Sumitted', this.state.searchTerm);
	}
	render() {
		return (
			<View>
				<Text>Search</Text>
				<TextInput
					value={this.state.searchTerm}
					onChange={this.handleSearch.bind(this)} />
				<TouchableHighlight>
					<Text>Click HERE</Text>
					</TouchableHighlight>
			</View>
		);
	}
}

module.exports = Search;