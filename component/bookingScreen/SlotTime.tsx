import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../assets/style'

const SlotTime = (props: any) => {
  return (
    <>
      {
        props.data.map((item:any)=>{
          return (
            <View style={styles.slottime}>
              <Text style={styles.slottimedata}>{item.time}</Text>
            </View> 
          )
        }  
        )
      }
    </>
  )
}

export default SlotTime
