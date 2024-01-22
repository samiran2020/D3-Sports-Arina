import { View, Text } from 'react-native'
import React from 'react'
import ListboxHorizental from './ListboxHorizental'

const TempletTwo = (props: any) => {
  return (
    <>
      {
        props.data.map((item:any)=>{
          return (
            <ListboxHorizental
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

export default TempletTwo