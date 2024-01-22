import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import styles from '../../assets/style'
// import Icon1 from '../../assets/image/cricket-stump.png'



const CatagoryBox = (props:any) => {
    const navigation = useNavigation()  
  return (
        <View style={styles.caragoris}>
            {
                props.data.map((item:any)=>{
                        return (
                            <TouchableOpacity style={styles.catagoribox} onPress={() => navigation.navigate('CatagoryListing')}>
                                <View style={styles.catagoriicon}>
                                    <Image source={item.uri} width={40} height={40}/>
                                </View>  
                                <Text style={styles.catagorititle}>{item.title}</Text>
                            </TouchableOpacity>
                        )

                    }
                )
            }
        </View>
  )
}

export default CatagoryBox