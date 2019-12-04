import React from "react";
import {
  View, 
  Image,
  Text
} from 'react-native';

const Error = ({errorsData}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize:15}}>ERROR CARD NOT FOUND</Text>
      <Text style={{textAlign:'center'}}>{errorsData.error}</Text>
      <Image 
        style={{
          width:300,
          height:300
        }}
        source={{uri: "https://media2.giphy.com/media/xT9IgtMfKDZJbZ9QGs/giphy.gif" }}
      />

    </View>
  )
}

export default Error