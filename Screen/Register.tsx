import { View, SafeAreaView,Text,Dimensions,StatusBar,TextInput,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import {TouchableRipple} from 'react-native-paper'
import styles from '../assets/style'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

const { width } = Dimensions.get('window');
const resWidth = 360;
const { width: screenWidth } = Dimensions.get('window');

const data = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
];


const Register = () => {
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
      <ScrollView>
        <StatusBar  backgroundColor="#E9E9E9" translucent={false} barStyle="dark-content"/>
        <View style={styles.contentBoxStart}>
          <View style={[styles.contentWrapper,{marginTop:20,}]}>
            <Text style={styles.headingMid}>One Time Setup</Text>
            <Text style={styles.headingPara} >Please enter the details below to continue</Text>
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.RegisterForm}>
              <View style={styles.regInputfild}>
                  <Text style={styles.Label}>Name</Text>
                  <TextInput  placeholder='Jhon Smith'
                    style={styles.RegInputbox}
                    autoCorrect={false} autoCapitalize="none"  placeholderTextColor="#000"
                    />
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
              <TouchableRipple  onPress={() => navigation.navigate('Home')} 
                style={[styles.button, {marginTop:20,}]} 
                rippleColor="rgba(0, 0, 0, .32)"
              >
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableRipple>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>    
  )
}



export default Register

