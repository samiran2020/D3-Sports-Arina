import {  View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput,ScrollView  } from 'react-native'
import React from 'react'
import AutoCarosul from '../component/carousel/AutoCarosul'
import styles from '../assets/style'
import {Button,TouchableRipple,Appbar, Avatar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import DetailsContent from '../component/detailspage/Index'
import IconButton from '../component/IconButton/IconButton'


const Details = (props: any) => {
  const navigation = useNavigation()     
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <StatusBar  backgroundColor="rgba(0, 0, 0, 0.46)" translucent={true} barStyle="light-content"/>
            <View style={{position:'relative'}}>
              <View style={{position:'absolute', width:'100%',top:35, left:0,paddingHorizontal:15,zIndex:1}}>
                <View style={styles.verticalalignbetwen}>
                  <TouchableRipple style={{backgroundColor:'rgba(83, 165, 63, 0.73)',borderRadius:6,}} onPress={() => navigation.navigate('CatagoryListing')}>
                      <IconButton iconname="arrow-left" />
                  </TouchableRipple>
                  <View style={styles.verticalalignbetwen}>
                    <TouchableRipple style={{backgroundColor:'rgba(83, 165, 63, 0.73)',borderRadius:6,}} onPress={() => navigation.navigate('BookingScreen')}>
                        <IconButton iconname="heart-outline" />
                    </TouchableRipple>
                    <TouchableRipple style={{backgroundColor:'rgba(83, 165, 63, 0.73)',borderRadius:6,}} onPress={() => navigation.navigate('BookingScreen')}>
                      <IconButton iconname="share-variant-outline" />
                  </TouchableRipple>
                  </View>
                </View>
              </View>
              <AutoCarosul/>
            </View>
            <DetailsContent/>
        </ScrollView>
        <View style={styles.floting}>
            <TouchableRipple  onPress={() => navigation.navigate('BookingScreen')} style={styles.flotingbutton} rippleColor="rgba(0, 0, 0, .32)">
                <Text style={styles.buttonText}>Book Now</Text>
            </TouchableRipple>
        </View>
    </SafeAreaView>
  )
}

export default Details