import React,{Component} from 'react';
import {View , Text , TextInput, StyleSheet,TouchableHighlight, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,TouchableOpacity, Image, AsyncStorage, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import Modal from 'react-native-modal'
import Footer from '../Footer/footer';
import Header from '../Header/header';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

export default class SellerSeachForBuyer extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    height = Dimensions.get("window").height;
    width = Dimensions.get("window").width;

    render(){
        return(
            <View style={{}}>
                <View style={{justifyContent: 'center'}}>
                    <Header />
                </View>

                <View style={{justifyContent: 'center', borderRadius: 5, borderWidth: 3}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: this.height*0.02}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Select Shopping Style</Text>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: this.height*0.02}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={this.registerBuyer}>
                                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#3333CC', height: 60, width: 60, borderRadius: 30}}>
                                    <FontAwesomeIcon icon={faUser} size={30} style={{color:"#ffff"}}/>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{color: '#3333CC', fontWeight: 'bold'}}>Single Shopping</Text>
                                </View>                          
                            </TouchableOpacity>
                        </View> 

                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={this.registerBuyer}>
                                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#3333CC', height: 60, width: 60, borderRadius: 30}}>
                                    <FontAwesomeIcon icon={faUsers} size={30} style={{color:"#ffff"}}/>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{color: '#3333CC', fontWeight: 'bold'}}>Group Shopping</Text>
                                </View>                          
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
            </View>
        )
    }

}