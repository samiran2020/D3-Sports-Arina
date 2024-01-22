import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from '../../assets/style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'
const ListBoxVertical = (props: any) => {
  const navigation = useNavigation()     
  return (
    <View style={styles.listboxvertical}>
        <View style={styles.listboximage}>
          <TouchableOpacity style={styles.boximage} onPress={() => navigation.navigate('Details')}>
            <Image style={styles.imageResponcive} source={props.uri}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wishlistbutton}>
            <MaterialCommunityIcons name="heart-outline" size={15} color='#fff' />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.listboxheading}>
            <View style={styles.headingcontent}>
              <Text style={styles.headingtitle}>{props.title}</Text>
              <Text style={styles.headingsubtitle}>{props.subtitle}</Text>
            </View>
            <View style={styles.boxprice}>
              <Text style={styles.price}>{props.price}<Text style={styles.hour}>{props.hour}</Text></Text>
            </View>
        </TouchableOpacity>
      </View>
  )
}

export default ListBoxVertical