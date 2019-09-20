import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.view1}></View>
            <View style={styles.view2Parent}>
            <View style={styles.view2}></View>
            </View>
            <View style={styles.view3}></View>
        </View>
    )
}

const styles=StyleSheet.create({
    parentStyle:{
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
       // alignItems: 'flex-end'
       justifyContent: 'space-between',
       height: 200,
       //alignItems: 'center'
    },
    textOneStyle:{
        borderWidth: 3,
        borderColor: 'red',
        //margin: 20
    
        
    },
    textTwoStyle:{
        borderWidth: 3,
        borderColor: 'red',
        //margin: 20
        fontSize: 18,
        ...StyleSheet.absoluteFillObject

        //alignSelf: 'flex-end'
        //position: 'absolute'
    },
    textThreeStyle:{
        borderWidth: 3,
        borderColor: 'red',
        //margin: 20 
    },
    view1:{
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    view2:{
        height: 50,
        width: 50,
        backgroundColor: 'green',
        //top:50
        alignSelf: 'flex-end'

    },
    view3:{
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    },
    view2Parent:{
        height: 100, 
        justifyContent: 'flex-end'
    }
})

export default BoxScreen;