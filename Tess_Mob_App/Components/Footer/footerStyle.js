import React,{StyleSheet} from 'react-native';
// // import Dimentions from 'Dimensions';
// import Constants from 'expo-constants';
// import { Reducer } from 'react-native-router-flux';
// import { color } from 'd3-color';
// const DEVICE_WIDTH = Dimentions.get('window').width;
// const DEVICE_HEIGHT = Dimentions.get('window').height;
export default StyleSheet.create({
    container: {
        flex: 1,
      },
      page: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: 'red',
      },
      pageText: {
        fontSize: 21,
        color: 'white',
      },
      rectButton: {
        height: 60,
        padding: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: 'white',
      },
      rectButtonText: {
        backgroundColor: 'transparent',
      },
      drawerContainer: {
    
        // flex: 1,
        paddingTop: '10%',
      },
      pageInput: {
        height: 60,
        padding: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#eee',
      },
      drawerText: {
        margin: 10,
        fontSize: 15,
        textAlign: 'left',
      },
      imageStyle:{
        justifyContent:"center",
        marginHorizontal: '1.5%'
      },
      textView:{
        justifyContent:"center",
        marginTop: '2.5%'
      },
      textStyle:{
        fontSize:16,
        fontWeight: 'bold'
      },
      parentContainer:{
        
        paddingHorizontal:'6%',
        flexDirection:"row",
        height:"8%",
        backgroundColor: '#E8E8E8',
        justifyContent:"space-between"
      }, 
      loginFormNextContainer:{
          backgroundColor: '#d93954',
          alignItems:"center",
          height:40,
          width:100,
          justifyContent:'center',
          paddingHorizontal:'4%',
          borderRadius:10, 
          // marginBottom:'2%',
          // paddingVertical:'2%'
      },
})

