import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View, 
  Image,
  ScrollView
} from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Detail = ({navigation}) => {
  const data = navigation.state.params.card
  return (
    <>
    <View style={styles.card}>
      <Image source={{uri: data.card_images[0].image_url}} style={{ height:300, width:400, resizeMode: 'contain', position: 'relative'}} />
      
      <View style= {styles.fontBack}>
        <Text style={styles.font}>{data.name}</Text>
      </View>
    </View>
    <ScrollView>
      <View style={styles.detail}>

        <Text style={{ textAlign: "center", backgroundColor: '#fbe3b9' }}> Description </Text>
        <View style={{ padding: 5, margin: 5, backgroundColor: '#e5dfdf'}}>
          <Text style={{ textAlign: "center" }}>
            {data.desc}
          </Text>
        </View>

          <Text style={{ textAlign: "center", backgroundColor: '#fbe3b9' }}> Detail </Text>
        <View style={{ padding: 5, margin: 5, backgroundColor: '#f4efd3', flexDirection: "row"}}>
          <View style={{width: '50%'}}>
            <Text>
              Level : {data.level} <Ionicons/>
              <Ionicons 
                name = 'md-star'
                size = {
                  15
                }
              />
            </Text>  
            <Text>
              Type : {data.type}
            </Text>
            <Text>
              Attribute : {data.attribute}
            </Text>
          </View>

          <View style={{width: '50%'}}>
            <Text>
              Race : {data.race}
            </Text>
            <Text>
              Attack : {data.atk}  
              <MaterialCommunityIcons
                name = 'sword-cross'
                size = {
                  15
                } 
              />
            </Text>
            <Text>
              Defense : {data.def}
              <MaterialCommunityIcons
                name = 'shield'
                size = {
                  15
                } 
              />
            </Text>
          </View>
        </View>
        
      </View>
      
    </ScrollView>
    </>
  )
  
}

const styles = StyleSheet.create({
  card: {
    height: 300,
  },
  font: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  fontBack: { 
    backgroundColor: '#fbe3b9',
    marginHorizontal: 10,
    position: 'absolute',
    left: 10,
    right:10,
    bottom: 10,
    padding: 5,
    opacity: 0.8,
    borderRadius: 5
  },
  detail: {
    backgroundColor: '#fffdf9',
    padding: 2,
    margin: 2
  }
  
});

Detail.navigationOptions = () => ({
  title: 'Detail Card'
})

export default Detail