import React from 'react';
import { Dimensions, View, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Modal from 'react-native-modal';
import registerSellerStyle from './registerSellerStyle';
import global from '../global/globalConfiguration';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBookOpen, faPlus, faMinus, faHandHolding, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-native-material-dropdown';
import MultiSelect from 'react-native-multiple-select';
import * as items from '../staticData/registerSellerData.json';
import AnalogClock from './AnalogClock';
import * as ScheduleTimeData from '../staticData/scheduleTime.json'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class RegisterSeller extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            licenseNumber :"",
            availableItems: [''],
            types: [
                {label: 'Online Mode/UPI', value: 0 },
                {label: 'Cash', value: 1 },
                {label: 'Both', value: 2 },
            ],
            shopName : "",
            mobileNumber :"",
            upiId : "",
            selectedItems: [],
            selectedCategories : [],
            items : items.days,
            category : items.category,
            startSelectedHours: 10,
            startSelectedMinutes: 0,
            endSelectedHours: 17,
            endSelectedMinutes: 0,
            HourData : ScheduleTimeData.HourData,
            MinutesData : ScheduleTimeData.MinutesData,
            displayModal: false,
          }
    }

    onSelectedItemsChange = (selectedItems, index) => {
        this.setState({selectedItems: selectedItems})
    }
    onSelectedCategoriesChange = (selectedCategories, index) => {
        this.setState({selectedCategories: selectedCategories})
    }
    submitDetails =() => {
        this.setState({
            displayModal : true,
        })
    }

    availableItems = (text, index) => {
        this.state.availableItems[index] = text;
        this.forceUpdate();
    }

    addItems = () => {
        this.setState(prevState => ({
            availableItems: [...prevState.availableItems, '']
        }))
    }

    removeItems = () => {
        this.state.availableItems.pop();

        this.forceUpdate();
        
        console.log(this.state.availableItems);
    }

    showDetialsInModal  = () => {
        return(
            <View style={{justifyContent:"center", backgroundColor: '#003399', borderRadius: 40, height: height*0.5}}>
                <View style={{alignItems: 'flex-end', marginRight: '5%', marginTop:"2%"}}>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: height*0.04, width: height*0.04, borderRadius: height*0.02, backgroundColor: '#fff'}} 
                                    onPress={() => {this.setState({displayModal: false})}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red'}}>X</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{height:"90%"}}>
                    <View style={{ padding: "3%", flex:1, justifyContent:"center"}}>
                        <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center', color:"white"}}>
                             Seller Registration Success
                        </Text>
                        {/* <View style={{flexDirection: 'row'}}>
                            <Text style={registerSellerStyle.rationCategoryInModal}>
                                License Number :
                            </Text>
                            <Text style={registerSellerStyle.rationInModal}>
                                {this.state.licenseNumber}
                            </Text>
                        </View> */}
                        <View style={{flexDirection: 'row'}}>
                            <Text style={registerSellerStyle.rationCategoryInModal}>
                                Shop Name : 
                            </Text>
                            <Text style={registerSellerStyle.rationInModal}>
                                {this.state.shopName}
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={registerSellerStyle.rationCategoryInModal}>
                                Mobile Number : 
                            </Text>
                            <Text style={registerSellerStyle.rationInModal}>
                                {this.state.mobileNumber}
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={registerSellerStyle.rationCategoryInModal}>
                                Bhim UPI Id :
                            </Text>
                            <Text style={registerSellerStyle.rationInModal}>
                                {this.state.upiId}
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={registerSellerStyle.rationCategoryInModal}>
                                Start Time :
                            </Text>
                            <Text style={registerSellerStyle.rationInModal}>
                                {this.state.startSelectedHours} : {this.state.startSelectedMinutes} Hrs 
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={registerSellerStyle.rationCategoryInModal}>
                                End Time :
                            </Text>
                            <Text style={registerSellerStyle.rationInModal}>
                                {this.state.endSelectedHours} : {this.state.endSelectedMinutes} Hrs
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={registerSellerStyle.rationCategoryInModal}>
                                Days : 
                            </Text>
                            {this.state.selectedItems.map((value, index) => {
                                return(
                                    <Text key={index} style={registerSellerStyle.rationInModal}>
                                        {value=="tuesday" || value=="thursday" ? value.toUpperCase().substring(0,4)+ " " : value.toUpperCase().substring(0,3)+ " " }
                                    </Text>
                                ) 
                            })}
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={registerSellerStyle.rationCategoryInModal}>
                                Category : 
                            </Text>
                            {this.state.selectedCategories.map((value, index) => {
                                return(
                                    <Text key={index} style={registerSellerStyle.rationInModal}>
                                        {value+ ", " }
                                    </Text>
                                ) 
                            })}
                        </View>                      
                    </View>                    
                </ScrollView>
            </View>
        )
    }

    render ( ) {
        
        return(
            <View style={{flex:1, backgroundColor: 'white'}}>
                <Header name={"Seller"}/>
                <ScrollView style={{ marginTop:'0%'}}>
                   
                    <View style={{ height: 0.09*height, marginHorizontal: 0.05*width, marginTop: 0.02*height }}>
                        <View style = {{height: 0.035*height, justifyContent: 'center', backgroundColor: '#DCDCDC'}} >
                            <Text style={registerSellerStyle.inputfieldtext}>Shop Name :</Text>
                        </View>
                        <View style = {{flex:1}}>
                        <TextInput
                            style={{borderColor: 'green', borderRadius:10, borderWidth: 1, width: '100%', height: height*0.05, paddingHorizontal:"3%"}}
                            placeholder='Enter Shop Name'
                            onChangeText={(text) => this.setState({shopName: text})}
                        />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 0.05*width, marginTop: 0.02*height, marginTop:'5%' }}>
                        <View style = {{height: 0.035*height, justifyContent: 'center', backgroundColor: '#DCDCDC'}} >
                            <Text style={registerSellerStyle.inputfieldtext}>Shop Category :</Text>
                        </View>
                        <View style={{  borderRadius: 20, zIndex: 999}}>
                            <MultiSelect
                                hideTags
                                items={this.state.category}
                                uniqueKey="id"
                                ref={(component) => { this.multiSelect = component }}
                                onSelectedItemsChange={(value, index) => this.onSelectedCategoriesChange(value, index)}
                                selectedItems={this.state.selectedCategories}
                                selectText="Select Category"
                                searchInputPlaceholderText="Search Category..."
                                onChangeInput={ (text)=> console.log(text)}
                                tagRemoveIconColor="#CCC"
                                tagBorderColor="green"
                                tagTextColor="#CCC"
                                selectedItemTextColor="#003399"
                                selectedItemIconColor="#CCC"
                                itemTextColor="#000"
                                displayKey="name"
                                styleInputGroup={{borderColor:"green"}}
                                styleDropdownMenuSubsection={{borderColor:"green"}}
                                styleSelectorContainer={{borderColor:"green"}}
                                styleTextDropdownSelected={{fontStyle: 'italic'}}
                                searchInputStyle={{ color: 'green' }}
                                submitButtonColor="#003399"
                                submitButtonText="Submit"
                            />
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={registerSellerStyle.inputfieldtext}>
                                    Selected Categories :
                                </Text>
                            </View>
                            {this.state.selectedCategories.map((value, index) => {
                                return(
                                    <View key={index} style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginBottom: '3%'}}>
                                            {value.toUpperCase()}
                                        </Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 0.05*width, marginTop: 0.02*height, marginTop:'5%' }}>
                        <View style = {{height: 0.035*height, justifyContent: 'center', backgroundColor: '#DCDCDC'}} >
                            <Text style={registerSellerStyle.inputfieldtext}>Days of Operation :</Text>
                        </View>
                        <View style={{  borderRadius: 20, zIndex: 999}}>
                            <MultiSelect
                                hideTags
                                items={this.state.items}
                                uniqueKey="id"
                                ref={(component) => { this.multiSelect = component }}
                                onSelectedItemsChange={(value, index) => this.onSelectedItemsChange(value, index)}
                                selectedItems={this.state.selectedItems}
                                selectText="Select Days"
                                searchInputPlaceholderText="Search Days..."
                                onChangeInput={ (text)=> console.log(text)}
                                tagRemoveIconColor="#CCC"
                                tagBorderColor="green"
                                tagTextColor="#CCC"
                                selectedItemTextColor="#003399"
                                selectedItemIconColor="#CCC"
                                itemTextColor="#000"
                                displayKey="name"
                                styleDropdownMenuSubsection={{borderColor:"green"}}
                                styleSelectorContainer={{borderColor:"green"}}
                                styleTextDropdownSelected={{fontStyle: 'italic'}}
                                searchInputStyle={{ color: 'green' }}
                                submitButtonColor="#003399"
                                submitButtonText="Submit"
                            />
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={registerSellerStyle.inputfieldtext}>
                                    Selected Days :
                                </Text>
                            </View>
                            {this.state.selectedItems.map((value, index) => {
                                return(
                                    <View key={index} style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginBottom: '3%'}}>
                                            {value.toUpperCase()}
                                        </Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                    <View style={{ height: 0.09*height, marginHorizontal: 0.05*width, marginTop:'5%' }}>
                        <View style = {{height: 0.03*height,justifyContent: 'center',backgroundColor: '#DCDCDC'}} >
                            <Text style={registerSellerStyle.inputfieldtext}>Start Time</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{width:"50%", fontSize:10}}>
                                Hours
                            </Text>
                            <Text style={{width:"50%", fontSize:10}}>
                                Minutes
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width : "40%"}}>
                                <Dropdown
                                        placeholder='Select Hours'
                                        data={this.state.HourData}
                                        fontSize={14}
                                        itemColor={"black"}
                                        baseColor={"#003399"}
                                        selectedItemColor={"#003399"}
                                        containerStyle={registerSellerStyle.dropdownInput}
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
                                        containerStyle={registerSellerStyle.dropdownInput}
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
                    <View style={{ height: 0.08*height, marginHorizontal: 0.05*width, marginTop:'5%' }}>
                        <View style = {{height: 0.03*height,justifyContent: 'center',backgroundColor: '#DCDCDC'}} >
                            <Text style={registerSellerStyle.inputfieldtext}>Close Time</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{width:"50%", fontSize:10}}>
                                Hours
                            </Text>
                            <Text style={{width:"50%", fontSize:10}}>
                                Minutes
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width : "40%"}}>
                                <Dropdown
                                        placeholder='Select Hours'
                                        data={this.state.HourData}
                                        fontSize={14}
                                        itemColor={"black"}
                                        baseColor={"#003399"}
                                        selectedItemColor={"#003399"}
                                        containerStyle={registerSellerStyle.dropdownInput}
                                        textColor={"#003399"}
                                        dropdownMargins={{min:0,max:0}}
                                        dropdownOffset={{top:0,left:2}}
                                        inputContainerStyle={{borderBottomColor: 'transparent',marginTop:0.01*height}}
                                        pickerStyle={{paddingHorizontal:0.02*width}}
                                        onChangeText={(value) => {this.setState({endSelectedHours : value})}}
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
                                        containerStyle={registerSellerStyle.dropdownInput}
                                        textColor={"#003399"}
                                        dropdownMargins={{min:0,max:0}}
                                        dropdownOffset={{top:0,left:2}}
                                        inputContainerStyle={{borderBottomColor: 'transparent',marginTop:0.01*height}}
                                        pickerStyle={{paddingHorizontal:0.02*width}}
                                        onChangeText={(value) => {this.setState({endSelectedMinutes : value})}}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{marginHorizontal: 0.05*width, marginTop: '8%'}}>
                        <View>
                        <Text style={registerSellerStyle.inputfieldtext}>Items Available :</Text>
                        </View>
                        <View>
                            {this.state.availableItems.map((value, index) => {
                                if(index!=(this.state.availableItems.length-1)){
                                    return(
                                        <View style={{marginTop: height*0.02}}>
                                            <View>
                                                <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold'}}>Item {index+1}</Text>
                                            </View>
                                            <View>
                                                <TextInput
                                                    value={this.state.availableItems[index]}
                                                    style={{ borderBottomWidth: 1, width: '80%', height: height*0.05, paddingHorizontal:"3%"}}
                                                    placeholder='Enter Item Name'
                                                    onChangeText={(text) => this.availableItems(text, index)}
                                                  
                                                    maxLength={10}
                                                    minLength={10}
                                                />
                                            </View>
                                        </View>
                                    )
                                }
                                else{
                                    return(
                                        <View style={{marginTop: height*0.02}}>
                                            <View>
                                                <Text style={{fontSize: 12, fontStyle: 'italic', fontWeight: 'bold'}}>Item {index+1}</Text>
                                            </View>
                                            <View style={{flexDirection: 'row'}} key={index}>
                                                <View style={{flex: 9}}>
                                                <TextInput
                                                 value={this.state.availableItems[index]}
                                                    style={{ borderBottomWidth: 1, width: '90%', height: height*0.05, paddingHorizontal:"3%"}}
                                                    placeholder='Enter Item Name'
                                                    onChangeText={(text) => this.availableItems(text, index)}
                                                    
                                                    // maxLength={10}
                                                    // minLength={10}
                                                />
                                                </View>
                                                <View style={{flex: 1}}>
                                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', height: width*0.06, width: width*0.06, borderRadius: width*0.03}}
                                                    onPress={this.addItems}   >
                                                    <FontAwesomeIcon icon={faPlus} size={10} style={{color:"#fff"}}/>
                                                </TouchableOpacity>
                                                </View>
                                                {this.state.availableItems.length > 1 ? 
                                                <View style={{flex: 1}}>
                                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', height: width*0.06, width: width*0.06, borderRadius: width*0.03}}
                                                    onPress={this.removeItems}   >
                                                    <FontAwesomeIcon icon={faMinus} size={10} style={{color:"#fff"}}/>
                                                </TouchableOpacity>
                                                </View>:null
                                            
                                                }
                                                
                                            </View>
                                        </View>
                                    )
                                }
                            })}
                            
                        </View>
                    </View>

                    <View style={{ height: 0.09*height, marginHorizontal: 0.05*width, marginTop: '8%' }}>
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
                   

                    <View style={{ height: 0.09*height, marginHorizontal: 0.05*width, marginTop: 0.02*height }}>
                        <View style = {{height: 0.035*height, justifyContent: 'center', backgroundColor: '#DCDCDC'}} >
                            <Text style={registerSellerStyle.inputfieldtext}>Bhim UPI Id ( Optional ) :</Text>
                        </View>
                        <View style = {{flex:1}}>
                        <TextInput
                            style={{borderColor: 'green', borderRadius:10, borderWidth: 1, width: '100%', height: height*0.05, paddingHorizontal:"3%"}}
                            placeholder='Enter Bhim UPI Id'
                            onChangeText={(text) => this.setState({upiId: text})}
                        />
                        </View>
                    </View>

                    <View style={{ height: 0.09*height, marginHorizontal: 0.05*width, marginTop: 0.02*height }}>
                        <View style = {{height: 0.035*height, justifyContent: 'center', backgroundColor: '#DCDCDC'}} >
                            <Text style={registerSellerStyle.inputfieldtext}>Desired Payment Mode :</Text>
                        </View>
                        <View style = {{flex:1}}>
                        <RadioForm
                                radio_props={this.state.types}
                                initial={0}
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
                    </View>

                    <View style={{flex: 5, justifyContent: 'center', alignItems: 'center', marginTop: height*0.04, marginBottom: height*0.04}}>
                        <TouchableOpacity style={{paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 10, backgroundColor: '#003399'}} 
                                        onPress={this.submitDetails}>
                            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Submit</Text>
                        </TouchableOpacity>
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