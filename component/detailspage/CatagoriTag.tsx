import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../assets/style'

const CatagoriTag = (props: any) => {
  return (
    <>
      {
        props.data.map((item:any)=>{
          return (
            <View style={styles.catagoritag}>
              <Text style={styles.catagorititlestyle}>{item.tag}</Text>
            </View> 
          )
        }  
        )
      }
    </>
  )
}

export default CatagoriTag
