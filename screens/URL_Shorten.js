import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  Clipboard
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class URL_Shorten extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    data : ["New URL will be displayed here"],
    text: 'Enter Url here'
  };
  render() {
    Loading ={
      data: "Loading"
    };
    New_URL = async () => {
      this.setState(Loading)
      Real_URL = this.state.text;
      URL = 'https://murmuring-brushlands-69386.herokuapp.com'
      try {
        const response = await fetch(URL +
          '/new/'+
          Real_URL, {
            method: 'POST'
        });
        data = await response.json()
        data.data = 'https://murmuring-brushlands-69386.herokuapp.com/' + data.data;
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
            onPress={New_URL}
            title="Shorten Me"
            color="#841584"
            accessibilityLabel="Press the button to Shorten URL"
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
