import React,{Component} from 'react';
import {View , Text , TextInput, StyleSheet,TouchableHighlight, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,TouchableOpacity, Image, AsyncStorage, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import Modal from 'react-native-modal'
import Footer from '../Footer/footer';
import Header from '../Header/header';
import { ScrollView } from 'react-native-gesture-handler';

export default class SellerSeachForBuyer extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <View style={{justifyContent: 'center'}}>
                <Header />
            </View>
        )
    }

}