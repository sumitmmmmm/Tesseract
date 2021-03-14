import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarAlt, faShoppingCart, faBirthdayCake, faGavel, faLaptop, faShoppingBag, faCar, faPrint, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import CategoryStyle from './categoryPageStyle';
import HeaderForCategory from '../Header/HeaderForCategory';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';

export default class CategoryPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            visibleModal: null,
            footerResponse: {},
        }
    }

    render() {
     return(

        <View>
            {/* <HeaderForCategory/> */}
            <ScrollView style={{height:"90%"}}>
                <View style={CategoryStyle.parentContainer}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} icon={item.icon} />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
                </View>
            </ScrollView>            
        </View> 
        )
    }
  }

 function Item ({ title, icon }) {
    return (
      <View style={styles.item}>
            <FontAwesomeIcon icon={icon} size={100} style={{color:"#005999", paddingHorizontal:"50%"}}/>
            <Text style={styles.title}>{title}</Text>
      </View>
    );
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