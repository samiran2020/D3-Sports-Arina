import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
 //  Cmn-container   
 container: {
    flex:1,
    backgroundColor:'white',
    position:'relative',
  },
  cmnimage:{
    width: null,
    height: 300,
    resizeMode: 'cover'
  },
  verticalbox:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    flexWrap:'wrap',
  },
  cercleicon:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    width:48,
    height:48,
    backgroundColor:'#E4F6DF',
    borderRadius:100
  },
//  Get-Started Page  
  image: {
    flex:4,
    alignItems:'center',
    justifyContent:'center',
    position:'relative'
  },
  imageResponcive: {
    objectFit:'cover',
    width:'100%',
    height:'100%',
  },
  imageAbsolut: {
    position:'absolute',
    left:0,
    right:0,
    top:0,
    bottom:0,
    zIndex:1,
    margin:'auto',
    width:'100%',
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  content:{
    flex:2,
    justifyContent:'space-between',
    gap:10,
    paddingBottom:15,
  },
  contentWrapper:{
    paddingHorizontal:27,
  },
  heading:{
    fontSize:34,
    fontStyle: 'normal',
    lineHeight:40,
    padding:0,
    margin:0,
    display:'flex',
    alignItems:'flex-start',
    color:'#252525',
    textTransform:'capitalize',
    fontFamily:'PoppinsBold',
    flexWrap:'wrap'
  },

  headingLight:{
    display:'flex',
    fontSize:20,
    fontStyle: 'normal',
    lineHeight:50,
    color:'#676767',
    fontFamily:'PoppinsMedium',
    textTransform:'capitalize'
  },
  copywright:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    color:'#232828',
    fontFamily:'PoppinsRegular',
    fontSize:12,
    fontWeight:'400',
    textAlign:'center',
  },
  button:{
    display: 'flex',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    backgroundColor:'#53A53F',
    paddingHorizontal:20,
    paddingVertical:15,
    textAlign:'center',
  } ,
  floting:{
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:0,
    width:'100%',
    zIndex:1,
    flex:1,
    backgroundColor:'#fff',
    paddingBottom:20,
  },
  flotingbutton:{
    width:'90%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    backgroundColor:'#53A53F',
    paddingHorizontal:20,
    paddingVertical:15,
    textAlign:'center',
  } ,
  buttonText:{
    letterSpacing:0.64,
    color:'#fff',
    margin:'auto',
    fontSize:16,
    fontFamily:'PoppinsSemiBold',
    width:'100%',
    textAlign:'center',
  },

  //  Login Page  
  Logo:{
      flex:2,
      alignItems:'center',
      justifyContent:'center',
      position:'relative',
      textAlign:'center',
      alignSelf:'center',
      width:'100%'
  },
  LogoImage:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      marginHorizontal:'auto'
  },
  contentBox:{
      flex:3,
      justifyContent:'space-between',
      gap:10,
      paddingBottom:15,
  },
  headingPara:{
    display:'flex',
    fontSize:16,
    fontStyle: 'normal',
    lineHeight:20,
    color:'#676767',
    fontFamily:'PoppinsRegular',
    textTransform:'capitalize',
    marginTop:10,
  },
  headingThin:{
    fontSize:35,
    fontStyle: 'normal',
    lineHeight:38,
    padding:0,
    margin:0,
    display:'flex',
    alignItems:'flex-start',
    color:'#252525',
    textTransform:'capitalize',
    fontFamily:'PoppinsLight',
    flexWrap:'wrap',
    marginBottom:5,
  },
  inputWrapper:{
    marginTop:30,
  },
  tmsButton:{
    padding:0,margin:0,
    color:'#53A53F',
    display:'flex',
    paddingHorizontal:4,
    alignItems:'center',
    justifyContent:'center',
    fontFamily:'PoppinsRegular',
    fontSize:12,
    fontWeight:'400',
    textAlign:'center',
  },
  tmsWrapper:{
    paddingHorizontal:27,
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap',
    textAlign:'center',
    justifyContent:'center'
  },

  plainButton:{
    display: 'flex',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:0,
    backgroundColor:'#fff',
    marginTop:10,
    fontFamily:'PoppinsMedium',
  } ,
  inputbox:{
    borderRadius:0,
    borderBottomColor:'#AFAFAF',
    borderWidth:0,
    borderBottomWidth:2,
    paddingLeft:35,
    color:'#000',
    textDecorationLine:'none',
    fontFamily:'PoppinsLight',
    fontSize:16,
    width:'100%',
    marginBottom:20,
  },
  inputfild:{
    display: 'flex',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    position:'relative'
  },
  inputLabel:{
    position:'absolute',
    left:0,
    right:'auto',
    top:12,
    bottom:0,
    marginVertical:'auto',
    fontSize:16,
    fontFamily:'PoppinsSemiBold',
    color:'#000'
  },
  headingsubPara:{
    display:'flex',
    fontSize:16,
    fontStyle: 'normal',
    lineHeight:20,
    color:'#53A53F',
    fontFamily:'PoppinsSemiBold',
    textTransform:'capitalize',
  },
  display:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  resend:{
    fontFamily:'PoppinsMedium',
    fontSize:14,
    color:'#53A53F',
    marginTop:15,
  },
  headingResend:{
    fontFamily:'PoppinsMedium',
    fontSize:14,
    color:'#252525',
    paddingLeft:5,
  },
  otpfild:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:20,
  },

  inputotp:{
    borderBottomColor:'#AFAFAF',
    borderWidth:0,
    borderBottomWidth:2,
    marginBottom:18,
    color:'#000',
    textDecorationLine:'none',
    fontSize:20,
    width: 72,
    height:39,
    textAlign:'center',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:2,
    position:'relative',
    fontFamily:'PoppinsMedium',
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  // Register Page

  contentBoxStart:{
    flex:3,
    justifyContent:'flex-start',
    gap:10,
    paddingTop:25,
  },
  headingMid:{
    fontSize:25,
    fontStyle: 'normal',
    lineHeight:30,
    padding:0,
    margin:0,
    display:'flex',
    alignItems:'flex-start',
    color:'#252525',
    textTransform:'capitalize',
    fontFamily:'PoppinsSemiBold',
    flexWrap:'wrap'
  },
  RegisterForm:{
    paddingTop:45,
  },
  RegInputbox:{
    borderRadius:0,
    borderBottomColor:'#AFAFAF',
    borderWidth:0,
    borderBottomWidth:2,
    color:'#000',
    textDecorationLine:'none',
    fontFamily:'PoppinsMedium',
    fontSize:16,
    width:'100%',
    marginBottom:20,
  },
  Label:{
    color:'#676767',
    fontFamily:'PoppinsRegular',
    fontSize:14,
    fontStyle:'normal',
    lineHeight:15,
    
  },
  regInputfild:{
   position:'relative',
  },
  displayBetwin:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  dropdown: {
    height: 50,
    borderRadius:0,
    paddingHorizontal: 8,
    borderBottomColor:'#AFAFAF',
    borderWidth:0,
    borderBottomWidth:2,
    color:'#000',
    textDecorationLine:'none',
    fontFamily:'PoppinsMedium',
    fontSize:16,
    width:'100%',
    marginBottom:20,
  },
  placeholderStyle:{
    color:'#000',
    textDecorationLine:'none',
    fontFamily:'PoppinsMedium',
    fontSize:16,
  },
  selectedTextStyle:{
    color:'#000',
    textDecorationLine:'none',
    fontFamily:'PoppinsMedium',
    fontSize:16,
  },
  sbnText:{
    color:'#000',
    textDecorationLine:'none',
    fontFamily:'PoppinsMedium',
    fontSize:16,
    paddingBottom:12,
    paddingTop:8,
    paddingLeft:8,
  },

// app-bar
  appbar:{
    display:'flex',
    gap:8,
    backgroundColor:'#fff',
    paddingHorizontal:15,
  },
  avtar:{
    width:49,
    height:49,
    borderRadius:15,
    objectFit:'cover',
    backgroundColor:'#E3F6DF'

  },
  title:{
    color:' #000',
    fontSize: 14,
    fontWeight:"600",
    lineHeight: 1,
    textTransform: 'capitalize',
  },

  captionwraper:{
    position:'absolute',
    left:0,
    right:0,
    top:0,
    bottom:0,
    margin:'auto',
    height:"100%",
    width:"100%",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:8,
},
Capheading:{
    textShadowColor: 'rgba(0, 0, 0, 0.59)',
    textShadowOffset: {width: -1, height: 4},
    color:'#fff',
    fontWeight:'900',
    letterSpacing:0.9,
    fontSize:30,
    lineHeight:30
    
},
subtitle:{
    textShadowColor: 'rgba(0, 0, 0, 0.59)',
    textShadowOffset: {width: -1, height: 4},
    color:'#fff',
    fontWeight:'700',
    fontSize:12,
    letterSpacing:0.4,
    lineHeight:12
},
bgimage:{
  width:200,height:200,
},

// Home Page design
indigetor:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  marginTop:15,
},
sliderimg:{
  width:'90%',
  paddingHorizontal:18
},
caragoris:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  marginTop:33,
  flexWrap:'wrap',

},
catagoribox:{
  width:'33.33%',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  padding:10,
  gap:10,
  textAlign:'center',
  
},
shadow:{
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
  elevation: 9,
  backgroundColor:'#fff',
},
catagoriicon:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  width:80,
  height:80,
  borderRadius:15,
  backgroundColor:'#E4F6DF',
},
catagorititle:{
  fontFamily:'PoppinsMedium',
  fontSize:14,
  color:'#000'
},

