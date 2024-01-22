import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../assets/style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DayTiming = () => {
  return (
    <View style={styles.daywrapper}>
        <View style={styles.daysec}>
            <MaterialCommunityIcons name="clock-time-eight-outline" size={20} style={{color:'#000'}} />
            <Text style={{fontSize:14,color:'#000',fontFamily:'PoppinsSemiBold',lineHeight:20,}}>Monday - Sunday</Text>
        </View>
        <Text style={{fontSize:14,color:'#676767',fontFamily:'PoppinsRegular',lineHeight:20,paddingLeft:7,}}>Timing: 6 am To 10 pm</Text>
    </View>
  )
}

export default DayTiming