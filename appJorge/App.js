import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class DisplayAnImage extends Component {
  render() {
    const image = 'https://freesvg.org/img/david-bowie-maze-online-casino-real-money-art.png'
    const name = 'David Bowin 3'
    const onPress = () => console.info('Prueba 2');
    return (
      
      
      <View  style={styles.container} >
        <TouchableOpacity onPress={onPress}>
        <View style={styles.artisBox}>
          <Image style={styles.image} source={{ uri: image}}/>
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
        </TouchableOpacity>
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
    justifyContent: "center",
    flexDirection: 'row',
  },
  name:{
    fontSize: 20,
    marginTop: 10,
  }
 
});