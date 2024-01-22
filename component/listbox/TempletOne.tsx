import { View, Text } from 'react-native'
import React from 'react'
import ListBoxVertical from './ListBoxVertical'

const TempletOne = (props: any) => {
  return (
    <>
      {
        props.data.map((item:any)=>{
          return (
            <ListBoxVertical 
              uri={item.uri} 
              title={item.title} 
              subtitle={item.subtitle} 
              price={item.price}
              hour={item.hour} 
            />
          )
        }  
        )
      }
    </>
    
  )
}

export default TempletOne