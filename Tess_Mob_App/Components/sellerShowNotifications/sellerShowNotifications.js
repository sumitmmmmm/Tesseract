import React,{Component} from 'react';
import {View , Text , TextInput, StyleSheet, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,TouchableOpacity, Image, AsyncStorage, Dimensions, CheckBox} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import Modal from 'react-native-modal'
import Footer from '../Footer/footer';
import Header from '../Header/header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import * as ScheduleTimeData from '../staticData/scheduleTime.json';
import { ScrollView } from 'react-native-gesture-handler';

export default class SellerShowNotifications extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.data)
        this.state = {
            notificationDetails: this.props.data,
            amount: '',
            comments: '',
            modalSelector: 0,
            displayModal: false,
            HourData : ScheduleTimeData.HourData,
            MinutesData : ScheduleTimeData.MinutesData,
            selectedMinutes: '',
            selectedHours: '',
            requestedItems: [
                {
                    name: 'Rice',
                    selected: false,
                   
                },
                {
                    name: 'Wheat',
                    selected: false,
                    
                },
                {
                    name: 'Pulses',
                    selected: false,
                    
                },
                {
                    name: 'Cooking Oil',
                    selected: false,
                    
                }
            ],
        }
    }

    height = Dimensions.get("window").height;
    width = Dimensions.get("window").width;

    handleComments = (value) => {
        this.setState({
            comments: value
        })
    }

    handleAmount = (value) => {
        this.setState({
            amount: value
        })
    }


    confirmNotification = () => {

        let notif = {
            shopName: this.state.notificationDetails.shopName,
            shopAddress: this.state.notificationDetails.shopAddress,
            name: this.state.notificationDetails.name,
            id: this.state.notificationDetails.id,
            comments: this.state.comments,
            amount: this.state.amount
            // pickupTime: `${this.state.selectedHours}: ${this.state.selectedMinutes}`
        }

        AsyncStorage.setItem('notificationForBuyer', JSON.stringify(notif))
        .then(value => {
            AsyncStorage.setItem('selectedBuyerDetails', '')
            .then(value => {
                this.setState({
                    modalSelector: 1,
                    displayModal: true
                })
            })
        })

       
    }

    selectItems = (index) => {
        this.state.requestedItems[index].selected = !this.state.requestedItems[index].selected;
        this.forceUpdate();
    }

    cancelNotification = () => {
        AsyncStorage.setItem('selectedBuyerDetails', '')
        .then(value => {
            this.setState({
                modalSelector: 2,
                displayModal: true
            })
        })
    }

    modalContent = () => {
        return(
            <View style={{justifyContent:"center", backgroundColor: '#003399', borderRadius: 40}}>
                <View style={{alignItems: 'flex-end', marginRight: '5%', marginTop:"2%"}}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: this.height*0.04, width: this.height*0.04, borderRadius: this.height*0.02, backgroundColor: '#fff'}} 
                                    onPress={() => {this.setState({displayModal: false})}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red'}}>X</Text>
                    </TouchableOpacity>
                </View>


                {this.state.modalSelector == 1 ? 
                <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: this.height*0.1}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesomeIcon icon={faCheckCircle} size={80} style={{color:'green'}}/>
                    </View>
                    <View style={{marginTop: this.height*0.02}}>
                        <Text style={{color: '#fff', fontSize: 13, fontWeight: 'bold'}}>Successfully accepted the request from buyer</Text>
                    </View>
                </View>:null
            
                }

                {this.state.modalSelector == 2 ? 
                    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: this.height*0.1}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <FontAwesomeIcon icon={faCheckCircle} size={80} style={{color:'red'}}/>
                        </View>
                        <View style={{marginTop: this.height*0.02}}>
                            <Text style={{color: '#fff', fontSize: 13, fontWeight: 'bold'}}>Successfully cancelled the request from seller</Text>
                        </View>
                    </View>:null
                
                }
                
            </View>
        )
        
    }


    render(){
        return(
            <KeyboardAvoidingView style={{flex:1, backgroundColor: 'white'}}>
                
                
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{flex:1, marginTop: this.height*0.04}}>
                    
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '10%'}}>
                            <Image style={{ resizeMode: 'contain',width: 80, height: 80}} source={require('../../assets/wb_govt.png')} />
                        </View>

                        {this.state.modalSelector == 0 ? 
                                  <View>
                            
                                  <View style={{borderWidth: 2, borderColor: 'black', borderRadius: 20}}>
                                      <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: this.height*0.025}}>
                                          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Confirm/Reject the Order</Text>
                                      </View>
      
                                      <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025}}>
                                          <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Buyer Name</Text>
                                          </View>
                                          <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                              <Text style={{fontSize: 15}}>{this.state.notificationDetails.name}</Text>
                                          </View>
                                      </View>
      
                                      <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.01}}>
                                          <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Contact</Text>
                                          </View>
                                          <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                              <Text style={{fontSize: 15}}>{this.state.notificationDetails.id}</Text>
                                          </View>
                                      </View>

                                      <View style={{ flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.01}}>
                                          <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Buyer Requested Items</Text>
                                              <Text style={{fontSize: 12, fontStyle: 'italic'}}>*Select Items available in shop</Text>
                                          </View>
                                          <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                              {this.state.requestedItems.map((value, index) => {
                                                  return(
                                                      <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginRight: this.width*0.25}}>
                                                          <View style={{flex: 4, justifyContent: 'flex-start'}}>
                                                          <Text style={{fontSize: 14}}>{value.name}</Text>
                                                          </View>
                                                          <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                                          <CheckBox 
                                                            value={value.selected}
                                                            onChange={() => this.selectItems(index)}
                                                          />
                                                          </View>
                                                      </View>
                                                  )
                                              })}
                                            
                                          </View>
                                      </View>

                                      <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.01}}>
                                          <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Amount</Text>
                                          </View>
                                          <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <TextInput
                                            style={{borderColor: 'gray', borderRadius:10, borderWidth: 1, width: '100%', height: this.height*0.05, textAlign: 'center', fontWeight: 'bold', color: 'black'}}
                                            placeholder='Enter Amount in &#8377;'
                                            placeholderTextColor="grey"
                                            value={this.state.amount}
                                            onChangeText={this.handleAmount}
                                            keyboardType="number-pad"
                                            
                                        />
                                          </View>
                                      </View>
      
                                      <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.01}}>
                                          <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Comments</Text>
                                          </View>
                                          <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <TextInput
                                            style={{borderColor: 'gray', borderRadius:10, borderWidth: 1, width: '100%', height: this.height*0.05, textAlign: 'center', fontWeight: 'bold', color: 'black'}}
                                            placeholder=''
                                            placeholderTextColor="grey"
                                            value={this.state.comments}
                                            onChangeText={this.handleComments}
                                            
                                        />
                                          </View>
                                      </View>

                                        {/* <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.020, marginTop: this.height*0.01}}>
                                            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Select Pickup Time</Text>
                                    </View>
                                    <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row', marginLeft: this.width*0.01}}>
                                        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
                                            <Dropdown
                                            placeholder='00'
                                            data={this.state.HourData}
                                            fontSize={14}
                                            itemColor={"black"}
                                            baseColor={"black"}
                                            selectedItemColor={"black"}
                                            
                                            containerStyle={{
                                                justifyContent: 'center',
                                                backgroundColor: '#fff',
                                                borderRadius: 10, 
                                                borderWidth:1, 
                                                borderColor:"gray",
                                                width: this.width*0.15,
                                                paddingHorizontal:0.01*this.width,
                                                marginVertical:0.01 *this.height,
                                                }}
                                            textColor={"black"}
                                            dropdownMargins={{min:0,max:0}}
                                            dropdownOffset={{top:0,left:2}}
                                            inputContainerStyle={{
                                                borderBottomColor: 'transparent',
                                                marginTop:0.01*this.height,
                                                justifyContent: 'center'
                                                }}
                                            pickerStyle={{paddingHorizontal:0.01*this.width}}
                                            onChangeText={(value) => {this.setState({selectedHours : value})}}
                                        />
                                        <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 0.005*this.height}}>
                                            <Text style={{fontSize: 13}}>hrs</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                        <Dropdown
                                            placeholder='00'
                                            data={this.state.MinutesData}
                                            fontSize={14}
                                            itemColor={"black"}
                                            baseColor={"black"}
                                            selectedItemColor={"black"}
                                            
                                            containerStyle={{
                                                justifyContent: 'center',
                                                backgroundColor: '#fff',
                                                borderRadius: 10, 
                                                borderWidth:1, 
                                                borderColor:"gray",
                                                width: this.width*0.15,
                                                paddingHorizontal:0.01*this.width,
                                                marginVertical:0.01 *this.height,
                                                }}
                                            textColor={"black"}
                                            dropdownMargins={{min:0,max:0}}
                                            dropdownOffset={{top:0,left:2}}
                                            inputContainerStyle={{
                                                borderBottomColor: 'transparent',
                                                marginTop:0.01*this.height,
                                                justifyContent: 'center'
                                                }}
                                            pickerStyle={{paddingHorizontal:0.01*this.width}}
                                            onChangeText={(value) => {this.setState({selectedMinutes : value})}}
                                        />
                                        <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 0.005*this.height}}>
                                            <Text style={{fontSize: 13}}>mins</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>     
       */}
                                      <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: this.width*0.025, marginTop: this.height*0.02}}>
                                          <Text style={{fontSize:10, fontStyle: 'italic'}}>*Click on Confirm to accept the request</Text>
                                      </View>
      
                                      <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: this.width*0.025}}>
                                          <Text style={{fontSize:10, fontStyle: 'italic'}}>*Click on Reject to cancel the request</Text>
                                      </View>
      
                                      <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: this.height*0.03}}>
                                          
                                          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: '4%'}}>
                                              <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 10, backgroundColor: 'green'}} onPress={this.confirmNotification}>
                                                  <Text style={{color: '#fff', textAlign:"center",fontWeight: 'bold', fontSize: 15}}>Confirm</Text>
                                              </TouchableOpacity>
                                          </View>
      
                                          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: '4%'}}>
                                              <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '8%', borderRadius: 10, backgroundColor: 'red'}} onPress={this.cancelNotification}>
                                                  <Text style={{color: '#fff', textAlign:"center",fontWeight: 'bold', fontSize: 15}}>Reject</Text>
                                              </TouchableOpacity>
                                          </View>
                                      </View>
      
                                      
      
      
                                  </View>
      
      
      
                              </View>:
                              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                  <Text style={{fontSize:18, fontWeight: 'bold'}}>No notifications</Text>
                              </View>
                    
                        }
                      
                    </View>
                   
                </TouchableWithoutFeedback>
                <Modal
                    isVisible={this.state.displayModal == true}
                    animationInTiming={2000}
                    animationOutTiming={2000}
                    backdropTransitionInTiming={2000}
                    backdropTransitionOutTiming={2000}
                    >
                    {this.modalContent()}
                </Modal>
                <Footer />
            </KeyboardAvoidingView>
        )
    }
}