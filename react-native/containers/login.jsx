import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View, 
  Image, 
  Button,
  ImageBackground
} from 'react-native';

const login = ({navigation}) => {
  return (
    <ImageBackground style= { styles.bg } source={{uri: "https://i.pinimg.com/originals/65/38/f3/6538f35da5414f7ea642f7e5a8fe10f3.jpg"}}>
      <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ flex: 1 , width: 300, justifyContent: 'center'}}>
          <Button
            title = 'Masuk'
            color = 'black'
            onPress = {
              () => navigation.navigate('Home')
            }
          />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})



export default login
