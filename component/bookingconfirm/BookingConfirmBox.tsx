import { View, Text,Image } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import styles from '../../assets/style'
import ConfirmHeader from './ConfirmHeader'

const BookingConfirmBox = () => {
  const navigation = useNavigation()    
  return (
    <View style={styles.bookingConfirmbox}>
      <View style={styles.bookingConfirmimage}>
        <Image style={styles.imageResponcive} source={require('../../assets/image/detailsbg.webp')}/>
      </View>
      <View style={styles.bookingConfirmcontent}>
        <ConfirmHeader title='Cricket Net With Bowling Machine (Kids)' subtitle='New Ground70ft x 110ft' />
        <View style={{borderTopWidth:1,borderTopColor:'#F6F5F5',borderStyle:'solid',paddingVertical:18,marginTop:18}}>
          <View style={styles.bookingConfirmsummary}>
              <Text style={styles.summarylisttitle}>Date</Text>
              <Text style={styles.listtitle}>07-12-2023</Text>
          </View>
          <View style={styles.bookingConfirmsummary}>
              <Text style={styles.summarylisttitle}>Time</Text>
              <Text style={styles.listtitle}>11:00AM - 13:00PM</Text>
          </View>
        </View>
        <View style={{borderTopWidth:1,borderTopColor:'#E2E2E2',borderStyle:'dashed',paddingTop:18,position:'relative'}}>
          <View style={{width:20,height:20,backgroundColor:'#F3F3F3',position:'absolute',left:-13,top:-10,borderRadius:50}}></View>
          <View style={{width:20,height:20,backgroundColor:'#F3F3F3',position:'absolute',right:-13,top:-10,borderRadius:50}}></View>
          <Text style={{fontFamily:'PoppinsRegular',fontSize:14,color:'#252525', alignSelf:'center'}}>Scan the QR code at the ground.</Text>
          <View style={styles.qrcodemimage}>
            <Image style={styles.imageResponcive} source={require('../../assets/image/qr-code.png')}/>
          </View>
        </View>
      </View>
    </View>
  )
}

export default BookingConfirmBox