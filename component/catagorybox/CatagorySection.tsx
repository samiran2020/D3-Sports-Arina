import React from 'react'
import { View } from 'react-native'
import CatagoryBox from './CatagoryBox'
import styles from '../../assets/style';

const names = [
    {
        uri:require('../../assets/image/cricket-stump.png'),
        title:'Cricket'
    },
    {
        uri:require('../../assets/image/Badminton.png'),
        title:'Badminton'
    },
    {
        uri:require('../../assets/image/Swimming.png'),
        title:'Swimming'
    },
    {
      uri:require('../../assets/image/Football.png'),
      title:'Football'
  },
  {
      uri:require('../../assets/image/Basketball.png'),
      title:'Basketball'
  },
  {
      uri:require('../../assets/image/more.png'),
      title:'More'
  },

];

const Catagory = () => {
  return (
      <CatagoryBox data={names}/>

  )
}

export default Catagory