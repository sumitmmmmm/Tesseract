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
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'black',
        paddingTop:"2.5%",
        textAlign : "center"
    },
    amount:{
        fontSize: 18, 
        fontWeight: 'bold', 
        color: 'black',
        paddingTop:"2.5%",
        alignItems:"flex-end",
        // textAlign : "right"
    },
    balanceText : {
        color : "#2C9E3F",
        fontSize: 24,
        paddingTop:"2.5%",
        textAlign : "center",
        fontWeight: 'bold',
    },
    tnxDetails : {
        fontSize: 12, 
        fontWeight: 'bold', 
        color: 'black',
        paddingTop:"2.5%",
        textAlign : "center"
    },
    tnxHashDetails : {
        fontSize: 9,
        paddingTop:"2.5%",
        fontWeight: 'bold',
    }
})