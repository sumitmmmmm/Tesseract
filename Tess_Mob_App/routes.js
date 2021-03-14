import { Router, Scene } from 'react-native-router-flux'
import React from 'react';
import MenuPageScreen from './Components/MenuPage/menuPage';
import RegisterSeller from './Components/Registeration/registerSeller';
import LandingPageScreen from './Components/LandingPage/landingPage';
import TransactionHistoryScreen from './Components/TransactionHistory/transactionHistory';
import AddMoneyScreen from './Components/addMoney/addMoney';
import BuyerSearchScreen from './Components/buyerSearch/buyerSearchPage';
import SearchResultsScreen from './Components/buyerSearch/searchResults'
import RegisterBuyer from './Components/Registeration/registerBuyer';
import CategoryPage from './Components/categoryPage/categoryPage';
import SellerSeachForBuyerScreen from './Components/sellerSearchForBuyer/sellerSearchForBuyer'
import SellerShowNotificationsScreen from './Components/sellerShowNotifications/sellerShowNotifications'
import BuyerShowNotificationScreen from './Components/buyerShowNotifications/buyerShowNotifications'
import SearchResultsForSelectedCategory from './Components/buyerSearch/searchResultsForSelectedCategory';
import Map from './Components/Map/map'

const Routes = () => (

    <Router>
       <Scene key = "root">
         
          <Scene key = "MenuPageScreen"  component = {MenuPageScreen} hideNavBar="true" />
          <Scene key = "RegisterSeller" component ={RegisterSeller} hideNavBar="true"/>
          <Scene key = "RegisterBuyer" component ={RegisterBuyer} hideNavBar="true"/>
          <Scene key = "LandingPageScreen"  component = {LandingPageScreen}  hideNavBar="true" initial={true}/>
          <Scene key = "AddMoneyScreen"  component = {AddMoneyScreen} hideNavBar="true" />
          <Scene key = "BuyerSearchScreen"  component = {BuyerSearchScreen}  hideNavBar="true"/>
          <Scene key = "SearchResultsForSelectedCategory"  component = {SearchResultsForSelectedCategory}  hideNavBar="true"/>
          <Scene key = "SearchResultsScreen"  component = {SearchResultsScreen}  hideNavBar="true"/>
          <Scene key = "CategoryPageScreen"  component = {CategoryPage}  hideNavBar="true" />
          <Scene key = "SellerSeachForBuyerScreen"  component = {SellerSeachForBuyerScreen}  hideNavBar="true"/>
          <Scene key = "SellerShowNotificationsScreen"  component = {SellerShowNotificationsScreen}  hideNavBar="true"/>
          <Scene key = "BuyerShowNotificationScreen"  component = {BuyerShowNotificationScreen}  hideNavBar="true"/>
          <Scene key = "Map"  component = {Map}  hideNavBar="true"/>
       </Scene>
    </Router>
 )
 export default Routes