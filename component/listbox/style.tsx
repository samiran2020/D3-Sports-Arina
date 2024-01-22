import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    imageResponcive: {
        objectFit:'cover',
        width:'100%',
        height:'100%',
      },
      listboxhorizental:{
        width:'100%',
        paddingHorizontal:18,
        gap:15,
        marginVertical:20,
        flexDirection:'row'
      },
      listboximage:{
        position:'relative',
        width:140,
      },
      wishlistbutton:{
        borderRadius:6,
        position:'absolute',
        top:6,
        right:6,
        width:24,
        height:24,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(83, 165, 63, 0.73)'
      },
      boximage:{
        height:127,borderRadius:15,overflow:'hidden'
      },
      listboxheading:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        flexWrap:'wrap'
      },
      headingcontent:{
      paddingRight:20,
      width:'66%'
      },
      headingtitle:{
        color:'#232828',
        fontFamily:'PoppinsSemiBold',
        fontSize:16,
        flexWrap:'wrap'
      },
      headingsubtitle:{
        color:'#676767',
        fontFamily:'PoppinsRegular',
        fontSize:14,
      },
      price:{
        color:'#53A53F',
        fontFamily:'PoppinsSemiBold',
        fontSize:16,
      },
      hour:{
        color:'#232828',
      },
      button:{
        paddingHorizontal:20,
        paddingVertical:8,
        backgroundColor:'#53A53F',
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        width:120,
        marginTop:10,
        borderRadius:20,
      },
      buttonText:{
        color:'#fff',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'PoppinsMedium',
        fontSize:14
      }
});
export default styles