import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions ={
    Thunderstorm:{
        iconName : "weather-lightning",
        gradient: ["#2c3e50","#bdc3c7"],
        title: "Thunderstorm",
        subtitle : ""
    },
    Drizzle:{
        iconName : "weather-partly-rainy",
        gradient: ["#B2FEFA", "#0ED2F7"],
        title: "Drizzle",
        subtitle : ""
    },
    Rain:{
        iconName : "weather-rainy",
        gradient: ["#525252", "#3d72b4"],
        title: "Rain",
        subtitle : ""
    },
    Snow:{
        iconName : "weather-snowy-heavy",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "Snow",
        subtitle : ""
    },
    Clear:{
        iconName : "white-balance-sunny",
        gradient: ["#2980B9", "#6DD5FA", "#ffffff"],
        title: "Clear",
        subtitle : ""
    },
    Clouds:{
        iconName : "cloud-outline",
        gradient: ['#7F7FD5','#86A8E7', '#91EAE4'],
        title: "Cloud",
        subtitle : ""
    },
    Haze:{
        iconName : "weather-hazy",
        gradient: ["#ffecd2", "#fad0c4"],
        title: "Haze",
        subtitle : ""
    },
    Mist:{
        iconName : "water",
        gradient: ["#a1c4fd", "#c2e9fb"],
        title: "Mist",
        subtitle : ""
    },
    Smoke:{
        iconName : "weather-fog",
        gradient: ["#8e9eab", "#eef2f3"],
        title: "Smoke",
        subtitle : ""
    },
    Dust:{
        iconName : "weather-fog",
        gradient: ["#8693ab", "#bdd4e7"],
        title: "Dust",
        subtitle : ""
    },
    Fog:{
        iconName : "weather-fog",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Fog",
        subtitle : ""
    },
    Sand:{
        iconName : "weather-fog",
        gradient: ["#D1913C", "#FFD194"],
        title: "Sand",
        subtitle : ""
    },
    Ash:{
        iconName : "weather-fog",
        gradient: ["#d5d0e5", "#f3e6e8"],
        title: "Ash",
        subtitle : ""
    },
    Squall:{
        iconName : "weather-windy-variant",
        gradient: ["#2c3e50", "#2980b9"],
        title: "Squall",
        subtitle : ""
    },
    Tornado:{
        iconName : "weather-tornado",
        gradient: ["#243949", "#517fa4"],
        title: "Tornado",
        subtitle : ""
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size = {96} 
                    name={weatherOptions[condition].iconName} 
                    color = 'white' 
                />
                <Text style={styles.temp}>{temp} ℃</Text>         
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>  
        </LinearGradient>      
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp :{
        fontSize: 42,
        color : "white"
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color:"white",
        fontSize : 44,
        fontWeight:"300",
        marginBottom:10
    },
    subtitle: {
        fontWeight:"600",
        color: "white",
        fontSize:24
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems: "flex-start"
    }
});