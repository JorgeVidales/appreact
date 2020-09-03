import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';
import { white } from 'chalk';

export default class DisplayAnImage extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }

  render() {
    const image = 'https://freesvg.org/img/david-bowie-maze-online-casino-real-money-art.png'
    const name = 'David Bowin'
    const likes = 200
    const comments = 390
    const onPress = () => console.info('Prueba 2');
    return (
      
      
      <View  style={styles.container} >
        
        <View style={styles.artisBox}>
          <Image style={styles.image} source={{ uri: image}}/>
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={onPress}>
                  <Icon size={30}  color='gray' name='heart-outline'></Icon>
                  <Text style={styles.count}>{likes}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={onPress}>
                  <Icon size={30}  color='gray' name='chat-processing-outline'></Icon>
                  <Text style={styles.count}>{comments}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    paddingTop: 50,
  },
  artisBox:{
    backgroundColor: 'white',
    flexDirection: "row"
    
  },
  image:{
    width: 150,
    height: 150,
  },
  info:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name:{
    fontSize: 20,
    marginTop: 10,
  },
  row:{
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: "space-between",
    marginHorizontal: 40,
    marginTop: 10,
  },
  iconContainer:{
    flex: 1,
    alignItems: 'center',
  },
  count:{
    color: 'gray',
  }
 
});