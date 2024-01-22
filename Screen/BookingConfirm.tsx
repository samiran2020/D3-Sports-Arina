import { View, SafeAreaView,Text,StatusBar,ScrollView } from 'react-native'
import React from 'react'
import {Appbar,Avatar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../assets/style'
import BookingConfirmBox from '../component/bookingconfirm/BookingConfirmBox'

const BookingConfirm = () => {
  const navigation = useNavigation()   
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
        <View style={styles.shadow}>  
            <Appbar style={styles.appbar}>
                <View style={{display:'flex',flexDirection:'row',gap:55, justifyContent:'space-between',alignItems:'center'}}>
                    <Appbar.Action icon="arrow-left" onPress={() => navigation.navigate('BookingSummary')} style={{}}/>
                    <View style={{display:'flex',flexDirection:'row',gap:8, justifyContent:'center',alignItems:'center',}}>
                      <Avatar.Image size={49} source={require('../assets/image/avter.png')} style={styles.avtar}/>
                      <Appbar.Content title="Sports Arena" titleStyle={{fontSize:14,fontFamily:'PoppinsSemiBold',margin:0,}} />
                    </View>
                </View>
            </Appbar>
        </View> 
        <ScrollView style={{backgroundColor:"#F3F3F3"}}>
          <View style={{alignItems:'center',justifyContent:'center',paddingVertical:17}}>
            <Text style={{textAlign:'center',color:'#53A53F',fontSize:18,fontFamily:'PoppinsSemiBold',}}>Congrats !!!</Text>
            <Text style={{textAlign:'center',color:'##676767',fontSize:16,fontFamily:'PoppinsRegular',}}>Your Turf has been booked.</Text>
            <Text style={{textAlign:'center',color:'##676767',fontSize:14,fontFamily:'PoppinsRegular',}}>booking ID <Text style={{color:'#53A53F',}}>WPSC420</Text></Text>
          </View>
          <BookingConfirmBox/>
        </ScrollView> 
      
    </SafeAreaView>
  )
}

export default BookingConfirm