// ListBoxVertical design
listheader:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  marginTop:33,
  flexWrap:'wrap',
  paddingHorizontal:20,
  paddingBottom:33,
},
listheadertitle:{
  fontFamily:'PoppinsSemiBold',
  fontSize:16,
  color:'#252525'
},
filterbutton:{
  width: 48,
  height: 38,
  borderRadius:10,
  borderWidth:1,
  borderColor:'#D9D9D9',
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
},

listboxvertical:{
  width:'100%',
  paddingHorizontal:18,
  gap:15,
  marginBottom:30,
},
listboximage:{
  position:'relative',
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
  height:198,borderRadius:15,overflow:'hidden'
},
listboxheading:{
  flexDirection:'row',
  alignItems:'flex-start',
  justifyContent:'space-between',
  flexWrap:'wrap'
},
headingcontent:{
paddingRight:20,
},
headingtitle:{
  color:'#232828',
  fontFamily:'PoppinsSemiBold',
  fontSize:16,
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

// Details Page design
detailswrapper:{
  backgroundColor:'#fff',
  borderTopEndRadius:30,
  borderTopStartRadius:30,
  position:'relative',
  zIndex:1,
  marginTop:-30,
  paddingBottom:100,

  flex:5,
},
iconbutton:{
  alignItems:'center',
  justifyContent:'center',
  width:30,
  height:30,
},
cmnliststyle:{
  paddingHorizontal:10,
  paddingVertical:30,
  borderBottomWidth:2,
  borderStyle:'dashed',
  borderBottomColor:'#D9D9D9',
  width:'100%'
},
cmnliststylelast:{
  paddingHorizontal:10,
  paddingVertical:30,
  width:'100%'
},
headerwrapper:{
  flexDirection:'column',
  gap:8,
  paddingHorizontal:15,
},
headertitle:{
  color:'#232828',
  lineHeight:25,
  fontSize:18,
  fontFamily:'PoppinsSemiBold',
},
headersubtitle:{
  color:'#676767',
  fontSize:14,
  fontFamily:'PoppinsRegular',
},
verticalalign:{
  flexDirection:'row',
  gap:10,
  flexWrap:'wrap'
},
verticalalignbetwen:{
  flexDirection:'row',
  gap:10,
  flexWrap:'wrap',
  justifyContent:'space-between',
  alignItems:'center'
},

catagoritag:{
  paddingHorizontal:20,
  paddingVertical:10,
  borderWidth:1,
  borderColor:'#D9D9D9',
  borderStyle:'solid',
  borderRadius:50,
},

catagorititlestyle:{
  color:'#676767',
  fontSize:14,
  fontFamily:'PoppinsRegular',
},
listbuttonwrapper:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  gap:20,
  paddingHorizontal:25,
  paddingVertical:8,
  flexWrap:'wrap',
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height:0,
  },
  shadowOpacity: 0.1,
  shadowRadius:10,
  elevation:40,
  backgroundColor:'#fff',
},

