import React from 'react';
import { StyleSheet,Dimensions,FlatList, Text, ScrollView ,View,TextInput,TouchableOpacity,Animated,AsyncStorage,TouchableWithoutFeedback,KeyboardAvoidingView,Keyboard,Platform,StatusBar } from 'react-native';
import MenuPageStyle from '../MenuPage/menuPageStyle';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dropdown } from 'react-native-material-dropdown';
// import MultiSelect from 'react-native-multiple-select';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import HeaderStyle from '../Header/headerStyle';
import * as ScheduleTimeData from '../staticData/scheduleTime.json';
import registerSellerStyle from '../Registeration/registerSellerStyle';
import CategoryPage from '../categoryPage/categoryPage';
import * as CategoryData from '../staticData/categoryData.json';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Constants from 'expo-constants';
import CategoryStyle from '../categoryPage/categoryPageStyle';
import { faCalendarAlt, faShoppingCart, faBirthdayCake, faGavel, faBell,  faLaptop, faShoppingBag, faCar, faPrint, faMailBulk } from '@fortawesome/free-solid-svg-icons';
export default class BuyerSearchScreen extends React.Component{
    constructor(props){
        super(props);
        console.log(CategoryData)
        this.state = {
            searchOpacity: 1,
            searchButtonColor: 'gray',
            displayLanguageModal:false,
            viewSearchResults: false,
            isCategoryClicked : true,
            searchShopsFilter: [
                {label: 'My Time Slot', value: 0 },
                {label: 'Near my Area', value: 1 },
                
            ],
            types: [
                {label: 'Online Mode/UPI', value: 0 },
                {label: 'Cash', value: 1 },
                {label: 'Both', value: 2 },
            ],
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
            shoppingMode:'Collect from Store',
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

        AsyncStorage.getItem('notificationForBuyer')
                .then(text => {return JSON.parse(text)})
                .then(sellerValue => {
                    let keyChecker = Object.values(sellerValue);
                    if(keyChecker.length > 0){
                        
                        this.setState({
                            notifications: true,
                            notificationsData: sellerValue
                        })

                        
                    }
                    else{
                        this.setState({
                            notifications: false
                        })
                    }
                })
    }

    goToSearch = () => {
        if(this.state.searchShopValue == 0){
            Actions.SearchResultsScreen();
        }
        else{
            Actions.SearchResultsForSelectedCategory();
        }
        
    }

    showSearchResults = () => {
        this.setState({
            viewSearchResults: true,
            isCategoryClicked : false
        })
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

    Item = ({ title, icon }) => {
        return (
          <TouchableOpacity style={styles.item} onPress={this.showSearchResults}> 
                <FontAwesomeIcon icon={icon} size={100} style={{color:"#005999", paddingHorizontal:"50%"}}/>
                <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        );
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
              <Header/>
           <ScrollView>                
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={{flex:1,backgroundColor:"#fff"}}>

            {this.state.notifications == true ? 
            
                <View style={{marginHorizontal: width*0.02, paddingVertical: height*0.01, backgroundColor: '#005999', borderRadius: 10}}>
                    <TouchableOpacity 
                    style={{justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 0.01*width}}
                    onPress={() =>  Actions.BuyerShowNotificationScreen({data: this.state.notificationsData})}>
                        <FontAwesomeIcon icon={faBell} size={15} style={{color:"#fff", flex: 1}}/>
                        <Text style={{flex: 2, marginLeft: 0.02*width, fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', color: '#fff'}}>1 message from Seller: {this.state.notificationsData.shopName}</Text>
                    </TouchableOpacity>

                </View>:null
        
            }

                {this.state.isCategoryClicked ? 
                    <ScrollView style={{height:"90%"}}>
                        <View style={CategoryStyle.parentContainer}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => <this.Item title={item.title} icon={item.icon} />}
                            keyExtractor={item => item.id}
                            numColumns={2}
                        />
                        </View>
                    </ScrollView>
                    : null
                }
              
            {this.state.viewSearchResults == true ? 
            <View style={{ paddingVertical: 0.04*height, marginHorizontal: width*0.02}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Shop Selection Filters</Text>
                </View>
                <View style={{borderWidth: 2, borderTopLeftRadius: 15, borderBottomEndRadius: 15, marginTop: 0.02*height }}>
                    <View style={{flexDirection: 'row', paddingVertical: 0.02*height, marginLeft: 0.01*width}}>
                        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>Select mode of shopping</Text>
                        </View>
                        <View style={{flex: 5, justifyContent: 'center'}}>
                        <Dropdown
                                    placeholder='Shopping Type'
                                    data={this.state.typeOfShopping}
                                    // value={'Collect from Store'}
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
                                        width: width*0.51,
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
                    </View>

                    <View style={{flexDirection: 'row',  marginLeft: 0.01*width}}>
                        <View style={{flex: 3}}>
                            <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>Search shops in: </Text>
                        </View>
                        <View style={{flex: 5, justifyContent: 'center'}}>
                        <RadioForm
                                    radio_props={this.state.searchShopsFilter}
                                    initial={null}
                                    formHorizontal={false}
                                    labelHorizontal={true}
                                    // buttonInnerColor={'#2C9E3F'}
                                    buttonColor={'#2C9E3F'}
                                    labelS
                                    // labelColor={'#50C900'}
                                    // buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                                    buttonSize={10}
                                    animation={true}
                                    onPress={(value) => {this.setState({searchShopValue:value, searchButtonColor: '#2C9E3F', searchOpacity: 0})}}
                                />
                        </View>
                    </View>

                {this.state.searchShopValue == 1 ? 
                
                <View style={{flexDirection: 'row',  marginLeft: 0.01*width, marginTop: 0.01*height, marginBottom: 0.02*height}}>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>Select max. shop distance (in km)</Text>
                    </View>
                    <View style={{flex: 5, justifyContent: 'flex-start', flexDirection: 'row'}}>
                        <TextInput
                            style={{borderWidth: 1, borderRadius: 10, borderColor: 'green', width: '86%', height: height*0.06, paddingHorizontal:"3%"}}
                            placeholder='Distance in km'
                            onChangeText={(text) => this.setState({shopName: text})}
                        />
                        
                    </View>
                </View>:null
            
                }

                {this.state.searchShopValue == 0 ? 
                
                <View style={{flexDirection: 'row',  marginLeft: 0.01*width}}>
                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>Select desired pickup Time</Text>
                </View>
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
                </View>:null
            
                }
                
                    {this.state.searchShopValue == 0 ? 
                    <View style={{flexDirection: 'row', paddingTop: height*0.02,  marginLeft: 0.01*width}}>
                    <View style={{flex: 3, alignItems: 'center'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}}>Select mode of Payment</Text>
                    </View>
                    <View style={{flex: 5, justifyContent: 'center'}}>
                        <RadioForm
                            radio_props={this.state.types}
                            initial={null}
                            formHorizontal={false}
                            labelHorizontal={true}
                            // buttonInnerColor={'#2C9E3F'}
                            buttonColor={'#2C9E3F'}
                            labelS
                            // labelColor={'#50C900'}
                            // buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                            buttonSize={10}
                            animation={true}
                            onPress={(value) => {this.setState({value:value})}}
                        />
                    </View>
                </View>:null
                
                    }
                    </View>
                    
                    
                    <View style={{justifyContent: 'center', alignItems: 'center', paddingVertical: 0.02*height}}>
                        <TouchableOpacity activeOpacity={this.state.searchOpacity} style={{paddingVertical: 0.013*height, paddingHorizontal: 0.07*width, borderRadius: 10, backgroundColor: this.state.searchButtonColor}} onPress={this.goToSearch}>
                            <Text style={{color: "white", fontWeight: 'bold', fontSize: 15}}>Search</Text>
                        </TouchableOpacity>
                    </View>

                </View>: null

            }
            </View>
            </TouchableWithoutFeedback>


           </ScrollView>
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

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Daily Needs',
      icon: faShoppingBag,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Ration',
      icon: faCalendarAlt,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Hardware',
      icon: faGavel,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Groceries',
        icon: faShoppingCart,
    },
    {
        id: '58694a0f-3da1-7363-bd96-145571e29d72',
        title: 'Electronics',
        icon: faLaptop,
    },
    { 
        id: '58694a0f-3da1-471f-5722-145571e29d72',
        title: 'Bakery',
        icon: faBirthdayCake,
    },
    {
        id: '58694a0f-3da1-471f-9892-145571e29d72',
        title: 'Courier Services',
        icon: faMailBulk,
    },
    {
        id: '58694a0f-263y-471f-bd96-145571e29d72',
        title: 'Printing Services',
        icon: faPrint,
    },
    { 
        id: '58694a0f-7263-471f-bd96-145571e29d72',
        title: 'Automobiles',
        icon: faCar,
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
        flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 24,
    //   marginTop:"5%",
      textAlign:"center"
    },
  });