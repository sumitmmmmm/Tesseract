import React from 'react';
import { Dimensions, View, ScrollView, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import registerSellerStyle from './registerSellerStyle';
import global from '../global/globalConfiguration';
import Footer from '../Footer/footer';
import Header from '../Header/header';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class RegisterBuyer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            mobileNumber :"",
            verifyMobNumber : false,
            displayModal:false,
            OTP : "",
          }
    }

    submitDetails =() => {
        this.setState({
            verifyMobNumber : false,
            mobileNumber : "",
            OTP: "", 
            name : "",
            displayModal : true,
        })
    }

    verifyMobNumber =() => {
        this.setState({
            verifyMobNumber : true,
        })
    }
    showDetialsInModal  = () => {
        return(
            <View style={{justifyContent:"center", backgroundColor: '#003399', borderRadius: 40, height: height*0.3}}>
                <View style={{alignItems: 'flex-end', marginRight: '5%', marginTop:"2%"}}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: height*0.04, width: height*0.04, borderRadius: height*0.02, backgroundColor: '#fff'}} 
                                    onPress={() => {this.setState({displayModal: false})}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red'}}>X</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{height:"70%"}}>
                    <View style={{ padding: "10%", flex:1, justifyContent:"center"}}>
                        <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center', color:"white"}}>
                                Mobile Number Verified.
                        </Text>
                        <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center', color:"white"}}>
                             Buyer Registration Successful.
                        </Text>                     
                    </View>                    
                </ScrollView>
            </View>
        )
    }

    render ( ) {
        
        return(
            <View style={{flex:1, backgroundColor: 'white'}}>
                <Header name={"Buyer"}/>

                <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '1%', marginTop: height*0.01}}>
                            <Image style={{ resizeMode: 'contain',width: 50, height: 50}} source={require('../../assets/wb_govt.png')} />
                        </View>

                <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: height*0.02}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Register Buyer Page</Text>
                </View>

                

                <ScrollView style={{ marginTop:'0%'}}>
                    <View style={{borderRadius: 10, borderWidth: 2, marginHorizontal: width*0.01}}>
                    <View style={{ height: 0.09*height, marginHorizontal: 0.05*width, marginTop: 0.02*height }}>
                        <View style = {{height: 0.035*height, justifyContent: 'center', backgroundColor: '#DCDCDC'}} >
                            <Text style={registerSellerStyle.inputfieldtext}>Name :</Text>
                        </View>
                        <View style = {{flex:1}}>
                        <TextInput
                            style={{borderColor: 'green', borderRadius:10, borderWidth: 1, width: '100%', height: height*0.05, paddingHorizontal:"3%"}}
                            placeholder='Enter Name'
                            onChangeText={(text) => this.setState({name: text})}
                        />
                        </View>
                    </View>                  
                    <View style={{ height: 0.09*height, marginHorizontal: 0.05*width, marginTop: '5%' }}>
                        <View style = {{height: 0.035*height, justifyContent: 'center', backgroundColor: '#DCDCDC'}} >
                            <Text style={registerSellerStyle.inputfieldtext}>Mobile Number :</Text>
                        </View>
                        <View style = {{flex:1}}>
                        <TextInput
                            style={{borderColor: 'green', borderRadius:10, borderWidth: 1, width: '100%', height: height*0.05, paddingHorizontal:"3%"}}
                            placeholder='Enter Mobile Number'
                            onChangeText={(text) => this.setState({mobileNumber: text})}
                            keyboardType= "number-pad"
                            maxLength={10}
                            minLength={10}
                        />
                        </View>
                    </View>
                    <View style={{height: 0.09*height, flex: 5, justifyContent: 'center', alignItems: 'center', marginTop:"8%"}}>
                        <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 10, backgroundColor: '#003399'}} 
                                        onPress={this.verifyMobNumber}>
                            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Verify Mob. No</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.verifyMobNumber ? 
                        <View>
                            <View style={{ height: 0.09*height, marginHorizontal: 0.05*width, marginTop: '15%' }}>
                                <View style = {{height: 0.035*height, justifyContent: 'center', backgroundColor: '#DCDCDC'}} >
                                    <Text style={registerSellerStyle.inputfieldtext}>Verify OTP :</Text>
                                </View>
                                <View style = {{flex:1}}>
                                <TextInput
                                    style={{borderColor: 'green', borderRadius:10, borderWidth: 1, width: '100%', height: height*0.05, paddingHorizontal:"3%"}}
                                    placeholder='Enter OTP'
                                    onChangeText={(text) => this.setState({OTP: text})}
                                    keyboardType= "number-pad"
                                    maxLength={6}
                                    minLength={6}
                                />
                                </View>
                            </View>
                            <View style={{height: 0.09*height, flex: 5, justifyContent: 'center', alignItems: 'center', marginTop:"5%"}}>
                                <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 10, backgroundColor: '#003399'}} 
                                                onPress={this.submitDetails}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Submit</Text>
                                </TouchableOpacity>
                            </View> 
                        </View> : null
                    }
                    </View>
                </ScrollView>
                <Modal
                    isVisible={this.state.displayModal == true}
                    animationInTiming={2000}
                    animationOutTiming={2000}
                    backdropTransitionInTiming={2000}
                    backdropTransitionOutTiming={2000}
                    >
                    {this.showDetialsInModal()}
                </Modal>
                <Footer/>
            </View>
        )
    }
}