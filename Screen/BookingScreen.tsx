import { View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput,ScrollView } from 'react-native'
import React,{useRef, useState} from 'react'
import {Button,TouchableRipple,Appbar, Avatar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../assets/style'
import BookingContent from '../component/bookingScreen/Index'

const BookingScreen = () => {
  const navigation = useNavigation()    
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
        <View style={styles.shadow}>  
            <Appbar style={styles.appbar}>
                <View style={{display:'flex',flexDirection:'row',gap:0, justifyContent:'center',alignItems:'center'}}>
                    <Appbar.Action icon="arrow-left" onPress={() => navigation.navigate('Details')} style={{ marginLeft:'auto'}}/>
                    <Appbar.Content title="Cricket Net With Bowling Machine (Kids)" titleStyle={{fontSize:14,fontFamily:'PoppinsSemiBold',margin:0,}} />
                </View>
            </Appbar>
        </View> 
        <ScrollView>
          <BookingContent/>
        </ScrollView> 
        <View style={styles.floting}>
            <TouchableRipple  onPress={() => navigation.navigate('BookingSummary')} style={styles.flotingbutton} rippleColor="rgba(0, 0, 0, .32)">
                <Text style={styles.buttonText}>Next</Text>
            </TouchableRipple>
        </View>
      
    </SafeAreaView>
  )
}

export default BookingScreen