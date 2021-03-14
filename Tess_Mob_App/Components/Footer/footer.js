import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image, 
  Text,
  KeyboardAvoidingView,   
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBookOpen, faHandHolding, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import RequestStatus from '../Government/RequestStatus/RequestStatus';
import FooterStyle from './footerStyle';
// import FooterStyle from '../registerProduct/FooterStyle';

const currentDate = new Date();
const date = currentDate.getDate()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getFullYear();

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        

        this.state={
            notificationNumber: 0,
            visibleModal: null,
            footerResponse: {},
            loginType: ''
        }

        AsyncStorage.getItem('login')
        .then(text => {return JSON.parse(text)})
        .then(value => {

            console.log(value)
            if(value.role == 'seller'){
                this.setState({
                    loginType: 'seller'
                })
                AsyncStorage.getItem('selectedBuyerDetails')
                .then(text => {return JSON.parse(text)})
                .then(buyerValue => {
                   let keyChecker = Object.values(buyerValue);
                   if(keyChecker.length > 0){
                       this.setState({
                           notificationNumber: 1,
                           data: buyerValue
                       })
                   }
                })
            }

            else if(value.role == 'buyer'){
                this.setState({
                    loginType: 'buyer'
                })
                AsyncStorage.getItem('notificationForBuyer')
                .then(text => {return JSON.parse(text)})
                .then(sellerValue => {
                    let keyChecker = Object.values(sellerValue);
                    if(keyChecker.length > 0){
                        this.setState({
                            notificationNumber: 1,
                            data: sellerValue
                        })
                    }
                })
            }
        })
        // console.log(this.state.batchNumberForMessage);
    }

    

    gotoMenupage = () => {
        Actions.MenuPageScreen();
    }
    goToPassBook = () => {
        Actions.TransactionHistoryScreen()
    }

    logout = () => {
        Actions.LandingPageScreen()
    }

    showNotifications = () => {
        if(this.state.loginType == 'seller'){
            Actions.SellerShowNotificationsScreen({data: this.state.data})
        }
        else if(this.state.loginType == 'buyer'){
            Actions.BuyerShowNotificationScreen({data: this.state.data})
        }
        
    }
    render() {
     
        
        
        return(
        <View style={FooterStyle.parentContainer}>
        <View style={FooterStyle.imageStyle}>
            <TouchableOpacity onPress={this.gotoMenupage}>
                <FontAwesomeIcon icon={faHome} size={30} style={{color:"#003399"}}/>
            </TouchableOpacity>
        </View>
        
        <View style={FooterStyle.imageStyle} >
            <TouchableOpacity>
                <FontAwesomeIcon icon={faBookOpen} size={30} style={{color:"#003399"}}/>
            </TouchableOpacity>
        </View>
       
        <View style={FooterStyle.imageStyle}>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={this.showNotifications}>
                <FontAwesomeIcon icon={faBell} size={30} style={{color:"#003399"}}/>
                <View>
                    <Text style={{fontSize: 12, color: '#003399', fontWeight: 'bold'}}>{this.state.notificationNumber}</Text>
                    </View>
              
            </TouchableOpacity>
        </View>
        <View style={FooterStyle.imageStyle}>
            <TouchableOpacity onPress={this.logout}>
                <FontAwesomeIcon icon={faSignOutAlt} size={30} style={{color:"#003399"}}/>
            </TouchableOpacity>
        </View>
        </View> 
        )
    }
  }