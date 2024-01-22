import { StyleSheet, View,Text} from 'react-native'
import React from 'react'

import GetStarted from '../Screen/GetStarted';
import Login from '../Screen/Login';
import OTP from '../Screen/OTP';
import Register from '../Screen/Register';
import Home from '../Screen/Home';
import More from '../Screen/More';
import BookingTab from '../Screen/BookingTab';
import CatagoryListing from '../Screen/CatagoryListing';
import Details from '../Screen/Details';
import BookingScreen from '../Screen/BookingScreen';
import BookingSummary from '../Screen/BookingSummary';
import BookingConfirm from '../Screen/BookingConfirm';
import Coupons from '../Screen/Coupons';
import CancellationPolicy from '../Screen/CancellationPolicy';
import EditProfile from '../Screen/EditProfile';

import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Tab = createMaterialBottomTabNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function BottomTab(){
  return(

    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      tabStyle: {
        padding:0,
      },
      showLabel: false,
    }}
    screenOptions={{
      headerShown: false, // Hide the header for all screens in the bottom tab navigator
      tabBarStyle: { height:70,backgroundColor:'#fff',borderTopLeftRadius: 24,borderTopRightRadius: 24, shadowRadius:24, 
      },
    }}
    >
        <Tab.Screen name='Booking' component={BookingTab} options={{tabBarIcon: ({focused }) => (
          <View style={styles.item}>
            <MaterialCommunityIcons name="clipboard-check-outline" size={26} style={{color:focused? '#53A53F' : '#000'}} />
            <Text style={{color:focused? '#53A53F' : '#000',fontSize:14,fontFamily:'PoppinsMedium'}}>
              Booking
            </Text>
          </View>
        )
          
        }}/>
        <Tab.Screen name='Home' component={Home} options={{tabBarIcon: ({ }) => (
            <LinearGradient colors={['#66CD4D', '#04AE0B']} style={styles.linearGradient}>
              <MaterialCommunityIcons name="home-variant-outline" size={26} color='#fff' />
            </LinearGradient>
        )
        }}/>
        <Tab.Screen name='More' component={More}  options={{tabBarIcon: ({focused }) => (
          <View style={styles.item}>
            <MaterialCommunityIcons name="account-outline" size={26} style={{color:focused? '#53A53F' : '#000'}} />
            <Text style={{color:focused? '#53A53F' : '#000',fontSize:14,fontFamily:'PoppinsMedium'}}>
              More
            </Text>
          </View>
        )
        }}/>

    </Tab.Navigator>

  )
  
}

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tabs = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStarted'>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false }}/>
        <Stack.Screen name="OTP" component={OTP} options={{headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false }}/>
        <Stack.Screen name="Home" component={BottomTab} options={{headerShown: false }}/>
        <Stack.Screen name="More" component={BottomTab} options={{headerShown: false }}/>
        <Stack.Screen name="Booking" component={BottomTab} options={{headerShown: false }}/>
        <Stack.Screen name="CatagoryListing" component={CatagoryListing} options={{headerShown: false }}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown: false }}/>
        <Stack.Screen name="BookingScreen" component={BookingScreen} options={{headerShown: false }}/>
        <Stack.Screen name="BookingSummary" component={BookingSummary} options={{headerShown: false }}/>
        <Stack.Screen name="BookingConfirm" component={BookingConfirm} options={{headerShown: false }}/>
        <Stack.Screen name="Coupons" component={Coupons} options={{headerShown: false }}/>
        <Stack.Screen name="CancellationPolicy" component={CancellationPolicy} options={{headerShown: false }}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  item:{
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },

  linearGradient:{
    width: 48,
    height: 48,
    borderRadius:100,
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'#fff'
  }
});


export default Tabs;