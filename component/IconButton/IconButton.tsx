import { View, SafeAreaView,Text,Dimensions,Image,StatusBar,TextInput,ScrollView } from 'react-native'
import React,{useRef, useState} from 'react'
import {Button,TouchableRipple,Appbar, Avatar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import styles from '../../assets/style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = (props:any) => {
  const navigation = useNavigation()     
  return (
    <View style={styles.iconbutton}>
        <MaterialCommunityIcons name={props.iconname} size={20} color='#fff' />
    </View>
  )
}

export default IconButton