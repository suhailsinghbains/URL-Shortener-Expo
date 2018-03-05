import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    data : []
  };
 componentWillMount = async () => {
   try {
     const response = await fetch('https://murmuring-brushlands-69386.herokuapp.com/find/1', {
       method: 'GET'
     });
     const data = await response.json()
     this.setState(data)
   } catch (e) {
   } finally {
   }
 }

  render() {
    return (
      <View style={styles.center}>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
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
