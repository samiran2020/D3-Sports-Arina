import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../assets/style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListHeader = (props: any) => {
  return (
    <View style={styles.listheader}>
      <Text style={styles.listheadertitle}>{props.title}</Text>
      <TouchableOpacity >
        <View style={styles.filterbutton}>
          <MaterialCommunityIcons name="tune" size={26} color='#000' />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ListHeader