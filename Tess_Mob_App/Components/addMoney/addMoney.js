import React from 'react';
import {View , Text , TextInput, StyleSheet,TouchableHighlight, TouchableOpacity, Image, AsyncStorage, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Dimensions, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
// import MultiSelect from 'react-native-multiple-select';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import global from '../global/globalConfiguration';
import { Dropdown } from 'react-native-material-dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCheckCircle, faHandHolding, faBell, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';


export default class PaymentConfirmationScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            typeOfTransfer: [
                {
                    value: 'Self'
                },
                {
                    value: 'Other'
                }
            ],
            paymentType: '',
            amount: '',
            mobileNumber: '',
            transferProcess1: false,
            transferProcess2: false,
            transferProcess3: false,
            displaySuccessModal: false
        }

        AsyncStorage.getItem('jwtToken')
        .then(response => JSON.parse(response))
        .then(json => {
            this.setState({
                token: json
            })
        })
    }

    width = Dimensions.get('window').width;
    height = Dimensions.get('window').height;

    handleTransferAmount = (value) => {
        this.setState({
            amount: value
        })
    }

    transferMoney = () => {
        this.setState({
            transferProcess1: true,
            transferProcess2: true,
            transferProcess3: true
        })

        fetch( global.ipAddr + global.sendMessage, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            },
            body: JSON.stringify({
                "Mobile": '8697512314',
                'Message': `Amount of Rs.${this.state.amount} has been transferred to ${this.state.mobileNumber}. Transaction Id is XXXXXX2345. Not you? Call our helpline center for assistance.`
            })
        })
        .then(response => response.json())
        .then(json => {
            console.log("TEST", json);
            this.setState({
                displaySuccessModal: true,
                transferProcess1: false,
                transferProcess2: false,
                transferProcess3: false,
                paymentType: ''
            })
        })
        .catch(error => console.log(error))
    }

    handlemobileNumber = (value) => {
        this.setState({
            mobileNumber: value
        })
    }

    successModal = () => {
        return(
            <View style={{justifyContent: 'center', backgroundColor: '#2C9E3F', borderRadius: 40, height: this.height*0.4}}>
                 <View style={{flex:1, alignItems: 'flex-end', marginRight: '5%', marginTop: '5%'}}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: this.height*0.04, width: this.height*0.04, borderRadius: this.height*0.02, backgroundColor: '#fff'}} onPress={() => {this.setState({displaySuccessModal: false,  amount: ''})}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red'}}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{ resizeMode: 'contain',width: 50, height: 50}} source={require('../../assets/wb_govt.png')} />
                </View>
                
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesomeIcon icon={faCheck} size={50} style={{color:"#fff"}}/>
                </View>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center'}}>Payment confirmed!</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '4%'}}>
                    <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 10, backgroundColor: '#fff'}} onPress={() => {this.setState({displaySuccessModal: false, amount: ''})}}>
                        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15, color: '#2C9E3F'}}>Close Window</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    
    render(){
        return(
            <KeyboardAvoidingView style={{flex: 1}}>
               
                <Header/>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={{flex:1}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '3%'}}>
                                <Image style={{ resizeMode: 'contain',width: 50, height: 50}} source={require('../../assets/wb_govt.png')} />
                            </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: '5%'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Add Money Page </Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: '5%'}}>
                            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Add Amount To: </Text>
                            </View>
                            <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                            <Dropdown
                                placeholder='Transfer Type'
                                data={this.state.typeOfTransfer}
                                fontSize={14}
                                itemColor={"black"}
                                baseColor={"black"}
                                selectedItemColor={"black"}
                                containerStyle={{
                                    justifyContent: 'center',
                                    backgroundColor: '#fff',
                                    borderRadius: 0.01*this.height, 
                                    borderWidth:1, 
                                    borderColor:"black",
                                    width: this.width*0.5,
                                    paddingHorizontal:"3%",
                                    }}
                                textColor={"black"}
                                dropdownMargins={{min:0,max:0}}
                                dropdownOffset={{top:0,left:2}}
                                inputContainerStyle={{
                                    borderBottomColor: 'transparent',
                                    marginTop:0.01*this.height,
                                    justifyContent: 'center'
                                    }}
                                pickerStyle={{paddingHorizontal:0.02*this.width}}
                                onChangeText={(value) => {this.setState({paymentType : value, mobileNumber: '8697512314'})}}
                            />
                            </View>
                        </View>

                        {this.state.paymentType == 'Self' ? 
                        
                        <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: '6%', marginTop: '5%', borderRadius: 10, borderWidth: 1}}>
                            
                            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '5%'}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Recipient Details</Text>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: '2%'}}>
                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: '2%'}}>
                                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>Mobile Number: </Text>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', color: 'black'}}>8697512314</Text>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: '2%'}}>
                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start',  paddingHorizontal: '2%'}}>
                                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>Amount(in Rs.): </Text>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center', width: this.width*0.4}}>
                                    
                                <TextInput
                                    style={{borderColor: 'black', backgroundColor: '#fff', color: 'black', borderRadius:10, borderWidth: 1, textAlign: 'center', width: '80%', height: this.height*0.06}}
                                    placeholder='Enter Amount in Rs.'
                                    value={this.state.amount}
                                    onChangeText={this.handleTransferAmount}
                                    keyboardType="number-pad"
                                />
                                </View>
                            </View>

                            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '4%'}}>
                                <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 10, backgroundColor: '#2C9E3F'}} onPress={this.transferMoney}>
                                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15, color: '#fff'}}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>:null
                        }

                        {this.state.paymentType == 'Other' ? 
                            
                            <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: '6%', marginTop: '5%', borderRadius: 10, borderWidth: 1}}>
                                
                                <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '5%'}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Recipient Details</Text>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: '2%'}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: '2%'}}>
                                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Mobile Number: </Text>
                                    </View>
                                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center', width: this.width*0.4}}>
                                        
                                        <TextInput
                                            style={{borderColor: 'black', backgroundColor: '#fff', color: 'black', borderRadius:10, borderWidth: 1, textAlign: 'center', width: '80%', height: this.height*0.06}}
                                            placeholder='Enter Mobile Number'
                                            value={this.state.mobileNumber}
                                            onChangeText={this.handlemobileNumber}
                                            keyboardType="number-pad"
                                        />
                                    </View>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: '2%'}}>
                                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start',  paddingHorizontal: '2%'}}>
                                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Amount(in Rs.): </Text>
                                    </View>
                                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center', width: this.width*0.4}}>
                                        
                                    <TextInput
                                        style={{borderColor: 'black', backgroundColor: '#fff', color: 'black', borderRadius:10, borderWidth: 1, textAlign: 'center', width: '80%', height: this.height*0.06}}
                                        placeholder='Enter Amount in Rs.'
                                        value={this.state.amount}
                                        onChangeText={this.handleTransferAmount}
                                        keyboardType="number-pad"
                                    />
                                    </View>
                                </View>

                                <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '4%'}}>
                                    <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 10, backgroundColor: '#2C9E3F'}} onPress={this.transferMoney}>
                                        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15, color: '#fff'}}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>:null
                            }

                        

                    </View>
                    {this.state.transferProcess1 == true ? 
                    
                    <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center',paddingVertical: '5%'}}>
                        <View style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <FontAwesomeIcon icon={faCheckCircle} size={15} style={{color:"#2C9E3F"}}/>
                            </View>
                            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center'}}>Checking Status with bank...</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <Bars size={8} color= 'black' />
                            </View>
                    
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '1%'}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Pulse size={8} color = 'black' />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Pulse size={8} color = 'black' />
                        </View>
                        
                        </View>
                    </View>: null
                    }

                    {this.state.transferProcess2 == true ? 
                    
                    <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center',paddingVertical: '5%'}}>
                        <View style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <FontAwesomeIcon icon={faCheckCircle} size={15} style={{color:"#2C9E3F"}}/>
                            </View>
                            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center'}}>Confirming Response from bank...</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <Bars size={8} color= 'black' />
                            </View>
                    
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '1%'}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Pulse size={8} color = 'black' />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Pulse size={8} color = 'black' />
                        </View>
                        
                        </View>
                    </View>: null
                    }

                    {this.state.transferProcess3 == true ? 
                    
                  
                        <View style={{flex: 1, paddingVertical: '1%', justifyContent: 'center',alignItems: 'flex-start', flexDirection: 'row'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <FontAwesomeIcon icon={faCheckCircle} size={15} style={{color:"#2C9E3F"}}/>
                            </View>
                            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center'}}>Confirming transaction...</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <Bars size={8} color= 'black' />
                            </View>
                    
                        </View>
                    : null
                    }
                </View>
                </TouchableWithoutFeedback>
                <Modal
                    isVisible={this.state.displaySuccessModal == true}
                    animationInTiming={2000}
                    animationOutTiming={2000}
                    backdropTransitionInTiming={2000}
                    backdropTransitionOutTiming={2000}
                    >
                    {this.successModal()}
                </Modal>
                <Footer/>
            </KeyboardAvoidingView>
        )
    }
}