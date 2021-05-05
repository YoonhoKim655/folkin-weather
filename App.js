import { StatusBar } from 'expo-status-bar';
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import * as Permissions from 'expo-permissions';
import { Alert, TimePickerAndroid } from 'react-native';
import axios from 'axios';
import Weather from "./Weather";

const API_KEY = "e8c32fa0f84576b05374cfe544f426c8";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const {data}=await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({isLoading:false, temp:data.main.temp});
  };

  getLocation = async() => {
    try{
      const {status} = await Permissions.askAsync(Permissions.LOCATION)
      if(status === 'granted'){
      await Location.getForegroundPermissionsAsync();;
      const {coords : {latitude, longitude}
      }= await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High});

     this.getWeather(latitude, longitude);
    }
    }catch(error) {
      Alert.alert("Can't find you.", "So sad");
    }  
  };

  componentDidMount() {
    this.getLocation();
  }
  render(){
    const {isLoading, temp} = this.state;
    return isLoading ? <Loading /> : <Weather temp = {Math.round(temp)}/>;
  }
} 