import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View, 
  Image,
  TouchableHighlight,
  TextInput
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux'

import Loading from '../components/Loading';
import Errors from '../components/Error';

export default function SearchCard({ navigation }) {
  const cekloading = useSelector(state => state.isLoading)
  const errorData = useSelector(state => state.error)
  const cards = useSelector(state => state.searchData)
  
  useEffect (() => {
    // dispatch(fetch())
  }, [])
  
  function Item({ card }) {
    return (
      <TouchableHighlight onPress={() => { navigation.navigate('DetailSearchCard',{ card })}}>
        <View style={{margin:10}} >
          <Image
            style={{width:150, height: 200, resizeMode:'contain'}}
            source={{uri: card.card_images[0].image_url}}
          />
            <Text style={styles.title}>{card.name}</Text>
          
        </View>
      </TouchableHighlight>
      
    );
  }

  return (
    <SafeAreaView style={styles.container}>
    <Image 
    style={{width:420, height:150, resizeMode:'cover'}}
    source={{uri: 'https://www.yugioh-world.com/wp-content/uploads/2015/10/tcg_generic_header-672x372.png'}} />
      {
        errorData.error 
        ? 
        <Errors errorsData = {errorData}></Errors>
        :
        cekloading 
        ? 
        <Loading></Loading>
        :
        
        <FlatList
          data={cards}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Item
              card={item}
            />
          )}
          keyExtractor={item => item.id}
          
        />
      }
    </SafeAreaView>
  );
}

SearchCard.navigationOptions = () => ({
  title: 'Search Card'
})

const styles = StyleSheet.create({
  container: {
    flex:2,
    // marginTop: Constants.statusBarHeight,
    backgroundColor: '#F4EFD3'
  },
  title: {
    width: 150,
    textAlign: "center"
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});