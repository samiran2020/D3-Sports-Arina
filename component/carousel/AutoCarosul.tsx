import React from 'react';
import { Text, Dimensions, StyleSheet, View,Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const DATA = [
    {
      uri:require('../../assets/image/detailsbg.webp'),
    },
    {

      uri:require('../../assets/image/detailsbg.webp'),
    },
    {
      uri:require('../../assets/image/detailsbg.webp'),
    },
];

type ItemProps = {title: string,uri: string};

const Item = ({title,uri}: ItemProps) => (
  <View style={styles.item}>
    <Image width={width} height={25} source={uri} styles={styles.bg}/>
  </View>
);

const AutoCarosul = () => (
  <View style={{position:'relative'}}>
    <SwiperFlatList
      autoplay
      autoplayDelay={3}
      autoplayLoop
      index={0}
      showPagination
      data={DATA}
      renderItem={({item}) => <Item title={item.title} uri={item.uri} />}
      paginationStyleItemInactive={{backgroundColor:'white',width:10,height:10,margin:0,padding:0,}}
      paginationStyleItemActive={{width:10,height:10,backgroundColor:'#53A53F'}}
      paginationStyle={{margin:0,padding:0, bottom:25,gap:-10}}
    />
  </View>
);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
  item:{
    alignItems:'center',
    justifyContent:'center',
    width:width,
    marginHorizontal:0,
    objectFit:'cover',
  },
});

export default AutoCarosul;