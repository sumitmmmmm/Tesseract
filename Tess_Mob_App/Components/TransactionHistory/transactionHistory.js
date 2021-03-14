import React from 'react';
import { Dimensions, Text, ScrollView ,View,Image,TouchableOpacity } from 'react-native';
import TransactionHistoryStyle from './transactionHistoryStyle';
import { Actions } from 'react-native-router-flux';
import Header from '../Header/header';
import Footer from '../Footer/footer';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class TransactionHistoryScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            transactionDetails : [
                {
                    name : "Saurabh Dargude",
                    amount : -500,
                    tnxHash : "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
                    tnxDate : "April 25 2020",
                    tnxTime : "10:54:24"
                },
                {
                    name : "Sumit Maiti",
                    amount : -300,
                    tnxHash : "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
                    tnxDate : "April 24 2020",
                    tnxTime : "12:34:54"
                },
                {
                    name : "Sourav Singh",
                    amount : +500,
                    tnxHash : "4ce18f49ba153a51bcda9bb80d7f978e3de6e81b5fc326f00465464530c052f4",
                    tnxDate : "April 22 2020",
                    tnxTime : "17:21:45"
                },
                {
                    name : "Smriti Das",
                    amount : -200,
                    tnxHash : "d5d27987d2a3dfc724e359870c6644b40e497bdc0589a033220fe15429d88599",
                    tnxDate : "April 20 2020",
                    tnxTime : "18:26:37"
                },
            ]
        }
    }

    addMoney = () => {
        // Actions.CategorySelection();
        alert("Money Added.")
    }

    payMoney = () => {
        // Actions.DeliverRation();
        alert("Money Paid.")
    }  

    render ( ) {
        
        return(
            <View style={{flex:1, backgroundColor: 'white'}}>
                <Header/>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop:"15%"}}>
                    <Image style={{ resizeMode: 'contain',width: 50, height: 50}} source={require('../../assets/wb_govt.png')} />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'flex-end', paddingHorizontal:"9%"}}>
                    <Text style={TransactionHistoryStyle.balanceText}>Available Balance :  &#8377; 800 </Text>
                </View>
                <ScrollView style={{ marginTop:'2%'}}>
                    {this.state.transactionDetails.map((data, index) => {
                        return(
                            <View key={index}>
                                <View style={{flex:1, justifyContent: 'center', marginTop:"0%"}}>
                                    <TouchableOpacity onPress={this.payMoney} style={TransactionHistoryStyle.buttonStyle} style={{flexDirection:"row"}}>
                                        <Image style={{resizeMode: 'contain',width: 50, height: 50}} source={require('../../assets/userProfile.png')} />
                                        <View style={{flex:1, flexDirection:"row"}}>
                                            <View style={{flex: 3, justifyContent: 'center', alignItems: 'flex-start'}}>
                                                <Text style={TransactionHistoryStyle.buttonText}>Paid To : {data.name} </Text>
                                            </View>
                                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: '10%'}}>
                                                <Text style={TransactionHistoryStyle.amount}> {data.amount} </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{flex:1, flexDirection:"row"}}>
                                        <View style={{width:"11%"}}></View>
                                        <View style={{flex: 3, justifyContent: 'center', alignItems: 'flex-start'}}>
                                            <Text style={TransactionHistoryStyle.tnxDetails}>Date : {data.tnxDate} </Text>
                                        </View>
                                        <View style={{flex: 1, justifyContent: 'center',  alignItems: 'flex-end',paddingRight: '10%'}}>
                                            <Text style={TransactionHistoryStyle.tnxDetails}>Time : {data.tnxTime} </Text>
                                        </View>
                                    </View>
                                    <View style={{flex:1, flexDirection:"row"}}>
                                        <View style={{width:"11%"}}></View>
                                        <View style={{flex: 3, justifyContent: 'center', alignItems: 'flex-start'}}>
                                            <Text style={TransactionHistoryStyle.tnxHashDetails}>Tnx Hash : {data.tnxHash} </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flex:1, justifyContent: 'center', marginTop:"3%", borderBottomWidth:1.5,borderBottomColor: "#2C9E3F", marginHorizontal:"3%"}}>
                                    
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
                <Footer/>
            </View>
        )
    }
}