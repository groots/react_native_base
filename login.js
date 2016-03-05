'use strict';
import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	TextInput,
	TouchableHightlight,
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
					Login:
				</Text>
				<TextInput style={styles.input} placeholder="Username" />
				<TextInput style={styles.input} placeholder="Password" secureTextEntry="true" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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