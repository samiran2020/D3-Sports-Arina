import { View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput,ScrollView ,TouchableOpacity,} from 'react-native'
import React,{useRef, useState} from 'react'
import {Button,TouchableRipple,Appbar, Avatar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../assets/style'
import BigButton from '../component/bookingsummary/BigButton'
import SummeryDetails from '../component/bookingsummary/SummaryDetails'

const BookingSummary = () => {
  const navigation = useNavigation()   
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
        <View style={styles.shadow}>  
            <Appbar style={styles.appbar}>
                <View style={{display:'flex',flexDirection:'row',gap:0, justifyContent:'center',alignItems:'center'}}>
                    <Appbar.Action icon="arrow-left" onPress={() => navigation.navigate('BookingScreen')} style={{ marginLeft:'auto'}}/>
                    <Appbar.Content title="Booking Summary" titleStyle={{fontSize:14,fontFamily:'PoppinsSemiBold',margin:0,}} />
                </View>
            </Appbar>
        </View> 
        <ScrollView>
          <SummeryDetails/>
          <View style={{paddingBottom:80}}>
            <TouchableOpacity onPress={() => navigation.navigate('Coupons')}>
              <BigButton iconname="ticket-percent-outline" title='Apply Coupon' subtitle='Apply coupon get discount'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CancellationPolicy')}>
              <BigButton title='View Cancellation Policy' subtitle='Cancellation & things to remember' />
            </TouchableOpacity>
          </View>
        </ScrollView> 
        <View style={styles.floting}>
            <TouchableRipple  onPress={() => navigation.navigate('BookingConfirm')} style={styles.flotingbutton} rippleColor="rgba(0, 0, 0, .32)">
                <Text style={styles.buttonText}>Pay ₹800.00</Text>
            </TouchableRipple>
        </View>
      
    </SafeAreaView>
  )
}

export default BookingSummary