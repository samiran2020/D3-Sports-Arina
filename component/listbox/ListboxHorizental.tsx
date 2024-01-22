import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from '../listbox/style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableRipple} from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'

const ListboxHorizental = (props: any) => {
    const navigation = useNavigation()  
  return (
    <View style={styles.listboxhorizental}>
        <View style={styles.listboximage}>
          <TouchableOpacity style={styles.boximage}>
            <Image style={styles.imageResponcive} source={props.uri}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wishlistbutton}>
            <MaterialCommunityIcons name="heart-outline" size={15} color='#fff' />
          </TouchableOpacity>
        </View>

        <View style={styles.headingcontent}>
            <Text style={styles.headingtitle}>{props.title}</Text>
            <View style={styles.boxprice}>
            <Text style={styles.price}>{props.price}<Text style={styles.hour}>{props.hour}</Text></Text>
            </View>
            <Text style={styles.headingsubtitle}>{props.subtitle}</Text>
            <TouchableRipple  onPress={() => navigation.navigate('Details')} style={styles.button} rippleColor="rgba(0, 0, 0, .32)">
                <Text style={styles.buttonText}>Book Now</Text>
            </TouchableRipple>  
        </View>

      </View>
  )
}

export default ListboxHorizental