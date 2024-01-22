import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../assets/style'

const HourlyPrice = () => {
  return (
    <View style={styles.hourlyprice}>
      <Text style={{fontSize:18,color:'#fff',fontFamily:'PoppinsSemiBold',lineHeight:22,}}>₹800/</Text>
      <Text style={{fontSize:16,color:'#fff',fontFamily:'PoppinsRegular',lineHeight:20,}}>Hour</Text>
    </View>
  )
}

export default HourlyPrice