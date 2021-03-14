import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, {Marker,
  Circle,
  Polygon,
  Polyline,
  ProviderPropType,
} from 'react-native-maps';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faBars, faCaretDown, faBell, faMapPin, faPhoneAlt, faBackward } from '@fortawesome/free-solid-svg-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
// import MapView, { Marker, ProviderPropType } from 'react-native-maps';
// import flagPinkImg from '../../assets/images/icons/home.png'
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 22.5726;
const LONGITUDE = 88.3638;
const LATITUDE_DELTA = 10;
const LONGITUDE_DELTA = 30;
const SPACE = 0.01;

class Overlays extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      circle1: {
        center: {
          latitude: LATITUDE,
          longitude: LONGITUDE,
        },
        radius: 200,
      },
      circle2: {
        center: {
          latitude: 22.5726 + SPACE,
          longitude: 88.3638 + SPACE,
        },
        radius: 100,
      },
      marker:[
         {
          coordinate: {
            latitude: LATITUDE ,
            longitude: LONGITUDE,
          },
        //   imageMarker:require('../../../assets/locate_distributor.png'),
          key: '1',
        },
       
      ],
      polyline: [
        {
          latitude: 35.6706,
          longitude: 139.7720,
        },
        {
          latitude: 35.7177,
          longitude: 139.5661,
        },
        {
          latitude: 28.2282,
          longitude: 112.9388,
        }
      ],
    };
  }

  goToSearchResults = () => {
      Actions.SearchResultsScreen()
  }

  render() {

    
    const { region, circle1,circle2, polygon, polyline,marker } = this.state;
    return (
      <View style={styles.container}>
          <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '4.1%'}}>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={this.goToSearchResults}>
                <FontAwesomeIcon icon={faBackward} size={18} style={{color: 'black'}} />
                <Text style={{fontSize: 14, fontWeight: 'bold', fontStyle: 'italic', paddingHorizontal: '1.5%'}}>Go Back</Text>
            </TouchableOpacity>
          </View>
          
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={region}
        >
         {marker.map(marker => (
            <Marker
              title={marker.key}
              image={marker.imageMarker}
              key={marker.key}
              coordinate={marker.coordinate}
            />
          ))}
          <Circle
            center={circle1.center}
            radius={circle1.radius}
            fillColor="#009688"
            strokeColor="rgba(0,0,0,0.5)"
            zIndex={2}
            strokeWidth={2}
          />
          {/* <Polygon
            coordinates={polygon}
            fillColor="rgba(0, 200, 0, 0.5)"
            strokeColor="rgba(0,0,0,0.5)"
            strokeWidth={2}
          /> */}
          {/* <Polyline
            coordinates={polyline}
            strokeColor="#009688"
            strokeWidth={3}
            // lineDashPattern={[5, 2, 3, 2]}
          /> */}
          {/* <Circle
            center={circle2.center}
            radius={circle2.radius}
            fillColor="#009688"
            strokeColor="rgba(0,0,0,0.5)"
            zIndex={2}
            strokeWidth={2}
          /> */}
        </MapView>
      </View>
    );
  }
}

Overlays.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  map: {
   top: 50,
   bottom: 0,
   right: 0,
   left: 0,
   position: "absolute"
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default Overlays;