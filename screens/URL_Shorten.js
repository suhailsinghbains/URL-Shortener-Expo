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
  TextInput
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class URL_Shorten extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    data : ["New URL Here"],
    text: 'WEE'
  };
  render() {
    Loading ={
      data: "Loading"
    };
    New_URL = async () => {
      this.setState(Loading)
      Real_URL = 'New Test';
      URL = 'https://murmuring-brushlands-69386.herokuapp.com'
      try {
        const response = await fetch(URL +
          '/new/'+
          Real_URL, {
            method: 'POST'
        });
        data = await response.json()
        data.data = 'https://murmuring-brushlands-69386.herokuapp.com/' + data.data;
        this.setState(data)
      } catch (e) {
      } finally {
      }
    }
    return (
      <h1>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          value={this.state.text}>
        </TextInput>
        <Button
          onPress={New_URL}
          title="Shorten Me"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{this.state.data.toString()}</Text>
      </h1>
    );
  }
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
