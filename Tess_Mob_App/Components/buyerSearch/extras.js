import React from 'react';
import { StyleSheet,Dimensions,TextInput, Text, ScrollView ,View,Image,TouchableOpacity,Animated,AsyncStorage,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard,Platform,StatusBar } from 'react-native';
import MenuPageStyle from '../MenuPage/menuPageStyle';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faBars, faCaretDown, faBell } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-native-material-dropdown';
// import MultiSelect from 'react-native-multiple-select';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import HeaderStyle from '../Header/headerStyle';
import * as ScheduleTimeData from '../staticData/scheduleTime.json';
import registerSellerStyle from '../Registeration/registerSellerStyle';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class BuyerSearchScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayLanguageModal:true,
            typeOfLanguage: [
                {
                    value: 'English'
                },
                {
                    value: 'Hindi'
                },
                {
                    value: 'Bengali'
                },
                {
                    value: 'Urdu'
                },
                {
                    value: 'Marathi'
                },
                {
                    value: 'Telegu'
                },
            ],
            language:'English',
            typeOfShopping:[
                { value : 'Delivery'},
                { value : 'Collect from Store'}
            ],
            shoppingMode:'',
            typeOfCategories:[
                {
                    value: 'Daily Needs'
                },
                {
                    value: 'Groceries'
                },
                {
                    value: 'Mobile Recharge'
                },
                {
                    value: 'Repairs'
                },
                {
                    value: 'Bakery'
                },
                {
                    value: 'Courier Services'
                },
                {
                    value: 'Electrical'
                },
                {
                    value: 'Printing Services'
                },
            ],
            categories:'',
            HourData : ScheduleTimeData.HourData,
            MinutesData : ScheduleTimeData.MinutesData,
        }
    }

    goToSearch = () => {
        Actions.SearchResultsScreen();
    }

    addMoney = () => {
        Actions.AddMoneyScreen();
        
    }

    chooseLanguage = () => {
        this.setState({
            displayLanguageModal:true
        })
        // alert("Money Paid.")
    }  
    changeLanguage = (value) => {
        this.setState({language : value,
            displayLanguageModal:false})
        this.forceUpdate();
    }
    chooseLanguageModal = () => {
        return(
            <View style={{justifyContent: 'center', backgroundColor: '#fff', borderRadius: 40, height:height*0.3}}>
               
                    <View style={{flex:1,alignItems: 'flex-end', marginRight: '5%', marginTop: '5%'}}>
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: height*0.04, width: height*0.04, borderRadius: height*0.02, backgroundColor: '#fff'}} onPress={() => {this.setState({displayLanguageModal: false})}}>
                            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red'}}>X</Text>
                        </TouchableOpacity>
                    </View>
                <View style={{flex: 5, alignItems: 'center'}}>
                    
                    <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>Select Language</Text>
                    </View>
                    <View style={{ flex:6,justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Dropdown
                                placeholder='Choose Language'
                                data={this.state.typeOfLanguage}
                                fontSize={20}
                                itemColor={"black"}
                                baseColor={"black"}
                                selectedItemColor={"black"}
                                value={this.state.language}
                                containerStyle={{
                                    justifyContent: 'center',
                                    backgroundColor: '#fff',
                                    borderRadius: 0.01*height, 
                                    borderWidth:1, 
                                    borderColor:"black",
                                    width: width*0.5,
                                    paddingHorizontal:"3%",
                                    }}
                                textColor={"black"}
                                dropdownMargins={{min:0,max:0}}
                                dropdownOffset={{top:0,left:2}}
                                inputContainerStyle={{
                                    borderBottomColor: 'transparent',
                                    marginTop:0.01*height,
                                    justifyContent: 'center'
                                    }}
                                pickerStyle={{paddingHorizontal:0.02*width}}
                                onChangeText={(value) => {this.changeLanguage(value)}}
                            />
                            </View>
              
            
            
            
            
                </View>
            </View>
        )
    }
    render ( ) {
        
        return(
            <KeyboardAvoidingView style={{flex:1}}>
            <View style={{backgroundColor: '#fff',paddingHorizontal:0.06*width}}>
                    <View style={HeaderStyle.imageStyle}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <FontAwesomeIcon icon={faBars} size={20} style={{color:"#003399"}}/>
                            </View>
                            <View style={{justifyContent: 'center',alignItems: 'flex-start', paddingRight: height*0.22}}>
                                <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                    <TouchableOpacity onPress={this.chooseLanguage}>
                                        <View style={{flexDirection:"row"}}>
                                            <View>
                                            <Text style={{alignSelf:"flex-start",fontSize:20,color:"#003399", fontWeight: 'bold', textAlign: 'left'}}>
                                            {this.state.language} 
                                            </Text>
                                            </View>
                                            <View style={{justifyContent:"center",padding:"2%"}}>
                                            <FontAwesomeIcon icon={faCaretDown} size={20} style={{color:"#003399"}}/>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <FontAwesomeIcon icon={faBell} size={18} style={{color:"#003399"}}/>
                            </View>
                        </View>
                        
                    </View>
            
            </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={{flex:1,backgroundColor:"#fff",paddingHorizontal:0.07*width}}>
                    <View>
                        <Text style={{color:"black",textAlign:"left",alignSelf:"flex-start"}}>Select Mode of Shopping </Text>
                        <Dropdown
                                placeholder='Shopping Type'
                                data={this.state.typeOfShopping}
                                fontSize={14}
                                itemColor={"black"}
                                baseColor={"black"}
                                selectedItemColor={"black"}
                                value={this.state.shoppingMode}
                                containerStyle={{
                                    justifyContent: 'center',
                                    backgroundColor: '#fff',
                                    borderRadius: 10, 
                                    borderWidth:1, 
                                    borderColor:"green",
                                    width: width*0.5,
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
                                onChangeText={(value) => {this.setState({shoppingMode : value})}}
                            />
                    </View>
                    <View>
                        <Text style={{color:"black",textAlign:"left",alignSelf:"flex-start"}}>Select Suitable Pickup Timings</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width : "40%"}}>
                                <Dropdown
                                        placeholder='Select Hours'
                                        data={this.state.HourData}
                                        fontSize={14}
                                        itemColor={"black"}
                                        baseColor={"#003399"}
                                        selectedItemColor={"#003399"}
                                        containerStyle={{
                                            justifyContent: 'center',
                                            backgroundColor: '#fff',
                                            borderRadius: 10, 
                                            borderWidth:1, 
                                            borderColor:"green",
                                            width: width*0.3,
                                            paddingHorizontal:0.01*width,
                                            marginVertical:0.01 *height,
                                            }}
                                        textColor={"#003399"}
                                        dropdownMargins={{min:0,max:0}}
                                        dropdownOffset={{top:0,left:2}}
                                        inputContainerStyle={{borderBottomColor: 'transparent',marginTop:0.01*height}}
                                        pickerStyle={{paddingHorizontal:0.02*width}}
                                        onChangeText={(value) => {this.setState({startSelectedHours : value})}}
                                />
                            </View>
                            <View style={{width : "10%"}}>
                            </View>
                            <View style={{width : "40%"}}>
                                <Dropdown
                                        placeholder='Select Minutes'
                                        data={this.state.MinutesData}
                                        fontSize={14}
                                        itemColor={"black"}
                                        baseColor={"#003399"}
                                        selectedItemColor={"#003399"}
                                        containerStyle={{
                                            justifyContent: 'center',
                                            backgroundColor: '#fff',
                                            borderRadius: 10, 
                                            borderWidth:1, 
                                            borderColor:"green",
                                            width: width*0.3,
                                            paddingHorizontal:0.01*width,
                                            marginVertical:0.01 *height,
                                            }}
                                        textColor={"#003399"}
                                        dropdownMargins={{min:0,max:0}}
                                        dropdownOffset={{top:0,left:2}}
                                        inputContainerStyle={{borderBottomColor: 'transparent',marginTop:0.01*height}}
                                        pickerStyle={{paddingHorizontal:0.02*width}}
                                        onChangeText={(value) => {this.setState({startSelectedMinutes : value})}}
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{color:"black",textAlign:"left",alignSelf:"flex-start"}}>Browse Categories</Text>
                        <Dropdown
                                placeholder='Category Type'
                                data={this.state.typeOfCategories}
                                fontSize={14}
                                itemColor={"black"}
                                baseColor={"black"}
                                selectedItemColor={"black"}
                                value={this.state.categories}
                                containerStyle={{
                                    justifyContent: 'center',
                                    backgroundColor: '#fff',
                                    borderRadius: 10, 
                                    borderWidth:1, 
                                    borderColor:"green",
                                    width: width*0.5,
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
                                onChangeText={(value) => {this.setState({categories : value})}}
                            />
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center',marginTop:0.03*height}}>
                        <TouchableOpacity style={{paddingVertical: 0.013*height, paddingHorizontal: 0.07*width, borderRadius: 0, backgroundColor: '#2C9E3F'}} onPress={this.goToSearch}>
                            <Text style={{color: "white", fontWeight: 'bold', fontSize: 20}}>Search</Text>
                        </TouchableOpacity>
                    </View>
                
                    </View>
                 </TouchableWithoutFeedback>
                 <Modal
                    isVisible={this.state.displayLanguageModal}
                    animationInTiming={2000}
                    animationOutTiming={2000}
                    backdropTransitionInTiming={2000}
                    backdropTransitionOutTiming={2000}
                    >
                    {this.chooseLanguageModal()}
                </Modal>
                <Footer/>
            </KeyboardAvoidingView>
        )
    }
}