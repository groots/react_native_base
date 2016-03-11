'use strict';
import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	TextInput,
	TouchableNativeFeedback,
	View
} from 'react-native';

class Login extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={styles.container}>
				<Text>
					App Login
				</Text>
				<TextInput
		          ref="input"
		          autoCapitalize="none"
		          autoCorrect={false}
		          autoFocus={true}
		          onChange={this.props.onSearchChange}
		          placeholder="Search a movie..."
		          placeholderTextColor="rgba(255, 255, 255, 0.5)"
		          onFocus={this.props.onFocus}
		          style={styles.searchBarInput}
		        />
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Login;