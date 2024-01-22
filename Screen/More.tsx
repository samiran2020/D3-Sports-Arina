import { View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import React,{useRef, useState} from 'react'
import {Button,TouchableRipple,Appbar, Avatar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../assets/style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const resWidth = 360;
const { width: screenWidth } = Dimensions.get('window');



const More = () => {
  const navigation = useNavigation()  
  return (
    <SafeAreaView style={styles.container}>
        
            <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>

            <View style={styles.shadow}>  
                <Appbar style={styles.appbar}>
                    <View style={{display:'flex',flexDirection:'row',gap:0, justifyContent:'center',alignItems:'center'}}>
                        <Appbar.Content title="Account" titleStyle={{fontSize:14,fontFamily:'PoppinsSemiBold',marginLeft:8,}} />
                    </View>
                    <View style={{ marginLeft:'auto', display:'flex',flexDirection:'row',gap:0, justifyContent:'center',alignItems:'center'}}>
                      <Appbar.Action icon="heart-outline" style={{marginHorizontal:0}}/>
                      <Appbar.Action icon="bell-outline" style={{marginHorizontal:0}}/>
                    </View>
                </Appbar>
            </View>
          <ScrollView>
            <View style={[styles.verticalalignbetwen, styles.profilebar]}>
              <View style={[styles.verticalalign,styles.profilebox]}>
                <View style={styles.profileimage}>
                  <Image style={styles.imageResponcive} source={require('../assets/image/profile-img.jpg')}/>
                </View>
                <View>
                  <Text style={{lineHeight:22,color:'#252525',fontSize:16, fontFamily:'PoppinsMedium'}}>Peter Smith</Text>
                  <Text style={{lineHeight:22,color:'#53A53F',fontSize:14, fontFamily:'PoppinsRegular'}}>+91 6289750073</Text>
                </View>
              </View>
              

              <TouchableOpacity style={[styles.verticalalign]} onPress={() => navigation.navigate('EditProfile')} >
                <Text style={{lineHeight:30,color:'#252525',fontSize:14, fontFamily:'PoppinsMedium'}}>Edit</Text>
                <MaterialCommunityIcons name="pencil-circle-outline" size={24} color="#252525"/>
              </TouchableOpacity>
            </View>

            <View style={styles.morelinkwrapper}>
              <TouchableOpacity style={[styles.verticalalignbetwen,styles.morelinkbox]}>
                  <View style={styles.verticalalign}>
                    <MaterialCommunityIcons name="clipboard-check-outline" size={22} color="#53A53F"/>
                    <Text style={{lineHeight:22,color:'#676767',fontSize:14, fontFamily:'PoppinsRegular'}}>My Booking</Text>
                  </View>
                  <MaterialCommunityIcons name="chevron-right" size={25} color="#676767"/>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.verticalalignbetwen,styles.morelinkbox]}>
                  <View style={styles.verticalalign}>
                    <MaterialCommunityIcons name="heart-outline" size={22} color="#53A53F"/>
                    <Text style={{lineHeight:22,color:'#676767',fontSize:14, fontFamily:'PoppinsRegular'}}>Favorite</Text>
                  </View>
                  <MaterialCommunityIcons name="chevron-right" size={25} color="#676767"/>
              </TouchableOpacity>
            </View>

            <View style={styles.morelinkwrapper}>
              <TouchableOpacity style={[styles.verticalalignbetwen,styles.morelinkbox]}>
                  <View style={styles.verticalalign}>
                    <MaterialCommunityIcons name="help-circle-outline" size={22} color="#53A53F"/>
                    <Text style={{lineHeight:22,color:'#676767',fontSize:14, fontFamily:'PoppinsRegular'}}>Help & FAQ</Text>
                  </View>
                  <MaterialCommunityIcons name="chevron-right" size={25} color="#676767"/>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.verticalalignbetwen,styles.morelinkbox]}>
                  <View style={styles.verticalalign}>
                    <MaterialCommunityIcons name="clipboard-check-outline" size={22} color="#53A53F"/>
                    <Text style={{lineHeight:22,color:'#676767',fontSize:14, fontFamily:'PoppinsRegular'}}>Privacy Policy</Text>
                  </View>
                  <MaterialCommunityIcons name="chevron-right" size={25} color="#676767"/>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.verticalalignbetwen,styles.morelinkbox]}>
                  <View style={styles.verticalalign}>
                    <MaterialCommunityIcons name="police-badge-outline" size={22} color="#53A53F"/>
                    <Text style={{lineHeight:22,color:'#676767',fontSize:14, fontFamily:'PoppinsRegular'}}>Terms & Condition</Text>
                  </View>
                  <MaterialCommunityIcons name="chevron-right" size={25} color="#676767"/>
              </TouchableOpacity>
            </View>
            <View style={styles.morelinkwrapper}>
              <TouchableOpacity style={[styles.verticalalignbetwen,styles.morelinkbox]}>
                  <View style={styles.verticalalign}>
                    <MaterialCommunityIcons name="logout-variant" size={22} color="#53A53F"/>
                    <Text style={{lineHeight:22,color:'#252525',fontSize:14, fontFamily:'PoppinsMedium'}}>Log out</Text>
                  </View>
                  <MaterialCommunityIcons name="chevron-right" size={25} color="#676767"/>
              </TouchableOpacity>
            </View>

            <View style={{paddingVertical:30, alignItems:'center', justifyContent:'center'}}>
              <Text style={{lineHeight:22,color:'#676767',fontSize:14, fontFamily:'PoppinsRegular', textAlign:'center'}}>V 1.0.0</Text>
            </View>
        </ScrollView>
    </SafeAreaView>    
  )
}



export default More