import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    productDetailsHeader:{
        backgroundColor: 'white',
        color: '#003399',
        fontWeight: 'bold',
        fontSize:21, 
        // alignContent: 'flex-start',
        textAlign:"center",
        marginLeft:'5%',
        // fontFamily : "Georgia"
    },
    buttonStyle: {
        borderRadius: 80 ,
        borderBottomColor : '#003399',
        backgroundColor: 'white'
    },
    buttonText:{
        fontSize: 22, 
        fontWeight: 'bold', 
        color: 'black',
        paddingTop:"3%",
        textAlign : "center"
        // fontFamily : 'georgia',
    },
    buttonTextForMenu:{
        fontSize: 15, 
        fontWeight: 'bold', 
        color: 'black',
        paddingTop:"3%",
        textAlign : "center"
        // fontFamily : 'georgia',
    },
})