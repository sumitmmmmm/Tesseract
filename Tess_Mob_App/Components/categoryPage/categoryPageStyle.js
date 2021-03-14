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
    parentContainer:{  
        // paddingHorizontal:'2%',
        // paddingTop:"",
        flexDirection:"row",
        height:"100%",
        backgroundColor: 'white',
        justifyContent:"space-between"
    },
    categoryRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomColor:"red" 
    },
    imageStyle:{
        justifyContent:"center",
        marginHorizontal: '1.5%',
        width:"50%",
    },
})

