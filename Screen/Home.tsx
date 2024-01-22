import { View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput,ScrollView } from 'react-native'
import React,{useRef, useState} from 'react'
import {Button,TouchableRipple,Appbar, Avatar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../assets/style'

import Catagory from '../component/catagorybox/CatagorySection'
import Slider from '../component/carousel'
import TempletOne from '../component/listbox/TempletOne'
import ListHeader from '../component/listheader/ListHeader'

const { width } = Dimensions.get('window');
const resWidth = 360;
const { width: screenWidth } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation()  
  const listingbox = [
    {
      uri:require('../assets/image/listing-box.webp'),
        title:'The Legends Turf XL',
        subtitle:'Box Cricket, Football',
        price:'₹800',
        hour:'/hr'
    },
    {
      uri:require('../assets/image/listing-box.webp'),
      title:'The Legends Turf XL',
      subtitle:'Box Cricket, Football',
      price:'₹600',
      hour:'/hr'
    },
    {
      uri:require('../assets/image/listing-box.webp'),
      title:'The Legends Turf XL',
      subtitle:'Box Cricket, Football',
      price:'₹400',
      hour:'/hr'
    },

  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
      <View style={styles.shadow}>
        <Appbar style={styles.appbar}>
            <View style={{display:'flex',flexDirection:'row',gap:8, justifyContent:'center',alignItems:'center'}}>
              <Avatar.Image size={49} source={require('../assets/image/avter.png')} style={styles.avtar}/>
              <Appbar.Content title="Sports Arena" titleStyle={{fontSize:14,fontFamily:'PoppinsSemiBold',margin:0,}} />
            </View>
            <Appbar.Action icon="heart-outline" style={{ marginLeft:'auto', marginRight:70}}/>
            <Appbar.Action icon="bell-outline" style={{ marginLeft:'auto'}}/>
        </Appbar>
      </View>
      <ScrollView>
        <Slider/>
        <Catagory/>
        <View>
            <ListHeader title='Recommended'/>
            <TempletOne data={listingbox}/>
        </View>
      </ScrollView>
    </SafeAreaView>    
  )
}



export default Home