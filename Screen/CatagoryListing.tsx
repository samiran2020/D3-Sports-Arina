import { View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput,ScrollView } from 'react-native'
import React,{useRef, useState} from 'react'
import {Button,TouchableRipple,Appbar, Avatar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../assets/style'
import TempletTwo from '../component/listbox/TempletTwo'
import CatagoryItem from '../component/catagorybox/CatagoryItem'
import AutoCarosul from '../component/carousel/AutoCarosul'


const { width } = Dimensions.get('window');
const resWidth = 360;
const { width: screenWidth } = Dimensions.get('window');

const CatagoryListing = () => {
    const listingbox = [
        {
            uri:require('../assets/image/list-box2.webp'),
            title:'Box Cricket',
            subtitle:'Half Ground50ft x 90ft',
            price:'₹800',
            hour:'/hr'
        },
        {
            uri:require('../assets/image/list-box2.webp'),
            title:'Cricket Net Without Bowling Machine',
            subtitle:'Full Ground100ft x 90ft, With Lights',
            price:'₹1600',
            hour:'/hr'
        },
        {
            uri:require('../assets/image/list-box2.webp'),
            title:'Cricket Net With Bowling Machine (Kids)',
            subtitle:'New Ground70ft x 110ft',
            price:'₹800',
            hour:'/hr'
        },
        {
            uri:require('../assets/image/list-box2.webp'),
            title:'Box Cricket',
            subtitle:'Half Ground50ft x 90ft',
            price:'₹800',
            hour:'/hr'
        },
        {
            uri:require('../assets/image/list-box2.webp'),
            title:'Cricket Net Without Bowling Machine',
            subtitle:'Full Ground100ft x 90ft, With Lights',
            price:'₹1600',
            hour:'/hr'
        },

    ];   
  const navigation = useNavigation()  
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
        <View style={styles.shadow}>  
            <Appbar style={styles.appbar}>
                <View style={{display:'flex',flexDirection:'row',gap:0, justifyContent:'center',alignItems:'center'}}>
                    <Appbar.Action icon="arrow-left" style={{ marginLeft:'auto'}} onPress={() => navigation.navigate('Home')}/>
                    <Appbar.Content title="Cricket" titleStyle={{fontSize:14,fontFamily:'PoppinsSemiBold',margin:0,}} />
                </View>
                <Appbar.Action icon="heart-outline" style={{ marginLeft:'auto', marginRight:70}}/>
                <Appbar.Action icon="tune" style={{ marginLeft:'auto'}}/>
            </Appbar>
        </View>
        <ScrollView>
            <CatagoryItem/>
            <TempletTwo  data={listingbox}/>
        </ScrollView>
    </SafeAreaView>    
  )
}



export default CatagoryListing