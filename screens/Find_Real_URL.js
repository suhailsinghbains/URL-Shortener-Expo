import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Clipboard
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Find_Real_URL extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    data : ["Orinal URL will be displayed here"],
    text: 'Find Original Url'
  };

  render() {
    Loading ={
      data: "Loading"
    };
    Find_Real_URL = async () => {
      this.setState(Loading)
      Compressed_URL = this.state.text;
      try {
        const response = await fetch('https://murmuring-brushlands-69386.herokuapp.com/find/' + Compressed_URL, {
          method: 'GET'
        });
        const data = await response.json()
        Clipboard.setString(data.data);
        this.setState(data)
      } catch (e) {
      } finally {
      }
    }
    return (
      <View
        style={styles.center}>
          <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}/>
          <Button
            onPress={Find_Real_URL}
            title="Find Orignal"
            color="#841584"
            accessibilityLabel="Find the original URL"
          />
        <Text>{this.state.data.toString()}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    height: 100,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
