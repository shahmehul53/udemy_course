import React, {Component} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';

const ImageDetail = (props) => {
    console.log(props);
    return (
        <View>
            <Image source={props.imageSource }/>
            <Text>{props.title}</Text>
            <Text>Image Score - {props.score}</Text>
        </View>
    
    );
}

const styles = StyleSheet.create({

})

export default ImageDetail;