listbuttondetails:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  gap:5,
},
listbuttoninfo:{
  flexDirection:'column',
  justifyContent:'space-between',
  alignItems:'flex-start',
  gap:0,
},
listtitle:{
  color:'#000',
  fontSize:14,
  fontFamily:'PoppinsSemiBold',
},
listsubtitle:{
  color:'#676767',
  fontSize:14,
  fontFamily:'PoppinsRegular',
},
count:{
  width:30,
  height:30,
  borderRadius:50,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#53A53F',
},
counttext:{
  color:'#fff',
  fontSize:16,
  fontFamily:'PoppinsBold',
  lineHeight:25,
  position:'relative',
  top:2
},
hourlyprice:{
  paddingHorizontal:11,
  paddingVertical:8,
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'column',
  backgroundColor:'#53A53F',
  borderRadius:8,
},
daywrapper:{
  alignItems:'flex-start',
  justifyContent:'flex-start',
  flexDirection:'column',
  paddingLeft:15,
  gap:5
},
daysec:{
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  gap:5,
  padding:8,
  backgroundColor:'#F3F3F3',
  borderRadius:3
},
modal:{
  width:'100%',marginStart:0,left:0,marginBottom:0
},
modalcontanier:{
  position:'absolute',bottom:0,backgroundColor:'#fff',width:'100%',
  borderTopRightRadius:20,borderTopLeftRadius:20,padding:20,
},
closebutton:{
  position:'absolute',right:10,top:10,
},

