import React from "react";
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

const Loading = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       
      <Image 
        style={{
          width:300,
          height:300
        }}
        source={{uri: "https://gifimage.net/wp-content/uploads/2017/08/yugioh-gif-15.gif" }}
      />
    </View>
  )
}

export default Loading