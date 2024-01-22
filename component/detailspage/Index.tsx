import { View, Text,TouchableOpacity,ScrollView,Button } from 'react-native'
import React,{useState} from 'react'
import styles from '../../assets/style'
import Header from './Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CatagoriTag from './CatagoriTag';
import ListSection from './ListSection';
import DayTiming from './DayTiming';
import HourlyPrice from './HourlyPrice';




const DetailsContent = () => {
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
                <View style={styles.verticalbox}>
                    <View style={{width:'80%'}}>
                        <Header title='Cricket Net With Bowling Machine (Kids)' subtitle='New Ground70ft x 110ft' />
                    </View>
                    <View style={{width:'20%'}}>
                        <TouchableOpacity style={styles.cercleicon}>
                            <MaterialCommunityIcons name="phone-outline" size={26} style={{color:'#53A53F'}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.cmnliststyle}>
                <View style={styles.verticalbox}>
                    <View style={{width:'75%'}}>
                        <DayTiming/>
                    </View>
                    <View style={{width:'25%'}}>
                        <HourlyPrice/>
                    </View>
                </View>
            </View>
            
            <View style={styles.cmnliststylelast}>
                <View style={{paddingHorizontal:15, flexDirection:'column'}}>
                    <Text style={{fontSize:14,color:'#000',fontFamily:'PoppinsSemiBold',marginBottom:8}}>Available Sports</Text>
                    <View style={styles.verticalalign}>
                        <CatagoriTag data={availablesports}/>
                    </View>
                </View>
            </View>
            <View style={{gap:20, paddingVertical:30}}>
                    <ListSection data={data}/>
            </View>
            <View style={styles.cmnliststyle}>
                <View style={{paddingHorizontal:15, flexDirection:'column'}}>
                    <Text style={{fontSize:14,color:'#000',fontFamily:'PoppinsSemiBold',marginBottom:8}}>About The Turf</Text>
                    <Text style={{color:'#676767',fontSize:14,fontFamily:'PoppinsRegular',}}>Artificial turf is a surface of synthetic fibers made to look like natural grass, used in sports arenas, residential lawns and commercial applications that traditionally use grass.</Text>
                </View>
            </View>
            <View style={styles.cmnliststylelast}>
                <View style={{paddingHorizontal:15, flexDirection:'column'}}>
                    <Text style={{fontSize:14,color:'#000',fontFamily:'PoppinsSemiBold',marginBottom:8}}>Amenities</Text>
                    <View style={styles.verticalalign}>
                        <CatagoriTag data={amenities}/>
                    </View>
                </View>
            </View>
            
        </View>
  )
}

export default DetailsContent