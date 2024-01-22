import { View, Text, } from 'react-native'
import React from 'react'
import {TouchableRipple} from 'react-native-paper'

const CouponCard = (props: any) => {
  return (
    <View>
      <View>
        <Text>Use Coupons</Text>
        <Text {...props}>Get 100 OFF</Text>
      </View>
      <View>
        <Text>Use Coupons</Text>
        <TouchableRipple {...props}>
            <Text style={{color:'#fff'}}>Apply</Text>
        </TouchableRipple>
      </View>
    </View>
  )
}

export default CouponCard