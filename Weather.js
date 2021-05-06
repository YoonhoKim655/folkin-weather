import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions ={
    Thunderstorm:{
        iconName : "weather-lightning",
        gradient: ["#485563", "#29323c"],
        title: "Thunderstorm",
        subtitle : ""
    },
    Drizzle:{
        iconName : "weather-partly-rainy",
        gradient: ["#00d2ff", "#3a7bd5"],
        title: "Drizzle",
        subtitle : ""
    },
    Rain:{
        iconName : "weather-rainy",
        gradient: ["#667db6", "#0082c8", "#0082c8", "#667db6"],
        title: "Rain",
        subtitle : ""
    },
    Snow:{
        iconName : "weather-snowy-heavy",
        gradient: ["#4c669f", "#6DD5FA", "#FFFFFF"],
        title: "Snow",
        subtitle : ""
    },
    Clear:{
        iconName : "white-balance-sunny",
        gradient: ["#00c6ff", "#0072ff"],
        title: "Clear",
        subtitle : ""
    },
    Clouds:{
        iconName : "cloud-outline",
        gradient: ['#525252','#3d72b4'],
        title: "Cloud",
        subtitle : ""
    },
    Haze:{
        iconName : "weather-hazy",
        gradient: ["#e1eec3", "#f05053"],
        title: "Haze",
        subtitle : ""
    },
    Mist:{
        iconName : "water",
        gradient: ["#6190E8", "#A7BFE8"],
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
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Dust",
        subtitle : ""
    },
    Fog:{
        iconName : "weather-fog",
        gradient: ["#ffd89b", "#19547b"],
        title: "Fog",
        subtitle : ""
    },
    Sand:{
        iconName : "weather-fog",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Sand",
        subtitle : ""
    },
    Ash:{
        iconName : "weather-fog",
        gradient: ["#606c88", "#3f4c6b"],
        title: "Ash",
        subtitle : ""
    },
    Squall:{
        iconName : "weather-windy-variant",
        gradient: ["#314755", "#26a0da"],
        title: "Squall",
        subtitle : ""
    },
    Tornado:{
        iconName : "weather-tornado",
        gradient: ["#0f2027", "#203a43", "#2c5364"],
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