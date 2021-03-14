import {StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('window').height;

export default StyleSheet.create({
    inputfieldtext: {
        flex:1,
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    rationCategory : {
        width:"30%", 
        fontSize:14, 
        marginTop:'5%',
        color:"#003399",
    },
    dropdownInput:{
        backgroundColor: 'white',
        borderRadius: 10, 
        borderWidth:1, 
        borderColor:"green",
        paddingHorizontal:"3%",
    },
    rationCategoryInModal : {
        width:"22%", 
        fontSize:14, 
        marginTop:'5%',
        marginLeft:"10%",
        color:"white",
    },
    rationInModal : {
        textAlign: "left",
        fontSize:14, 
        marginTop:'5%',
        color:"white",
    },
    modalClosebuttonX : {
        justifyContent: 'center', 
        alignItems: 'center', 
        height: height*0.04, 
        width: height*0.04, 
        borderRadius: height*0.02, 
        backgroundColor: '#fff'
    },
})