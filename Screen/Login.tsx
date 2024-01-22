import { View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput } from 'react-native'
import React from 'react'
import {Button,TouchableRipple} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../assets/style'

const { width } = Dimensions.get('window');
const resWidth = 360;
const { width: screenWidth } = Dimensions.get('window');



const Login = () => {
  const navigation = useNavigation()  
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
        <View style={styles.Logo}>
          <Image source={require("../assets/image/logo-mid.png")} style={styles.LogoImage}/>
        </View>
        <View style={styles.contentBox}>
          <View style={styles.contentWrapper}>
            <Text style={styles.headingThin}>Let's</Text>
            <Text style={styles.heading}>Sign you in</Text>
            <Text style={styles.headingPara} >Please enter your phone number to proceed</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.inputfild}>
                <Text style={styles.inputLabel}>+91</Text>
                <TextInput  placeholder='Enter your phone number' style={styles.inputbox} autoCorrect={false} autoCapitalize="none" />
              </View>
              <TouchableRipple  onPress={() => navigation.navigate('OTP')} style={styles.button} rippleColor="rgba(0, 0, 0, .32)">
                <Text style={styles.buttonText}>Get OTP</Text>
              </TouchableRipple>
              <Button mode="text" onPress={() => console.log('Pressed')} theme={{ colors: { primary: '#53A53F' } }} style={styles.plainButton}> 
                Explore as Guest
              </Button>
            </View>
          </View>
          <View style={styles.tmsWrapper}>
              <Text style={styles.copywright} >By continuing you agree to the</Text> 
              <Text onPress={() => console.log('Pressed')} style={styles.tmsButton}>Terms of services</Text>
              <Text style={styles.copywright} > and </Text>
              <Text onPress={() => console.log('Pressed')} style={styles.tmsButton}>Privacy policy</Text>
          </View>  

        </View>
    </SafeAreaView>    
  )
}



export default Login