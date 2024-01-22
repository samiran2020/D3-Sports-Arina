import { View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput,ScrollView ,TouchableOpacity} from 'react-native'
import React,{useRef, useState} from 'react'
import {Button,TouchableRipple,Appbar, Avatar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../assets/style'

const CancellationPolicy = () => {
  const navigation = useNavigation()   
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
        <View style={styles.shadow}>  
            <Appbar style={styles.appbar}>
                <View style={{display:'flex',flexDirection:'row',gap:0, justifyContent:'center',alignItems:'center'}}>
                    <Appbar.Action icon="arrow-left" onPress={() => navigation.navigate('BookingSummary')} style={{ marginLeft:'auto'}}/>
                    <Appbar.Content title="Cancellation Policy" titleStyle={{fontSize:14,fontFamily:'PoppinsSemiBold',margin:0,}} />
                </View>
            </Appbar>
        </View> 
        <ScrollView>
          <View style={{paddingHorizontal:25, paddingVertical:35}}>
            <Text style={{paddingBottom:15,fontFamily:'PoppinsRegular',fontSize:14,lineHeight:23, color:'#000'}}>f you cancel this booking will get full amount.</Text>
            <Text style={{paddingBottom:15,fontFamily:'PoppinsRegular',fontSize:14,lineHeight:23, color:'#000'}}>3% of the booking amount will be charge as bank charge, in  addition to the cancellation charge mentioned above.
            Book your slot reserves the right to change the cancellation policy without any prior notice.</Text>
          </View>
        </ScrollView> 

      
    </SafeAreaView>
  )
}

export default CancellationPolicy