import React, {Component} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title = {`Increase ${color}`} onPress={()=> onIncrease()} />
            <Button title = {`Decrease ${color}`} onPress={()=> onDecrease()} />
        </View>
    
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ColorCounter;