import { View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput,ScrollView } from 'react-native'
import React,{useRef, useState} from 'react'
import {Button,TouchableRipple,Appbar, Avatar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../assets/style'
import SlotTime from '../component/bookingScreen/SlotTime'
import TempletOne from '../component/listbox/TempletOne'

const { width } = Dimensions.get('window');
const resWidth = 360;
const { width: screenWidth } = Dimensions.get('window');



const BookingTab = () => {
  const navigation = useNavigation()  
  const slottime = [
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
    {time:'12:00 - 01:00 '},
    {time:'01:00 - 01:00 '},
];   

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
                  <View style={{display:'flex',flexDirection:'row',gap:0, justifyContent:'center',alignItems:'center'}}>
                      <Appbar.Content title="Booking" titleStyle={{fontSize:14,fontFamily:'PoppinsSemiBold',marginLeft:8,}} />
                  </View>
                  <View style={{ marginLeft:'auto', display:'flex',flexDirection:'row',gap:0, justifyContent:'center',alignItems:'center'}}>
                    <Appbar.Action icon="heart-outline" style={{marginHorizontal:0}}/>
                    <Appbar.Action icon="bell-outline" style={{marginHorizontal:0}}/>
                    <Appbar.Action icon="tune" style={{marginHorizontal:0}}/>
                  </View>
              </Appbar>
          </View>
          <ScrollView>
            <View style={styles.slotsection}>
              <Text style={{fontSize:14,color:'#000',fontFamily:'PoppinsSemiBold',marginBottom:8,lineHeight:19}}>Booked Slots <Text style={{color:'#53A53F'}}>(0)</Text>
              </Text>
              <View style={{flexDirection:'row',gap:5}}>
                <Text style={styles.slotlist}>Morning</Text>
                <Text style={styles.slotlist}>Afternoon</Text>
                <Text style={styles.slotlist}>Evening</Text>
              </View>
            </View>
            <View style={[styles.verticalalign, styles.center]}>
                <View style={styles.bookingstatus}>
                  <Text style={styles.statustext}><View style={[styles.available]}></View> Available</Text>
                  <Text style={styles.statustext}><View style={[styles.booked]}></View> Booked</Text>
                </View>
                <SlotTime data={slottime}/>
            </View>
            <View style={{marginTop:38}}>
              <TempletOne data={listingbox}/>
            </View>
        </ScrollView>
    </SafeAreaView>    
  )
}



export default BookingTab