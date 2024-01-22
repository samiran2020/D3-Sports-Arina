import { View, SafeAreaView,StyleSheet,Text,Dimensions,Image,StatusBar } from 'react-native'
import React from 'react'
import {Button,TouchableRipple} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

import styles from '../assets/style'

const { width } = Dimensions.get('window');
const resWidth = 360;
const { width: screenWidth } = Dimensions.get('window');

const GetStarted = () => {
  const navigation = useNavigation()  
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
        <View style={styles.image}>
          <Image source={require("../assets/image/get-started.png")}/>
          <View style={styles.imageAbsolut}>
            <Image source={require("../assets/image/logo-mid.png")}/>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentWrapper}>
              <Text style={styles.headingLight} >Get Started</Text>
              <Text style={styles.heading}>Play Your </Text>
              <Text style={styles.heading}>Passion i Own Way</Text>
          </View>
          <View style={styles.contentWrapper}>
            <TouchableRipple  onPress={() => navigation.navigate('Login')} style={styles.button} rippleColor="rgba(0, 0, 0, .32)">
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableRipple>
          </View>
          <View style={styles.contentWrapper}>
              <Text style={styles.copywright} >Demo Technologies Pvt Ltd</Text>
          </View>  
        </View>
    </SafeAreaView>    
  )
}



export default GetStarted