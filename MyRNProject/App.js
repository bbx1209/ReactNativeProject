/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import type {Node} from 'react';
import {
    Alert,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {MyComponent, MyComponentII, MyComponentIII, Counter} from './rnjs/RNJSX';
import {MyCustomButton, Card, CardII, Card3, MyInputView, MemoTest, UseStateTest} from "./rnjs/rnevent";
import {CustomHook, UseEffect, UseEffect2, UseRef, UseRender} from "./rnjs/hooks";
import {HomeScreen} from "./components/homeScreen";

import {Screen1, Screen11,Screen2} from "./screens/homelist"
import {LayoutScreen} from "./screens/layout"



const Stack = createNativeStackNavigator();

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    return (
        // <SafeAreaView style={backgroundStyle}>
        //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <NavigationContainer>
                <Stack.Navigator>
                    {/*<Stack.Screen name="Home" component={HomeScreen}/>*/}
                    <Stack.Screen  name="Screen1" component={Screen1}/>
                    <Stack.Screen  name="Screen11" component={Screen11}/>
                    <Stack.Screen  name="Screen2" component={Screen2}/>
                    <Stack.Screen name='LayoutScreen' component={LayoutScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        // </SafeAreaView>

    );

};


export default App;

export class Test extends Component {

    componentDidMount() {

    }

    componentWillUnmount() {

    }

}
