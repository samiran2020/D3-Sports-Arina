import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../assets/style'

const Header = (props: any) => {
  return (
    <View style={styles.headerwrapper}>
      <Text style={styles.headertitle}>{props.title}</Text>
      <Text style={styles.headersubtitle}>{props.subtitle}</Text>
    </View>
  )
}

export default Header