import React from 'react';
import { Dimensions, Text, ScrollView ,View,Image,TouchableOpacity } from 'react-native';
import MenuPageStyle from './menuPageStyle';
import { Actions } from 'react-native-router-flux';
// import MultiSelect from 'react-native-multiple-select';
import Footer from '../Footer/footer';
import Header from '../Header/header';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class MenuPageScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    registerBuyer = () => {
        Actions.RegisterBuyer();
        
    }

    registerSeller = () => {
        Actions.RegisterSeller();
        // alert("Money Paid.")
    }  

    render ( ) {
        
        return(
            <View style={{flex:1, backgroundColor: 'white'}}>
                {/* <Header/> */}
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    {/* <Image style={{ resizeMode: 'contain',width: 50, height: 50}} source={require('../../assets/wb_govt.png')} /> */}
                </View>
                <ScrollView style={{ marginTop:'0%'}}>
                    <View style={{flex: 5, justifyContent: 'center', alignItems: 'center', marginTop:0.05*height}}>
                        <TouchableOpacity onPress={this.registerBuyer} style={MenuPageStyle.buttonStyle}>
                            <View style={{justifyContent: 'center', alignItems: 'center', height:width*.3,width:width*.7,backgroundColor:"#003399"}}>
                                <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center',color:"white"}}>Sign up as Buyer</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 5, justifyContent: 'center', alignItems: 'center', marginTop:0.05*height, borderColor:"red"}}>
                        <TouchableOpacity onPress={this.registerSeller} style={MenuPageStyle.buttonStyle}>
                            <View style={{justifyContent: 'center', alignItems: 'center', height:width*.3,width:width*.7,backgroundColor:"#003399"}}>
                                <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center',color:"white"}}>Sign up as Seller</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
                <Footer/>
            </View>
        )
    }
}