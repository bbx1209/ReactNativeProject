/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import type { Node } from 'react';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { MyComponent, MyComponentII,MyComponentIII, Counter} from './rnjs/RNJSX';
import {MyCustomButton} from "./rnjs/rnevent";




const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [count, setCount] = useState(0)

  return (

    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={{ justifyContent: 'center' }}>

        <Text style={{ fontSize: 40, borderWidth: 2 }}>{"dfgsdfgsdfgsdfg"}</Text>
        <Text style={{ width: 200, fontSize: 20, borderWidth: 1, justifyContent: 'center' }} onPress={() => { Alert.alert('点击了文字'); }} > {"汉语测试"} </Text>
        <Button title='这是一个按钮' onPress={() => {
          // Alert.alert('点击了按钮');
          console.log('点击按钮');
        }}
        >

        </Button>

        <MyComponentII title="MyComponentII"/>
        <MyComponent/>

        <MyComponentIII title="MyComponentIII" color="rgb(80, 108, 206)"/>
        {/*<Counter/>*/}

        <MyCustomButton  title={` on click:  ${count}`} onIncrement={()=> setCount(count + 1)}/>

      </View>
    </SafeAreaView>
  );

};





export default App;

export class Test extends Component {

  componentDidMount() {

  }
  componentWillUnmount() {

  }

}
