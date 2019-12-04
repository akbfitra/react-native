import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View, 
  Image,
  TextInput
} from 'react-native';
import Constants from 'expo-constants';

import {useSelector, useDispatch} from 'react-redux'
import { fetchsearch } from '../store/actions'
import {resetData} from '../store/actions'

const Search = ({navigation}) => {
  const dispatch = useDispatch()
  const [value, onChangeText] = useState('');

  const toSearch = () => {
    dispatch(resetData())
    dispatch(fetchsearch(value))
    navigation.navigate('SearchCard')
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image 
          style={{width:420, height:150, resizeMode:'cover'}}
          source={{uri: 'https://www.yugioh-world.com/wp-content/uploads/2015/10/tcg_generic_header-672x372.png'}} 
        />
        <Text style={{fontSize: 20}}>Search Card Yugioh</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderRadius: 5 , borderWidth: 1, marginTop:20, width: 400 }}
          onChangeText={text => onChangeText(text)}
          onSubmitEditing={ () => toSearch() }
          value={value}
        />
        
        <Image 
          style={{
            width:300,
            height:300,
            marginTop:20
          }}
          source={{uri: "https://media1.tenor.com/images/5714894d15f31520c310a155482eb1fd/tenor.gif?itemid=5546146" }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:2,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#F4EFD3'
  },
})

export default Search