// Booking Screen Page design
slottime:{
  paddingHorizontal:10,
  paddingVertical:5,
  borderWidth:1,
  borderColor:'#53A53F',
  borderStyle:'solid',
  borderRadius:5,
  display:'flex',
  alignItems:'center',
  justifyContent:'center'

},

slottimedata:{
  color:'#676767',
  fontSize:14,
  fontFamily:'PoppinsRegular',
  padding:0,
  margin:0,
},

offermessage:{
  minHeight:56,
  maxWidth:'100%',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#E4F6DF',
  borderColor:'#66CD4D',
  borderWidth:1,
  borderStyle:'solid',
  borderRadius:8,
  marginTop:32
},
starttime:{
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#E4F6DF',
  borderColor:'#B2E8A5',
  borderWidth:1,
  borderStyle:'solid',
  borderRadius:6,
  marginTop:0,
  paddingHorizontal:5,
  paddingVertical:10,
},

spnirbutton:{
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#E4F6DF',
  borderColor:'#B2E8A5',
  borderWidth:1,
  borderStyle:'solid',
  borderRadius:6,
  marginTop:0,
},
inputStyle:{
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#E4F6DF',
  borderColor:'#B2E8A5',
  borderWidth:1,
  borderStyle:'solid',
  borderRadius:6,
  marginHorizontal:6,
  width:'20%',
  fontSize:14,
  fontFamily:'PoppinsRegular',
},
buttonPressStyle:{
  borderRadius:6,
},

// Booking Summary Page design

bigbuttonwrapper:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  gap:20,
  paddingHorizontal:25,
  paddingVertical:8,
  flexWrap:'wrap',
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height:0,
  },
  shadowOpacity: 0.10,
  shadowRadius:50,
  elevation:30,
  backgroundColor:'#fff',
  width:'90%',
  marginBottom:25,
  alignSelf:'center',
  borderRadius:8,
},
buttonicon:{
  width:30,
  height:30,
  borderRadius:50,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#fff',
},
summarycontent:{
  flexDirection:'row',
  gap:10,
  flexWrap:'wrap',
  justifyContent:'space-between',
  alignItems:'center',
  marginTop:15,
},
summarylisttitle:{
  color:'#676767',
  fontSize:14,
  fontFamily:'PoppinsRegular',
},
summarydetailswrapper:{
  backgroundColor:'#F6F6F6',
  paddingHorizontal:16,
  paddingVertical:18,
  borderRadius:10,
  width:'90%',
  maxWidth:378,
  alignSelf:'center',
  marginBottom:33,
  marginTop:24,
},
subtotalwrapper:{
  flexDirection:'row',
  gap:10,
  flexWrap:'wrap',
  justifyContent:'space-between',
  alignItems:'center',
  marginVertical:30,
  paddingVertical:18,
  borderTopColor:'#A4A3A3',
  borderTopWidth:1,
  borderStyle:'dashed',

  marginBottom:0,
},
totalwrapper:{
  flexDirection:'row',
  gap:10,
  flexWrap:'wrap',
  justifyContent:'space-between',
  alignItems:'center',
  borderTopColor:'#A4A3A3',
  borderTopWidth:1,
  borderStyle:'solid',
  paddingTop:18
},

