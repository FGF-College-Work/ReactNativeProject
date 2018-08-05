import React, {Component} from 'react';
import {View,StyleSheet,Image} from 'react-native';


export default class AssetExample extends Component {
    render() {
        return ( 
            <View style = {styles.container} >
                <Image style = {styles.logo} source = {require("../assets/ceara.png")}/>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    paragraph: {
        margin: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    logo: {
        backgroundColor: "#056ecf",
        height: 128,
        width: 128,
    }
});