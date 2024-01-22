import { View, SafeAreaView,Text,Dimensions,StatusBar,TextInput,ScrollView,TouchableOpacity, } from 'react-native'
import React,{useState} from 'react'
import {Appbar} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
import {TouchableRipple} from 'react-native-paper'
import styles from '../assets/style'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment'

import * as Progress from 'react-native-progress';

const { width } = Dimensions.get('window');
const resWidth = 360;
const { width: screenWidth } = Dimensions.get('window');

const data = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
];


const EditProfile = () => {
  const navigation = useNavigation()  

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [showCalendar, setShowCalendar] = useState(false);
  const [dob, setdob] = useState(new Date());
  const onChange = (event: any, selectedDate: any) => {
    console.log("date", selectedDate);
    const currentDate = selectedDate;
    setShowCalendar(false);
    setdob(currentDate);
  }

  const showCal = () => {
    setShowCalendar(true);
  }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
        <View style={styles.shadow}>  
            <Appbar style={styles.appbar}>
                <View style={{display:'flex',flexDirection:'row',gap:0, justifyContent:'center',alignItems:'center'}}>
                    <Appbar.Action icon="arrow-left" onPress={() => navigation.navigate('More')} style={{ marginLeft:'auto'}}/>
                    <Appbar.Content title="Edit Profile" titleStyle={{fontSize:14,fontFamily:'PoppinsSemiBold',marginLeft:0,}} />
                </View>
                <View style={{ marginLeft:'auto', display:'flex',flexDirection:'row',gap:0, justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('More')}>
                        <Text style={{color:'red',fontFamily:'PoppinsMedium',fontSize:14,}}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Appbar>
        </View>
      <ScrollView>
        <View style={[styles.contentBoxStart,{marginBottom:100}]}>
          <View style={{ width:'90%', alignSelf:'center'}}>
            <View style={styles.profilecomplitation}>
                <Text style={{fontFamily:'PoppinsMedium',fontSize:14,color:'#53A53F'}}>Profile Completion 90%</Text>
                <Progress.Bar progress={0.90} animated={true} width={300} borderColor={"#53A53F"} color="#53A53F" />
            </View>
            <View style={{alignItems:'center',gap:3,flexDirection:'row', }}>
                <MaterialCommunityIcons name="information-outline" size={15} color="#A4A3A3" style={{paddingBottom:3}} />
                <Text style={{lineHeight:22,color:'#252525',fontSize:12, fontFamily:'PoppinsRegular', }}>Complete Profile for better visibility </Text>
            </View>
          </View>  
          <View style={[styles.contentWrapper,{marginTop:20, paddingVertical:0}]}>
            <Text style={[styles.headingMid,{fontFamily:'PoppinsMedium',fontSize:18}]}>Basic Details</Text>
          </View>
          <View style={styles.contentWrapper}>
            <View style={[styles.RegisterForm, {paddingTop:15}]}>
              <View style={styles.regInputfild}>
                  <Text style={styles.Label}>Name</Text>
                  <TextInput  placeholder='Jhon Smith'
                    style={styles.RegInputbox}
                    autoCorrect={false} autoCapitalize="none"  placeholderTextColor="#000"
                    />
              </View>
              <View style={styles.regInputfild}>
                  <Text style={styles.Label}>Phone</Text>
                  <TextInput  placeholder='+91' style={styles.RegInputbox} autoCorrect={false} 
                  autoCapitalize="none"  placeholderTextColor="#000" keyboardType="number-pad" />
              </View>
              <View style={styles.regInputfild}>
                  <Text style={styles.Label}>Email</Text>
                  <TextInput  placeholder='Jhonsmith@demomail.com'
                    style={styles.RegInputbox}
                    autoCorrect={false} autoCapitalize="none"  placeholderTextColor="#000"
                  />
              </View>
              <View style={styles.regInputfild}>
                  <View style={styles.displayBetwin}>
                    <Text style={styles.Label}>DOB</Text>
                    <Icon name="calendar-month"  size={20}
                    onPress={() => {
                      showCal();
                  }} style={{color:'#53A53F'}}></Icon>
                  </View>
                  {/* <TextInput  placeholder='21-Aug-1986'
                    style={styles.RegInputbox}
                    placeholderTextColor="#000" value={dob}
                  /> */}
                    <View style={styles.RegInputbox}>
                        {moment(new Date()).format('ll') == moment(dob).format('ll') ? <Text style={{
                            fontSize: 16,
                            marginRight: 15,
                            color: "#000",
                            fontFamily:'PoppinsMedium'
                        }}>Select DOB</Text> :
                        <Text style={[styles.sbnText]}>{moment(dob).format('ll')}</Text>}
                    </View>

                  {showCalendar ? (<DateTimePicker testID="dateTimePicker" value={dob} style={{ flex: 1, }} textColor="black" is24Hour={true} display="default" onChange={onChange} neutralButtonLabel="clear" />):null}
              </View>
              <View style={styles.regInputfild}>
                  <Text style={styles.Label}>Gender</Text>
                  <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={data}
                    search={false}
                    maxHeight={100}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select Gender' : '...'}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      setValue(item.value);
                      setIsFocus(false);
                    }}
                  />


              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableRipple  onPress={() => navigation.navigate('Home')} 
        style={[styles.button, {marginTop:20, position:'absolute',bottom:0,zIndex:1,width:'90%', alignSelf:'center', marginBottom:15}]} 
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableRipple>
    </SafeAreaView>    
  )
}



export default EditProfile