// Booking Confirm screen
bookingConfirmbox:{
  width:"90%",
  maxWidth:378,
  alignSelf:'center',
  backgroundColor:'#fff',
  borderRadius:20,
  marginBottom:60
},
bookingConfirmimage:{
  height:227,
  borderTopEndRadius:20,
  borderTopStartRadius:20,
  overflow:'hidden'
},
confirmheadertitle:{
  color:'#232828',
  lineHeight:25,
  fontSize:16,
  fontFamily:'PoppinsSemiBold',
},
bookingConfirmcontent:{
  paddingHorizontal:3,
  paddingVertical:16
},
bookingConfirmsummary:{
  paddingHorizontal:14,
  flexDirection:'row',
  justifyContent:'space-between',
  marginBottom:5
},
qrcodemimage:{
  width:100,
  height:100,
  alignSelf:'center',
  marginTop:10
},
center:{
  textAlign:'center',
  justifyContent:'center'
},

// Booking Tab screen
bookingstatus:{
  width:'100%',
  paddingHorizontal:25,
  flexDirection:'row',
  gap:15,
  alignItems:'center',
  borderTopColor:'red',
  paddingVertical:10
},
statustext:{
  color:'#252525',
  fontFamily:'PoppinsRegular',
  fontSize:14,
  flexDirection:'row',
  gap:5,
  alignItems:'center',
  
},
available:{
  display:'flex',
  width:14,
  height:14,
  backgroundColor:'#04AE0B',
  borderRadius:50,
},
booked:{
  display:'flex',
  width:14,
  height:14,
  backgroundColor:'red',
  borderRadius:50,
},
slotsection:{
  paddingHorizontal:20,
  flexDirection:'row',
  flexWrap:'wrap',
  gap:5,
  alignItems:'center',
  paddingVertical:15,
  borderColor:'#E2E2E2',
  borderWidth:1,
  borderStyle:'solid',
  borderRightWidth:0,
  borderLeftWidth:0,
  marginTop:28

},
slotlist:{
  paddingHorizontal:8,
  borderColor:'#676767',
  borderRadius:4,
  borderWidth:1,
  lineHeight:20,
  alignItems:'center',
  justifyContent:'center',
  paddingVertical:4,
  fontSize:14,color:'#676767'
},

// More Tab screen

profilebar:{
  backgroundColor:'#E4F6DF',
  paddingHorizontal:25,
  paddingVertical:15,
  marginBottom:30
},
profilebox:{
  alignItems:'center'
},
profileimage:{
  width:49,
  height:49,
  borderRadius:15,
  overflow:'hidden'
},
morelinkwrapper:{
  shadowColor: "#B7B7B7",
  shadowOffset: {
    width: 0,
    height:0,
  },
  shadowRadius:50,
  elevation:30,
  backgroundColor:'#fff',
  width:'90%',
  marginBottom:30,
  alignSelf:'center',
  borderRadius:8,
},
morelinkbox:{
  paddingHorizontal:15,
  paddingVertical:20,
  borderBottomColor:'#EFEDED',
  borderBottomWidth:1,
  borderStyle:'solid'
},

profilecomplitation:{
  backgroundColor:'#E4F6DF',
  borderRadius:10,
  paddingHorizontal:26,
  paddingVertical:15,
  marginBottom:5,
  minHeight:85
}



});
export default styles