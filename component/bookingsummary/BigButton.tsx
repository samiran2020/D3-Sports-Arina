import { View, Text,TouchableOpacity,Button,ScrollView } from 'react-native'
import React,{useState} from 'react'
import styles from '../../assets/style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";



const BigButton = (props: any) => {
  return (
    <>
      <View style={styles.bigbuttonwrapper}>
          <View style={styles.listbuttondetails}>
              {props.iconname &&
                <View style={styles.buttonicon}>
                  <MaterialCommunityIcons name={props.iconname} size={20} style={{color:'#000'}} />
                </View>
              }
              <View style={styles.listbuttoninfo}>
                  <Text style={styles.listtitle}>{props.title}</Text>
                  {props.subtitle &&<Text style={styles.listsubtitle}>{props.subtitle}</Text>}
              </View>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={20} style={{color:'#000'}} />
      </View>
    </>
  )
}

export default BigButton