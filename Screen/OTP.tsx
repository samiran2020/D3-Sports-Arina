import { View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput } from 'react-native'
import React,{useRef, useState} from 'react'
import {Button,TouchableRipple} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../assets/style'


const { width } = Dimensions.get('window');
const resWidth = 360;
const { width: screenWidth } = Dimensions.get('window');



const OTP = () => {
  const navigation = useNavigation()  
  const ot1=useRef();
  const ot2=useRef();
  const ot3=useRef();
  const ot4=useRef();
  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
        <View style={styles.Logo}>
          <Image source={require("../assets/image/logo-mid.png")} style={styles.LogoImage}/>
        </View>
        <View style={styles.contentBox}>
          <View style={styles.contentWrapper}>
            <Text style={styles.headingThin}>Verify</Text>
            <Text style={styles.heading}>Your Account</Text>
            <Text style={styles.headingPara} >4 digit code has been sent to</Text>
            <Text style={styles.headingsubPara} >+91 6289750073</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.inputfild}>
                <View style={styles.otpfild}>
                    <TextInput  
                        style={[styles.inputotp,{borderBottomColor:f1.length>=1? '#53A53F':'#AFAFAF'} ]}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={ot1}
                        value={f1}
                        onChangeText={
                          txt=>{
                            setF1(txt);
                            if (txt.length >= 1){
                              ot2.current.focus();
                            }
                          }
                        }
                    />
                    <TextInput  
                        style={[styles.inputotp,{borderBottomColor:f2.length>=1? '#53A53F':'#AFAFAF'} ]}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={ot2}
                        value={f2}
                        onChangeText={
                          txt=>{
                            setF2(txt);
                            if (txt.length >= 1){
                              ot3.current.focus();
                            }else if(txt.length < 1){
                              ot1.current.focus();  
                            };
                          }
                        }
                    />
                    <TextInput  
                        style={[styles.inputotp,{borderBottomColor:f3.length>=1? '#53A53F':'#AFAFAF'} ]}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={ot3}
                        value={f3}
                        onChangeText={
                          txt=>{
                            setF3(txt);
                            if (txt.length >= 1){
                              ot4.current.focus();
                            }else if(txt.length < 1){
                              ot2.current.focus();  
                            };
                          }
                        }
                    />
                    <TextInput  
                        style={[styles.inputotp,{borderBottomColor:f4.length>=1? '#53A53F':'#AFAFAF'} ]}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={ot4}
                        value={f4}
                        onChangeText={
                          txt=>{
                            setF4(txt);
                            if (txt.length >= 1){
                              ot4.current.focus();
                            }else if(txt.length < 1){
                              ot3.current.focus();  
                            };
                          }
                        }
                    />
                </View>
              </View>
              <TouchableRipple  onPress={() => navigation.navigate('Register')} 
              disabled={
                f1 !=='' && f2 !=='' && f3 !=='' && f4 !==''? false:true
              }
              style={[styles.button,{backgroundColor:f1 !=='' && f2 !=='' && f3 !=='' && f4 !==''? '#53A53F':'#AFAFAF'} ]} 
              rippleColor="rgba(0, 0, 0, .32)"
              >
                <Text style={styles.buttonText}>Verify OTP</Text>
              </TouchableRipple>
              <View style={styles.display}>
                <Text onPress={() => console.log('Pressed')} style={styles.resend}> 
                    Didn't receive OTP?
                </Text>
                <Text style={styles.headingResend} >Resend code in: 0:45</Text>
              </View>
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



export default OTP