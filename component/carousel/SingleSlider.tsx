import React from 'react';
import { Text, Dimensions, StyleSheet, View,Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const DATA = [
    {
      uri:require('../../assets/image/slider.webp'),
    },
    {

      uri:require('../../assets/image/slider.webp'),
    },
    {
      uri:require('../../assets/image/slider.webp'),
    },
];

type ItemProps = {title: string,uri: string};

const Item = ({title,uri}: ItemProps) => (
  <View style={styles.item}>
    <Image width={width} height={25} source={uri} styles={styles.bg}/>
  </View>
);

const SingleSlider = () => (
  <View style={{position:'relative', marginTop:30}}>
    <SwiperFlatList
      autoplay
      autoplayDelay={3}
      autoplayLoop
      index={0}
      showPagination
      data={DATA}
      renderItem={({item}) => <Item title={item.title} uri={item.uri} />}
      paginationStyleItemInactive={{backgroundColor:'#E2E2E2',width:15,height:8,margin:0,padding:0,}}
      paginationStyleItemActive={{width:30, height:8,backgroundColor:'#676767',}}
      paginationStyle={{margin:0,padding:0, bottom:-35,gap:-10}}
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

export default SingleSlider;