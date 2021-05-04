import { StatusBar } from 'expo-status-bar';
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-laction";

export default class extends React.Component {
  getLocation = async() => {
    const location = await Location.getCurrentPositionAsync(options);
    console.log(location);
  }
  componentDidMount() {
    this.getLocation();
  }
  render(){
    <Loading />;
  }
} 