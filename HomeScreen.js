import React, {Component} from 'react'
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
              <Text style={styles.text}>Hi There!</Text>
              <Button
              onPress={()=>this.props.navigation.navigate('Component')}
              title="Go to Components Demo"
              />
             <Button
              onPress={()=>this.props.navigation.navigate('List')}
              title="Go to List  Demo"
              />
              <Button
              onPress={()=>this.props.navigation.navigate('Image')}
              title="Go to Image Demo"
              />
              <Button
              onPress={()=>this.props.navigation.navigate('Counter')}
              title="Go to Counter Demo"
              />
              <Button
              onPress={()=>this.props.navigation.navigate('Colors')}
              title="Go to Colors Demo"
              />
              <Button
              onPress={()=>this.props.navigation.navigate('Square')}
              title="Go to Square Demo"
              />
              <Button
              onPress={()=>this.props.navigation.navigate('Text')}
              title="Go to Text Demo"
              />
              <Button
              onPress={()=>this.props.navigation.navigate('Box')}
              title="Go to Box Demo"
              />
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});