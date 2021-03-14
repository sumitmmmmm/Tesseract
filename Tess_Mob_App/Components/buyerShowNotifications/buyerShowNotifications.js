import React,{Component} from 'react';
import {View , Text , TextInput, StyleSheet,TouchableHighlight, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,TouchableOpacity, Image, AsyncStorage, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import Modal from 'react-native-modal'
import Footer from '../Footer/footer';
import Header from '../Header/header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import * as ScheduleTimeData from '../staticData/scheduleTime.json';
import { ScrollView } from 'react-native-gesture-handler';

export default class BuyerShowNotification extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notificationDetails: this.props.data,
            availableItems: [
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


    render(){
        console.log(this.state.notificationDetails)
        return(
            <KeyboardAvoidingView style={{flex:1, backgroundColor: 'white'}}>
                <Header />
                
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                
                <View style={{flex:1}}>
                <Image style={{ position: 'absolute', opacity: 0.4, width: this.width, height: this.height}} source={require('../../assets/notif_background.png')} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '1%', marginTop: this.height*0.02}}>
                        <Image style={{ resizeMode: 'contain',width: 50, height: 50}} source={require('../../assets/wb_govt.png')} />
                    </View>

                   
                              <View style={{}}>
                              {/* <Image style={{ position: 'absolute', opacity: 0.4, width: this.width, height: this.height}} source={require('../../assets/gpay.png')} /> */}
                              <View style={{borderWidth: 2, borderColor: 'black', borderRadius: 20, marginHorizontal: this.width*0.01, backgroundColor: '#fff'}}>
                                  <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: this.height*0.025}}>
                                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Notification From Seller</Text>
                                  </View>
  
                                  <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025}}>
                                      <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Seller Name</Text>
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
                                          <Text style={{fontSize: 15}}>9898989898</Text>
                                      </View>
                                  </View>

                                  <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.01}}>
                                      <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Shop Name</Text>
                                      </View>
                                      <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 15}}>{this.state.notificationDetails.shopName}</Text>
                                      </View>
                                  </View>
  
                                  <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.01}}>
                                      <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Shop Address</Text>
                                      </View>
                                      <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 15}}>{this.state.notificationDetails.shopAddress}</Text>
                                      </View>
                                  </View>

                                  <View style={{justifyContent: 'flex-start', flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.01}}>
                                      <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Requested Items available</Text>
                                      </View>
                                      <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          {this.state.availableItems.map((value, index) => {
                                              return(
                                                  <View key={index}>
                                                      <Text style={{fontSize: 14}}>{value.name}</Text>
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
                                          <Text style={{fontSize: 15}}>&#8377; {this.state.notificationDetails.amount}</Text>
                                      </View>
                                  </View>

                                  <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.01}}>
                                      <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Message from Seller</Text>
                                      </View>
                                      <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 15}}>{this.state.notificationDetails.comments}</Text>
                                      </View>
                                  </View>

                                  <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.01}}>
                                      <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          {/* <Text style={{fontSize: 16, fontWeight: 'bold'}}>Message from Seller</Text> */}
                                      </View>
                                      <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 11, fontStyle: 'italic', fontWeight: 'bold'}}>Click on the link below to pay using your BHIM UPI ID: BHIM Test12</Text>
                                      </View>
                                  </View>

                                  <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.01}}>
                                      <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 16, fontWeight: 'bold'}}></Text>
                                      </View>
                                      <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                      <View>
                                          <TouchableOpacity style={{borderColor: 'black', borderWidth: 2, borderRadius: 15}}>
                                         
                                            <Image style={{ resizeMode: 'contain',width: 80, height: 60}} source={require('../../assets/BHIM.png')} />
                                     
                                        </TouchableOpacity>
                                        </View>
                                        {/* <View style={{paddingHorizontal: this.width*0.03}}>
                                        <TouchableOpacity style={{borderColor: 'black', borderWidth: 2, borderRadius: 15}}>
                                            <Image style={{ resizeMode: 'contain',width: 60, height: 50}} source={require('../../assets/masterCard.png')} />
                                        </TouchableOpacity>
                                        </View>
                                        <View>
                                        <TouchableOpacity style={{borderColor: 'black', borderWidth: 2, borderRadius: 15}}>
                                            <Image style={{ resizeMode: 'contain',width: 60, height: 50}} source={require('../../assets/gpay.png')} />
                                        </TouchableOpacity>
                                        </View> */}
                                      </View>
                                  </View>

                                  <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.01}}>
                                      <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Allocated Time Slot</Text>
                                      </View>
                                      <View style={{flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                          <Text style={{fontSize: 15}}>17:00 - 17:30</Text>
                                      </View>
                                  </View>
                                  <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginHorizontal: this.width*0.025, marginTop: this.height*0.005, paddingBottom: this.height*0.02}}>
                                      <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold'}}>Please be at the shop at the above mentioned time on 30th July, 2020 to pickup your items.</Text>
                                  </View>
  
                                 

                                   
                                  {/* <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: this.width*0.025, marginTop: this.height*0.02}}>
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
                                  </View> */}

                              </View>
                          </View>
                </View>
               
            </TouchableWithoutFeedback>
            {/* <Modal
                isVisible={this.state.displayModal == true}
                animationInTiming={2000}
                animationOutTiming={2000}
                backdropTransitionInTiming={2000}
                backdropTransitionOutTiming={2000}
                >
                {this.modalContent()}
            </Modal> */}
            <Footer />
        </KeyboardAvoidingView>

        )
    }
}