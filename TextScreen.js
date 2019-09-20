import React, {Component,useState} from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native';

const TextScreen = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
  return (
    <View style={styles.container}>
    <Text>Enter Name:</Text>
      <TextInput 
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      onChangeText={(newValue)=>setName(newValue)}
      />
      <Text>My name is: {name}</Text>
      <Text>Enter Password:</Text>
      <TextInput 
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={password}
      onChangeText={(newValue)=>setPassword(newValue)}
      />
      {password.length < 4 ? <Text>Password must be 4 characters</Text>: null}
      <Text>My Password is: {password}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor: 'black',
        borderWidth:1
    }
});

export default TextScreen;