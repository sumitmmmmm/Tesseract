import React from 'react';
import { StyleSheet,Dimensions,TextInput, Text, ScrollView ,CheckBox, View,Image,TouchableOpacity,RadioForm,AsyncStorage,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard,Platform,StatusBar } from 'react-native';
import MenuPageStyle from '../MenuPage/menuPageStyle';
import { Actions } from 'react-native-router-flux';
// import * as ScheduleTimeData from '../staticData/scheduleTime.json';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSmile, faCheck, faShoppingBasket, faCaretDown, faCaretUp, faMapPin, faPhoneAlt, faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-native-material-dropdown';
// import MultiSelect from 'react-native-multiple-select';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import HeaderStyle from '../Header/headerStyle';
import * as ScheduleTimeData from '../staticData/scheduleTime.json';
import registerSellerStyle from '../Registeration/registerSellerStyle';

import MapView from 'react-native-maps';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class SearchResultsForSelectedCategory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showAvailableItems1: false,
            HourData : ScheduleTimeData.HourData,
            MinutesData : ScheduleTimeData.MinutesData,
            showAvailableItems2: false,
            showAvailableItems3: false,
            showAvailableItems4: false,
            types: [
                {value: 'Online Mode/UPI', id: 0 },
                {value: 'Cash', id: 1 },
                {value: 'Both', id: 2 },
            ],
            showShopDetails: [false, false, false, false],
            availableItems: [
                {
                    name: 'Rice',
                    selected: false,
                    background: 'green'
                },
                {
                    name: 'Wheat',
                    selected: false,
                    background: 'green'
                },
                {
                    name: 'Pulses',
                    selected: false,
                    background: 'green'
                },
                {
                    name: 'Cooking Oil',
                    selected: false,
                    background: 'green'
                }
            ],
            selectedItems: [false, false, false, false]
        }
    }

    height = Dimensions.get("window").height;
    width = Dimensions.get("window").width;

    renderMap = () => {
        Actions.Map()
    }

    showShopDetails = (index) => {
        this.state.showShopDetails[index] = !this.state.showShopDetails[index];
        this.forceUpdate();
    }

    
    onRegionChange(region) {
        this.setState({ region });
    }

    showAvailableItems1 = () => {
        this.setState({
            showAvailableItems1: !this.state.showAvailableItems1
        })
    }

    showAvailableItems2 = () => {
        this.setState({
            showAvailableItems2: !this.state.showAvailableItems2
        })
    }

    showAvailableItems3 = () => {
        this.setState({
            showAvailableItems3: !this.state.showAvailableItems3
        })
    }

    showAvailableItems4 = () => {
        this.setState({
            showAvailableItems4: !this.state.showAvailableItems4
        })
    }

    setSelectedItems = (index) => {
        this.state.availableItems[index].selected = !this.state.availableItems[index].selected;
        if(this.state.availableItems[index].background == 'green'){
            this.state.availableItems[index].background = 'blue'
        }
        else{
            this.state.availableItems[index].background = 'green'
        }
        this.forceUpdate();
    }

      sendNotification = (shopName, shopAddress) => {
        let notif = {
            name: 'Raj Kumar',
            id: '9090909090',
            shopName: shopName,
            shopAddress: shopAddress,
            comments: 'The total amount is Rs. 260 for the ordered items.',
            timing: 'Please visit the above shop at the allocated time slot 4P.M - 4:30P.M on 29th June, 2020',
            pickup: 'The customer would be picking up the items at 5:00 P.M on 30th June, 2020'
        }

        AsyncStorage.setItem("selectedBuyerDetails", JSON.stringify(notif))
        .then(value => {
            alert('Notification sent to seller.')
        })
      }

    render(){
        return(
            <KeyboardAvoidingView style={{flex:1}}>
                
         <Header />
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{flex: 1, marginTop: this.height*0.04}}>
                        <View>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Search Results</Text>
                            </View>
                           
                            <View style={{flexDirection: 'row', marginTop: 0.01*height, paddingHorizontal: '3%'}}>
                                <View style={{flex: 1, marginHorizontal: 0.01*width, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#2C9E3F', borderTopLeftRadius: 10, borderBottomEndRadius: 10}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Shops for</Text>
                                    <Text style={{fontSize: 12, color: '#fff'}}>8 km Radius</Text>
                                </View>

                                <View style={{flex: 1, marginHorizontal: 0.01*width, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#2C9E3F', borderTopLeftRadius: 10, borderBottomEndRadius: 10}}>
                                    <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Shop Type</Text>
                                    <Text style={{fontSize: 12, color: '#fff'}}>Daily Needs</Text>
                                </View>
                            </View>

                            <View style={{justifyContent: 'flex-start', paddingHorizontal: '3%', marginTop: 0.025*height}}>
                                <Text style={{fontSize: 12, fontStyle:'italic', fontWeight: 'bold'}}>4 results</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', paddingHorizontal: '3%', marginHorizontal: '1%',  paddingVertical: '3%', backgroundColor: '#DCDCDC', marginTop: '2%', borderRadius: 15}}>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <View style={{borderRadius: 2, borderColor: 'black', borderWidth: 3}}>
                                    <TouchableOpacity style={{padding: '10%'}}>
                                        <FontAwesomeIcon icon={faMapPin} size={30} style={{color:"red"}}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: '2%', marginLeft: '5%'}}>
                                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>0.2 KM</Text>
                                </View>
                                
                            </View>
                            <View style={{flex: 5}}>
                                <TouchableOpacity onPress={() => this.showShopDetails(0)}>
                                    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Raj General Store</Text>
                                    </View>
                                    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                        <Text style={{fontStyle: 'italic', fontSize: 14}}>Shop No.22, near Tank No. 8, CA Block, NewTown</Text>
                                    </View>
                                </TouchableOpacity>

                                {this.state.showShopDetails[0] == true? 
                                
                                <View>
                                   

                                    <View style={{marginTop: 0.01*height}}>
                                        <View style={{}}>
                                            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Select from the Items available: </Text>
                                        </View>
                                        {this.state.availableItems.map((value, index) => {
                                            return(
                                                <TouchableOpacity key={index} 
                                                    style={{flexDirection: 'row', marginLeft: this.width*0.05, backgroundColor: value.background, marginRight: this.width*0.26, marginTop: this.height*0.01, padding: '2%', borderBottomEndRadius: 10, borderTopLeftRadius: 10}}
                                                    onPress={() => this.setSelectedItems(index)}    >
                                                    <Text style={{flex: 1, fontSize: 11, fontStyle: 'italic', color: '#fff'}}>{index+1}. {value.name}</Text>
                                                    <FontAwesomeIcon icon={faCheck} size={15} style={{color:"green", flex: 1}}/>
                                                </TouchableOpacity>
                                            )
                                        })}

                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text style={{flex: 3, fontSize: 14, fontWeight: 'bold'}}>Pickup Time</Text>
                                            <View style={{flex: 5, justifyContent: 'center', flexDirection: 'row'}}>
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
                                                                    borderColor:"green",
                                                                    width: width*0.15,
                                                                    paddingHorizontal:0.01*width,
                                                                    marginVertical:0.01 *height,
                                                                    }}
                                                                textColor={"black"}
                                                                dropdownMargins={{min:0,max:0}}
                                                                dropdownOffset={{top:0,left:2}}
                                                                inputContainerStyle={{
                                                                    borderBottomColor: 'transparent',
                                                                    marginTop:0.01*height,
                                                                    justifyContent: 'center'
                                                                    }}
                                                                pickerStyle={{paddingHorizontal:0.01*width}}
                                                                onChangeText={(value) => {this.setState({startSelectedHours : value})}}
                                                            />
                                                        <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 0.005*height}}>
                                                            <Text style={{fontSize: 13}}>hrs</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row',  marginLeft: 0.01*width}}>
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
                                                                    borderColor:"green",
                                                                    width: width*0.15,
                                                                    paddingHorizontal:0.01*width,
                                                                    marginVertical:0.01 *height,
                                                                    }}
                                                                textColor={"black"}
                                                                dropdownMargins={{min:0,max:0}}
                                                                dropdownOffset={{top:0,left:2}}
                                                                inputContainerStyle={{
                                                                    borderBottomColor: 'transparent',
                                                                    marginTop:0.01*height,
                                                                    justifyContent: 'center'
                                                                    }}
                                                                pickerStyle={{paddingHorizontal:0.01*width}}
                                                                onChangeText={(value) => {this.setState({startSelectedMinutes : value})}}
                                                            />
                                                        <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 0.005*height}}>
                                                            <Text style={{fontSize: 13}}>mins</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>


                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <View style={{flex: 3, justifyContent: 'flex-start'}}>
                                                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>Mode of Payment</Text>
                                                </View>
                                                <View style={{flex: 5}}>
                                                    
                                                <Dropdown
                                                                placeholder='Select payment'
                                                                data={this.state.types}
                                                                fontSize={14}
                                                                itemColor={"black"}
                                                                baseColor={"black"}
                                                                selectedItemColor={"black"}
                                                                
                                                                containerStyle={{
                                                                    justifyContent: 'center',
                                                                    backgroundColor: '#fff',
                                                                    borderRadius: 10, 
                                                                    borderWidth:1, 
                                                                    borderColor:"green",
                                                                    width: width*0.4,
                                                                    paddingHorizontal:0.01*width,
                                                                    marginVertical:0.01 *height,
                                                                    }}
                                                                textColor={"black"}
                                                                dropdownMargins={{min:0,max:0}}
                                                                dropdownOffset={{top:0,left:2}}
                                                                inputContainerStyle={{
                                                                    borderBottomColor: 'transparent',
                                                                    marginTop:0.01*height,
                                                                    justifyContent: 'center'
                                                                    }}
                                                                pickerStyle={{paddingHorizontal:0.01*width}}
                                                                onChangeText={(value) => {this.setState({paymentMode : value})}}
                                                            />
                                                </View>
                                            </View>
                                        </View>

                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '3%'}}>
                                        <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={() => this.sendNotification('Raj General Store', 'Shop No.22, near Tank No. 8, CA Block, NewTown')}>
                                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faPhoneAlt} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>Call Now</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={this.renderMap}>
                                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faMapSigns} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center',  paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>View on Map</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={this.renderMap}>
                                            <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faSmile} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'center',  paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>91%</Text>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>800 reviews</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    </View>

                                    </View>:null

                                }

                               
                            </View>
                            

                        </View>

                        <View style={{flexDirection: 'row', paddingHorizontal: '3%', marginHorizontal: '1%',  paddingVertical: '3%', backgroundColor: '#DCDCDC', marginTop: '2%', borderRadius: 15}}>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <View style={{borderRadius: 2, borderColor: 'black', borderWidth: 3}}>
                                    <TouchableOpacity style={{padding: '10%'}}>
                                        <FontAwesomeIcon icon={faMapPin} size={30} style={{color:"red"}}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: '2%', marginLeft: '5%'}}>
                                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>2.2 KM</Text>
                                </View>
                                
                            </View>
                            <View style={{flex: 5}}>
                               
                            <TouchableOpacity onPress={() => this.showShopDetails(1)}>
                                    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Afzal Stores</Text>
                                    </View>
                                    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                        <Text style={{fontStyle: 'italic', fontSize: 14}}>Shop No.11/C, near Tank No. 11, CD Block, NewTown</Text>
                                    </View>
                                </TouchableOpacity>

                                {this.state.showShopDetails[1] == true? 
                                
                                <View>
                                   

                                    <View style={{marginTop: 0.01*height}}>
                                        <View style={{}}>
                                            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Select from the Items available: </Text>
                                        </View>
                                        {this.state.availableItems.map((value, index) => {
                                            return(
                                                <TouchableOpacity key={index} 
                                                    style={{flexDirection: 'row', marginLeft: this.width*0.05, backgroundColor: value.background, marginRight: this.width*0.26, marginTop: this.height*0.01, padding: '2%', borderBottomEndRadius: 10, borderTopLeftRadius: 10}}
                                                    onPress={() => this.setSelectedItems(index)}    >
                                                    <Text style={{flex: 1, fontSize: 11, fontStyle: 'italic', color: '#fff'}}>{index+1}. {value.name}</Text>
                                                    <FontAwesomeIcon icon={faCheck} size={15} style={{color:"green", flex: 1}}/>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>

                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '3%'}}>
                                        <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={() => this.sendNotification('Raj General Store', 'Shop No.22, near Tank No. 8, CA Block, NewTown')}>
                                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faPhoneAlt} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>Call Now</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={this.renderMap}>
                                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faMapSigns} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center',  paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>View on Map</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={this.renderMap}>
                                            <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faSmile} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'center',  paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>91%</Text>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>800 reviews</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    </View>

                                    </View>:null

                                }

                            </View>

                        </View>
                        <View style={{flexDirection: 'row', paddingHorizontal: '3%', marginHorizontal: '1%',  paddingVertical: '3%', backgroundColor: '#DCDCDC', marginTop: '2%', borderRadius: 15}}>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <View style={{borderRadius: 2, borderColor: 'black', borderWidth: 3}}>
                                    <TouchableOpacity style={{padding: '10%'}}>
                                        <FontAwesomeIcon icon={faMapPin} size={30} style={{color:"red"}}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: '2%', marginLeft: '5%'}}>
                                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>6.2 KM</Text>
                                </View>
                                
                            </View>
                            <View style={{flex: 5}}>
                                
                            <TouchableOpacity onPress={() => this.showShopDetails(2)}>
                                    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Chaitanya Groceries</Text>
                                    </View>
                                    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                        <Text style={{fontStyle: 'italic', fontSize: 14}}>Shop No.102, Belgachia Road, Kolkata</Text>
                                    </View>
                                </TouchableOpacity>

                                {this.state.showShopDetails[2] == true? 
                                
                                <View>
                                   

                                    <View style={{marginTop: 0.01*height}}>
                                        <View style={{}}>
                                            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Select from the Items available: </Text>
                                        </View>
                                        {this.state.availableItems.map((value, index) => {
                                            return(
                                                <TouchableOpacity key={index} 
                                                    style={{flexDirection: 'row', marginLeft: this.width*0.05, backgroundColor: value.background, marginRight: this.width*0.26, marginTop: this.height*0.01, padding: '2%', borderBottomEndRadius: 10, borderTopLeftRadius: 10}}
                                                    onPress={() => this.setSelectedItems(index)}    >
                                                    <Text style={{flex: 1, fontSize: 11, fontStyle: 'italic', color: '#fff'}}>{index+1}. {value.name}</Text>
                                                    <FontAwesomeIcon icon={faCheck} size={15} style={{color:"green", flex: 1}}/>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>

                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '3%'}}>
                                        <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={() => this.sendNotification('Raj General Store', 'Shop No.22, near Tank No. 8, CA Block, NewTown')}>
                                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faPhoneAlt} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>Call Now</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={this.renderMap}>
                                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faMapSigns} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center',  paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>View on Map</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={this.renderMap}>
                                            <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faSmile} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'center',  paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>91%</Text>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>800 reviews</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    </View>

                                    </View>:null

                                }

 
                              
                            </View>

                        </View>
                        <View style={{flexDirection: 'row', paddingHorizontal: '3%', marginHorizontal: '1%',  paddingVertical: '3%', backgroundColor: '#DCDCDC', marginTop: '2%', borderRadius: 15}}>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <View style={{borderRadius: 2, borderColor: 'black', borderWidth: 3}}>
                                    <TouchableOpacity style={{padding: '10%'}}>
                                        <FontAwesomeIcon icon={faMapPin} size={30} style={{color:"red"}}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: '2%', marginLeft: '5%'}}>
                                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>7.0 KM</Text>
                                </View>
                                
                            </View>
                            <View style={{flex: 5}}>
                                
                            <TouchableOpacity onPress={() => this.showShopDetails(3)}>
                                    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Maiti General Stores</Text>
                                    </View>
                                    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                        <Text style={{fontStyle: 'italic', fontSize: 14}}>Shop No.1, near Tank No. 8, CA Block, NewTown</Text>
                                    </View>
                                </TouchableOpacity>

                                {this.state.showShopDetails[3] == true? 
                                
                                <View>
                                   

                                    <View style={{marginTop: 0.01*height}}>
                                        <View style={{}}>
                                            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Select from the Items available: </Text>
                                        </View>
                                        {this.state.availableItems.map((value, index) => {
                                            return(
                                                <TouchableOpacity key={index} 
                                                    style={{flexDirection: 'row', marginLeft: this.width*0.05, backgroundColor: value.background, marginRight: this.width*0.26, marginTop: this.height*0.01, padding: '2%', borderBottomEndRadius: 10, borderTopLeftRadius: 10}}
                                                    onPress={() => this.setSelectedItems(index)}    >
                                                    <Text style={{flex: 1, fontSize: 11, fontStyle: 'italic', color: '#fff'}}>{index+1}. {value.name}</Text>
                                                    <FontAwesomeIcon icon={faCheck} size={15} style={{color:"green", flex: 1}}/>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>

                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: '3%'}}>
                                        <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={() => this.sendNotification('Raj General Store', 'Shop No.22, near Tank No. 8, CA Block, NewTown')}>
                                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faPhoneAlt} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>Call Now</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={this.renderMap}>
                                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faMapSigns} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center',  paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>View on Map</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{flex: 1}}>
                                        <TouchableOpacity style={{flexDirection: "row"}} onPress={this.renderMap}>
                                            <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
                                                <FontAwesomeIcon icon={faSmile} size={15} style={{color:"green"}}/>
                                            </View>
                                            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'center',  paddingHorizontal: '2%'}}>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>91%</Text>
                                                <Text style={{fontSize: 12, textAlign: 'center'}}>800 reviews</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    </View>

                                    </View>:null

                                }



                               

                            </View>

                        </View>



                    </View>
                 
                </TouchableWithoutFeedback>
                </ScrollView>
              
                <Footer/>
                    </KeyboardAvoidingView>
            
        )
    }
}