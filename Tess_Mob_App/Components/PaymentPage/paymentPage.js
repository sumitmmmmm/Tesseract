import React from 'react';
import { StyleSheet,Dimensions,TextInput, Text, ScrollView ,View,Image,TouchableOpacity,Animated,AsyncStorage,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard,Platform,StatusBar } from 'react-native';
import MenuPageStyle from '../MenuPage/menuPageStyle';
// import TimePicker from 'react-native-simple-.time-picker';
import * as Permissions from "expo-permissions";
import Modal from 'react-native-modal';
import { BarCodeScanner } from "expo-barcode-scanner";
import { Actions } from 'react-native-router-flux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCheckCircle, faHandHolding, faBell, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

// import MultiSelect from 'react-native-multiple-select';
import global from '../global/globalConfiguration';
import Footer from '../Footer/footer';
import Header from '../Header/header';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class PaymentPageScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasCameraPermission: null,
              scanned: false,
              isScannerOpen: true,
              visibleModal: null,
              QR_Code_Value: "", 
              amount:"",
              transferProcess1: true,
              transferProcess2: true,
              transferProcess3: true,
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
    async componentDidMount() {
        this.getPermissionsAsync();
    }
    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === "granted" });
      };
    handleBarCodeScanned = ({ type, data }) => {
        var temp = JSON.parse(data);
      this.setState({
        scanned: false,
        QR_Code_Value: temp,
        isScannerOpen: false
      });
    };
    submitDetails = () => {
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
                "Mobile": `${this.state.QR_Code_Value.mobileNumber}`,
                'Message': `Amount of Rs.${this.state.amount} has been transferred to ${this.state.QR_Code_Value.mobileNumberr}. Transaction Id is XXXXXX2345. Not you? Call our helpline center for assistance.`
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
            })
        })
        .catch(error => console.log(error))
    }
    successModal = () => {
        return(
            <View style={{justifyContent: 'center', backgroundColor: '#2C9E3F', borderRadius: 40, height: this.height*0.4}}>
                 <View style={{flex:1, alignItems: 'flex-end', marginRight: '5%', marginTop: '5%'}}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: this.height*0.04, width: this.height*0.04, borderRadius: this.height*0.02, backgroundColor: '#fff'}} onPress={() => {this.setState({displaySuccessModal: false})}}>
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
                    <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 10, backgroundColor: '#fff'}} onPress={() => {this.setState({displaySuccessModal: false})}}>
                        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15, color: '#2C9E3F'}}>Close Window</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render ( ) {
        const { hasCameraPermission, scanned, isScannerOpen } = this.state;

        if (hasCameraPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        }
        return(
            <KeyboardAvoidingView style={{flex:1, backgroundColor: 'white'}}>
                <Header/>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={{flex:1}}>
                {!isScannerOpen && (
                <View style={{flex:1}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: '6%', marginTop: '5%', borderRadius: 10, borderWidth: 1}}>
                        
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{ resizeMode: 'contain',width: 50, height: 50}} source={require('../../assets/wb_govt.png')} />
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '5%'}}>
                            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '5%'}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Recipient Details</Text>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: '2%'}}>
                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: '2%'}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}>Mobile No: </Text>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>{this.state.QR_Code_Value.mobileNumber}</Text>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: '2%'}}>
                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: '2%'}}>
                                    <Text style={{fontSize: 14, fontWeight: 'bold', fontStyle: 'italic'}}>Name: </Text>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', color: 'black'}}>{this.state.QR_Code_Value.name}</Text>
                                </View>
                            </View>
                            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '5%'}}>
                                <View style={{justifyContent: 'center',  paddingHorizontal: '2%'}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Amount(&#8377;): </Text>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center', width: this.width*0.8, marginTop:'4%'}}>
                                    
                                <TextInput
                                    style={{borderColor: 'black', backgroundColor: '#fff', color: 'black', borderRadius:10, borderWidth: 1, textAlign: 'center', width: '80%', height: this.height*0.1, fontSize: 20}}
                                    placeholder=' Enter Amount' 
                                    value={this.state.amount} 
                                    onChangeText={(text) => this.setState({amount: text})}
                                    keyboardType="number-pad"
                                />
                                </View>
                            </View>

                            <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: '4%'}}>
                                <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 0, backgroundColor: '#2C9E3F'}} onPress={this.submitDetails}>
                                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15, color: '#fff'}}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                    </View>
                    {this.state.transferProcess1 == true ? 
                    
                    <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center', paddingTop: '8%'}}>
                        <View style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <FontAwesomeIcon icon={faCheckCircle} size={15} style={{color:"#2C9E3F"}}/>
                            </View>
                            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center'}}>Checking sufficient balance in wallet</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <Bars size={8} color= 'black' />
                            </View>
                    
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: '2%'}}>
                            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                <Pulse size={8} color = 'black' />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                <Pulse size={8} color = 'black' />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                <Pulse size={8} color = 'black' />
                            </View>
                        </View>
                    </View>: null
                    }

                     {/* {this.state.transferProcess2 == true ? 
                    
                    <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <FontAwesomeIcon icon={faCheckCircle} size={15} style={{color:"#2C9E3F"}}/>
                            </View>
                            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center'}}>Deducting amount from balance</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <Bars size={8} color= 'black' />
                            </View>
                    
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Pulse size={8} color = 'black' />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Pulse size={8} color = 'black' />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Pulse size={8} color = 'black' />
                        </View>
                        </View>
                    </View>: null
                    } */}

                    {this.state.transferProcess3 == true ? 
                    
                    <View style={{flex: 1, justifyContent: 'center', paddingVertical: '10%'}}>
                        <View style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row'}}>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <FontAwesomeIcon icon={faCheckCircle} size={15} style={{color:"#2C9E3F"}}/>
                            </View>
                            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center'}}>Confirming transaction</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <Bars size={8} color= 'black' />
                            </View>
                    
                        </View>
                    </View>: null
                    } 
                    {/* <View style={{height:0.3*height,justifyContent:"center"}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{resizeMode: 'contain',width: 50, height: 50}} source={require('../../assets/wb_govt.png')} />
                        </View>
                    </View> */}
                </View>
                )}
                {isScannerOpen && (
                 <BarCodeScanner
                     onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                     style={StyleSheet.absoluteFillObject}
                 />
                 )}
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