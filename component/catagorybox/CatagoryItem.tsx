import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';

const DATA = [
    {
      id: '1',
      title: 'Box Cricket',
      uri:require('../../assets/image/catagori-icon.png'),
    },
    {
      id: '2',
      title: 'Box Cricket',
      uri:require('../../assets/image/catagori-icon1.png'),
    },
    {
      id: '3',
      title: 'Box Cricket',
      uri:require('../../assets/image/catagori-icon2.png'),
    },
    {
      id: '4',
      title: 'Box Cricket',
      uri:require('../../assets/image/catagori-icon.png'),
    },
    {
      id: '5',
      title: 'Box Cricket',
      uri:require('../../assets/image/catagori-icon1.png'),
    },
    {
      id: '6',
      title: 'Box Cricket',
      uri:require('../../assets/image/catagori-icon2.png'),
    },
];

type ItemProps = {title: string,uri: any};

const Item = ({title,uri}: ItemProps) => (
  <View style={styles.item}>
    <Image width={25} height={25} source={uri}/>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const CatagoryItem = () => {
  return (
    <View style={styles.padleft}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} uri={item.uri} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false} 
      />
    </View>
  )
}


const styles = StyleSheet.create({
    padleft:{
      paddingLeft:10,
    },
    item: {
      backgroundColor: '#fff',
      padding:8,
      paddingHorizontal:15,
      marginVertical: 8,
      marginHorizontal:8,
      flexDirection:'row',
      alignItems:'center',
      gap:10,
      borderColor:'#D9D9D9',
      borderWidth:1,
      borderRadius:12,
      marginTop:30,
    },
    title: {
      fontSize:14,
      fontFamily:'PoppinsMedium',
      color:'#000',
      width:60,
      lineHeight:17,
    },
  });

export default CatagoryItem