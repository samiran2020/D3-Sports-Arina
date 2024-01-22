import { View, Text } from 'react-native'
import React from 'react'
import ListButton from './ListButton'

const ListSection = (props: any) => {
  return (
    <>
      {
        props.data.map((item:any)=>{
          return (
            <ListButton count={item.count} title={item.title} subtitle={item.subtitle}/>
          )
        }  
        )
      }
    </>
  )
}

export default ListSection