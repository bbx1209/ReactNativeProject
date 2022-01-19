import React, {Component} from 'react'
import {View, Button, Text, ScrollView} from 'react-native'
import {useNavigation, useRoute} from'@react-navigation/native'


export class HomePage extends  Component {



    componentDidMount() {

    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {

    }

    componentWillUnmount() {
    }

    componentWillMount() {

    }


    constructor(props: P, context: any) {
        super(props, context);
    }



    render() {
        return (
            <ScrollView>
                <Button title='push to new screen' onPress={() => {
                    this.props.navi
                    navigator.push('Screen11', {title: "hello!"})
                }}/>
                <Button title='push to new screen2' onPress={() => {
                    // navigation.push('Screen2', {title: "hello! 2"})
                }}/>

                <Button title='LayoutScreen' onPress={()=>{
                    // navigation.push('LayoutScreen')
                }}/>
                <Button title='Home' onPress={()=>{
                    // navigation.push('HomeScreen')
                }}/>
                <Button title='Home2' onPress={()=>{
                    // navigation.push('HomeScreen2')
                }}/>
                <Button title='NativeContainer' onPress={()=>{
                    // navigation.push('NativeContainer')
                }}/>
                <Button title='NativeContainer' onPress={()=>{
                    // navigation.push('NativeContainer')
                }}/>

            </ScrollView>
        )
    }
}


export const Screen1 = ({navigation}) => {

     console.log("enter screen 1");

    return <ScrollView>
        {/*console.log("rander screen 1");*/}
        <Button title='push to new screen' onPress={() => {
            navigation.push('Screen11', {title: "hello!"})
        }}/>
        <Button title='push to new screen2' onPress={() => {
            navigation.push('Screen2', {title: "hello! 2"})
        }}/>

        <Button title='LayoutScreen' onPress={()=>{
            navigation.push('LayoutScreen')
        }}/>
        <Button title='Home' onPress={()=>{
            navigation.push('HomeScreen')
        }}/>
        <Button title='Home2' onPress={()=>{
            navigation.push('HomeScreen2')
        }}/>
        <Button title='NativeContainer' onPress={()=>{
            navigation.push('NativeContainer')
        }}/>
        <Button title='NativeContainer' onPress={()=>{
            navigation.push('NativeContainer')
        }}/>

    </ScrollView>
}

export const Screen11 = ({route, navigation}) => {
    console.log("enter screen 11");
    return <View>
        {/*<Text>{route.params.title}</Text>*/}
        <Text>是的发送到</Text>
    </View>
}

export  const  Screen2 = ()=> {
    const  navigator = useNavigation()
    const  route = useRoute()
    console.log("enter screen 2");
    return <View>
            <Text>{route.params.title}</Text>
        </View>
}
