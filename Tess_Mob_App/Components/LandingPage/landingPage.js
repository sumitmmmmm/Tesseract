import React,{Component} from 'react';
import {View , Text , TextInput, StyleSheet,TouchableHighlight, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,TouchableOpacity, Image, AsyncStorage, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import Modal from 'react-native-modal'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


export default class LandingPageScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalDisplayer: false,
            displaySignUpModal: false,
            loginValues: [
                {
                    id: '9090909090',
                   
                },
                {
                    id: '9898989898',
                    
                },
                {
                    id: '8787878787',
                  
                },
                {
                    id: '7676767676',
                   
                }
            ],
            OTP: '',
            OTPView: false,
            userid: '',
            password:'',
            selectedRole: '',
            flaggerForLogin: false,
            roleValues: [
                {
                    value: 'Government'
                },
                {
                    value: 'Citizen'
                }
            ]
        }
        
    }

    height = Dimensions.get("window").height;
    width = Dimensions.get("window").width;

    onChangeValues = (value) => {
        this.setState({
            selectedRole: value
        })
    }

    handleUserid = (value) => {
        this.setState({
            userid: value
        })
    }
    handlePassword = (value) => {
        this.setState({
            password: value
        })
    }
    login = () => {

        this.state.loginValues.map((value, index) => {
            if(value.id == this.state.userid)
            {
                this.state.flaggerForLogin = true
                AsyncStorage.setItem("login", JSON.stringify(value))
                .then(t => {
                    
                        Actions.SellerSeachForBuyerScreen();
                
                    
                });
                
            }
        })

        if(this.state.flaggerForLogin == false){
            alert('User not registered')
        }

    //    Actions.BuyerSearchScreen()
    }
    register = () => {
        Actions.MenuPageScreen();
    }
    handleOTP = (value) => {
        this.setState({
            OTP: value
        })
    }

    submitOTP = () => {
        this.setState({
            modalDisplayer: true
        })
    }

    registerBuyer = () => {
        this.setState({
            displaySignUpModal: false
        })
        Actions.RegisterBuyer();
    }

    registerSeller = () => {
        this.setState({
            displaySignUpModal: false
        })
        Actions.RegisterSeller();
    }

    signUpModal = () => {
        return(
            <View style={{justifyContent:"center", backgroundColor: '#99FFFF', borderRadius: 10}}>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: this.height*0.04, width: this.height*0.04, backgroundColor: '#fff'}} 
                                    onPress={() => {this.setState({displaySignUpModal: false})}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red'}}>X</Text>
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>

                                    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '2%'}}>
                                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mobile Number</Text>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '1%', width: this.width*0.9}}>
                                        <TextInput
                                            style={{borderColor: 'gray', borderRadius:10, borderWidth: 1, width: '60%', height: this.height*0.05, textAlign: 'center', fontWeight: 'bold', color: 'black'}}
                                            placeholder='Enter Mobile No.'
                                            placeholderTextColor="grey"
                                            value={this.state.userid}
                                            // onChangeText={this.handleUserid}
                                            keyboardType="number-pad"
                                        />
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '2%'}}>
                                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Password</Text>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '1%', width: this.width*0.9}}>
                                        <TextInput
                                            style={{borderColor: 'gray', borderRadius:10, borderWidth: 1, width: '60%', height: this.height*0.05, fontWeight: 'bold', textAlign: 'center', color: 'black'}}
                                            placeholder='Enter Password'
                                            placeholderTextColor="grey"
                                            value={this.state.password}
                                            // onChangeText={this.handlePassword}
                                            secureTextEntry={true}
                                        />
                                    </View>
                                    
                                <View style={{justifyContent: 'center', alignItems: 'flex-end', paddingVertical: '4%'}}>
                                    <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 10, backgroundColor: 'green'}} onPress={this.login}>
                                        <Text style={{color: '#fff', textAlign:"center",fontWeight: 'bold', fontSize: 15}}>Signup</Text>
                                    </TouchableOpacity>
                                </View>
                                </View>

                {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>SignUp Options</Text>
                </View> */}

                {/* <View style={{justifyContent: 'center', alignItems: 'center', marginTop: this.height*0.02, flexDirection: 'row', paddingVertical: '5%'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={this.registerBuyer}>
                            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#3333CC', height: 60, width: 60, borderRadius: 30}}>
                                <FontAwesomeIcon icon={faShoppingCart} size={30} style={{color:"#ffff"}}/>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: '#3333CC', fontWeight: 'bold'}}>SignUp as Buyer</Text>
                            </View>                          
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={this.registerSeller}>
                            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#3333CC', height: 60, width: 60, borderRadius: 30}}>
                                <FontAwesomeIcon icon={faShoppingBasket} size={30} style={{color:"#ffff"}}/>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: '#3333CC', fontWeight: 'bold'}}>SignUp as Seller</Text>
                            </View>                          
                        </TouchableOpacity>
                    </View>
                </View> */}
            </View>
        )
    }

    render(){
        return(
            <KeyboardAvoidingView style={{flex:1, backgroundColor: 'white'}}>
            <Image style={{ position: 'absolute', opacity: 0.4, width: this.width, height: this.height}} source={require('../../assets/images/BKG.jpg')} />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{flex:1}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            
                            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '1%'}}>
                                
                                <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: '5%'}}>
                                    <Text style={{fontSize: 32, fontWeight: 'bold'}}>TESSERACT</Text>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Online</Text>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 3, borderRadius: 50}}>

                                    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '2%'}}>
                                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mobile Number</Text>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '1%', width: this.width*0.9}}>
                                        <TextInput
                                            style={{borderColor: 'gray', borderRadius:10, borderWidth: 1, width: '60%', height: this.height*0.05, textAlign: 'center', fontWeight: 'bold', color: 'black'}}
                                            placeholder='Enter Mobile No.'
                                            placeholderTextColor="grey"
                                            value={this.state.userid}
                                            onChangeText={this.handleUserid}
                                            keyboardType="number-pad"
                                        />
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '2%'}}>
                                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Password</Text>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '1%', width: this.width*0.9}}>
                                        <TextInput
                                            style={{borderColor: 'gray', borderRadius:10, borderWidth: 1, width: '60%', height: this.height*0.05, fontWeight: 'bold', textAlign: 'center', color: 'black'}}
                                            placeholder='Enter Password'
                                            placeholderTextColor="grey"
                                            value={this.state.password}
                                            onChangeText={this.handlePassword}
                                            secureTextEntry={true}
                                        />
                                    </View>
                                    
                                <View style={{justifyContent: 'center', alignItems: 'flex-end', paddingVertical: '4%'}}>
                                    <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 10, backgroundColor: 'green'}} onPress={this.login}>
                                        <Text style={{color: '#fff', textAlign:"center",fontWeight: 'bold', fontSize: 15}}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                                </View>
                                
                                <View style={{justifyContent: 'center', alignItems: 'flex-start', paddingTop: '8%'}}>
                                    <View style={{justifyContent: 'flex-start', paddingVertical: '1%'}}>
                                        <Text style={{fontSize: 10, fontStyle: 'italic', fontWeight: 'bold'}}>Not registered?</Text>
                                    </View>
                                    <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '10%', borderRadius: 10, backgroundColor: 'green'}} onPress={() => {this.setState({displaySignUpModal: true})}}>
                                        <Text style={{color: '#fff', textAlign:"center", fontWeight: 'bold', fontSize: 15}}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                   
                </TouchableWithoutFeedback>

                <Modal
                        isVisible={this.state.displaySignUpModal}
                        animationInTiming={2000}
                        animationOutTiming={2000}
                        backdropTransitionInTiming={2000}
                        backdropTransitionOutTiming={2000}
                    >
                    {this.signUpModal()}
                </Modal>
            </KeyboardAvoidingView>
        
        )
    }
}