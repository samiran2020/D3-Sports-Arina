import { View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput,ScrollView ,TouchableOpacity,} from 'react-native'
import React,{useRef, useState} from 'react'
import {Button,TouchableRipple,Appbar, Avatar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../assets/style'
import CouponCard from '../component/coupon/CouponCard'
const Coupons = (props: any) => {
  const navigation = useNavigation()   
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
        <View style={styles.shadow}>  
            <Appbar style={styles.appbar}>
                <View style={{display:'flex',flexDirection:'row',gap:0, justifyContent:'center',alignItems:'center'}}>
                    <Appbar.Action icon="arrow-left" onPress={() => navigation.navigate('BookingSummary')} style={{ marginLeft:'auto'}}/>
                    <Appbar.Content title="Coupons" titleStyle={{fontSize:14,fontFamily:'PoppinsSemiBold',margin:0,}} />
                </View>
            </Appbar>
        </View> 
        <ScrollView>
          <View style={{paddingVertical:35,paddingHorizontal:25}}>
            <View>
              <CouponCard style={[styles.red,styles.color,]}/>
            </View>
            
          </View>
        </ScrollView> 

      
    </SafeAreaView>
  )
}

export default Coupons