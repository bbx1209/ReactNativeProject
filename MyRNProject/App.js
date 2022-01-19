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

import {MyComponent, MyComponentII, MyComponentIII, Counter} from './custom/rnjs/RNJSX';
import {MyCustomButton, Card, CardII, Card3, MyInputView, MemoTest, UseStateTest} from "./custom/rnjs/rnevent";
import {CustomHook, UseEffect, UseEffect2, UseRef, UseRender} from "./custom/rnjs/hooks";
import {HomeScreen,HomeScreen2} from "./custom/components/homeScreen";

import {HomePage, Screen1, Screen11, Screen2} from "./custom/screens/homelist"
import {LayoutScreen} from "./custom/screens/layout"
import {NativeContainer} from "./custom/screens/nativescreens";



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
                <Stack.Navigator initialRouteName='Screen11'>
                    <Stack.Screen  name="HomePage" component={Screen1} />
                    <Stack.Screen  name="Screen11" component={Screen11} options={{title:'screen 11'}}/>
                    <Stack.Screen  name="Screen2" component={Screen2}/>
                    <Stack.Screen name='LayoutScreen' component={LayoutScreen}/>
                    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                    <Stack.Screen name="HomeScreen2" component={HomeScreen2}/>
                    <Stack.Screen name='NativeContainer' component={NativeContainer}/>
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
