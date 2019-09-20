import React, {Component} from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import ListScreen from './ListScreen';
import ComponentScreen from './ComponentScreen'
import ImageScreen from './ImageScreen';
import CounterScreen from './CounterScreeen';
import ColorScreen from './ColorsScreen';
import SquareScreen from './SquareScreen';
import TextScreen from './TextScreen';
import BoxScreen from './BoxScreen';


const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        List: ListScreen,
        Component: ComponentScreen,
        Image: ImageScreen,
        Counter: CounterScreen,
        Colors: ColorScreen,
        Square: SquareScreen,
        Text: TextScreen,
        Box: BoxScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
        title: 'App'
      }
    }
);

export default createAppContainer(AppNavigator);