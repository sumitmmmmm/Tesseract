import React from 'react';
import { Dimensions, Text,  View ,TouchableOpacity} from 'react-native';
import HeaderStyle from './headerStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faBars, faCaretDown, faBell } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-native-material-dropdown';
// import TimePicker from 'react-native-simple-.time-picker';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.language,
            language: 'English',
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
        }
    }

    render ( ) {
        
        return(
            <View style={{backgroundColor: '#E8E8E8',paddingHorizontal:0.06*width}}>
                    <View style={HeaderStyle.imageStyle}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <FontAwesomeIcon icon={faBars} size={20} style={{color:"#003399"}}/>
                            </View>
                            <View style={{flex: 6, justifyContent: 'flex-start',alignItems: 'flex-start'}}>
                                <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                    <View >
                                        <View style={{flexDirection:"row"}}>
                                            <View>
                                                <Text style={{fontSize: 14, fontStyle: 'italic'}}>Selected Language: </Text>
                                            </View>
                                            <View>
                                           <Text style={{fontSize: 14, fontWeight: 'bold'}}>English</Text>
                                            </View>
                                            <View style={{justifyContent:"center",padding:"2%"}}>
                                            
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <FontAwesomeIcon icon={faBell} size={18} style={{color:"#003399"}}/>
                            </View>
                        </View>
                        
                    </View>
            
            </View>
        )
    }
}