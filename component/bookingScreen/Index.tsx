import { View, Text,TouchableOpacity,ScrollView,Button } from 'react-native'
import React,{useState} from 'react'
import styles from '../../assets/style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SlotTime from './SlotTime';
import CatagoriTag from '../detailspage/CatagoriTag';
import InputSpinner from "react-native-input-spinner";


const BookingContent = () => {

    const slottime = [
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
        {time:'12:00 - 01:00 '},
        {time:'01:00 - 01:00 '},
    ];   
    const availablesports = [
        {tag:'Box Cricket'},
        {tag:'Kids Cricket'},
    ];  
    const amenities = [
        {tag:'Changing Rooms'},
        {tag:'Drinking Water'},
        {tag:'First Aid'},
        {tag:'Lights'},
    ]; 
    const data = [
        {
            title:'Venue Rules',
            subtitle:'Cancellation & things to remember'
        },
        {
            count:'7',
            title:'Facilities',
            subtitle:'Turf for Box-Cricket experience'
        },
        

    ]; 

   

  return (
        <View style={styles.detailswrapper}>
            <View style={styles.cmnliststyle}>
                <View style={{paddingHorizontal:15, flexDirection:'column'}}>
                    <Text style={{fontSize:14,color:'#000',fontFamily:'PoppinsSemiBold',marginBottom:8,lineHeight:19}}>Booked Slots <Text style={{color:'#53A53F'}}>(0)</Text></Text>
                    <Text style={{fontSize:14,color:'#676767',fontFamily:'PoppinsRegular',marginBottom:8,lineHeight:19}}>All Slots Available</Text>
                    <View style={styles.verticalalign}>
                        <SlotTime data={slottime}/>
                    </View>
                </View>
            </View>
            <View style={styles.cmnliststyle}>
                <View style={{paddingHorizontal:15, flexDirection:'column'}}>
                    <Text style={{fontSize:14,color:'#000',fontFamily:'PoppinsSemiBold',marginBottom:8}}>Available Sports</Text>
                    <View style={styles.verticalalign}>
                        <CatagoriTag data={availablesports}/>
                    </View>
                </View>
            </View>
            <View style={styles.cmnliststylelast}>
                <View style={styles.verticalbox}>
                    <View style={{ paddingLeft:15,}}>
                        <Text style={{fontSize:14,color:'#000',fontFamily:'PoppinsSemiBold',marginBottom:8}}>Select Start Time</Text>
                        <View style={styles.starttime}>
                            <Text style={{fontSize:14,color:'#53A53F',fontFamily:'PoppinsRegular',lineHeight:19}}>11:00 AM</Text>     
                        </View>
                    </View>
                    <View style={{width:'45%', paddingRight:15}}>
                        <Text style={{fontSize:14,color:'#000',fontFamily:'PoppinsSemiBold',marginBottom:8}}>Select Duration</Text>
                        <View>
                            <InputSpinner
                                max={23}
                                min={12}
                                step={2}
                                buttonPressTextColor={"#fff"}
                                buttonStyle={styles.spnirbutton}
                                textColor={"#53A53F"}
                                inputStyle={styles.inputStyle}
                                buttonPressStyle={styles.buttonPressStyle}
                                buttonTextColor={"#53A53F"}
                            />
                        </View>
                    </View>
                </View>
                <View style={{marginTop:25}}>
                    <View style={styles.verticalbox}>
                        <View style={{width:'55%', paddingLeft:15,}}>
                            <Text style={{fontSize:14,color:'#A4A3A3',fontFamily:'PoppinsRegular',marginBottom:4,lineHeight:19}}>Start Time</Text>
                            <Text style={{fontSize:14,color:'#000',fontFamily:'PoppinsRegular',lineHeight:19}}>Thu, Dec 07, 11:00AM</Text>
                        </View>
                        <View style={{width:'45%', paddingRight:15}}>
                            <Text style={{fontSize:14,color:'#A4A3A3',fontFamily:'PoppinsRegular',marginBottom:4,lineHeight:19}}>End Time</Text>
                            <Text style={{fontSize:14,color:'#000',fontFamily:'PoppinsRegular',lineHeight:19}}>Thu, Dec 07, 13:00PM</Text>
                        </View>
                    </View>
                </View>
                <View style={{paddingHorizontal:15}}>
                    <View style={styles.offermessage}>
                        <Text style={{fontSize:14,color:'#53A53F',fontFamily:'PoppinsRegular',lineHeight:19}}>Offer 10% additional discount for 3 hours booking on weekdays only</Text>   
                    </View>
                </View>
                
            </View>
            
        </View>
  )
}

export default BookingContent