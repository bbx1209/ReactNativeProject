import React, {Component} from 'react'
import {View, Text, Button, NativeModules, NativeEventEmitter, Platform} from 'react-native'
import RCTDeviceEventEmitter from "react-native/Libraries/EventEmitter/RCTDeviceEventEmitter";
import type {EventSubscription} from "react-native/Libraries/vendor/emitter/EventSubscription";


const {MCRNStorage, MCRNEventEmitter}  = NativeModules;

if (Platform.OS !=='android') {
    const  emitter = new NativeEventEmitter(MCRNEventEmitter);
    emitter.addListener('componentDidAppear',function (data) {
        console.log(data)
    })
}


export class NativeContainer extends Component {

    componentDidMount() {
        if (Platform.OS === 'android') {
         RCTDeviceEventEmitter.addListener('MCRNEventEmitter',(value)=>{
            console.log('rn 接收到了'+ value);
        });
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
        RCTDeviceEventEmitter.removeAllListeners();
        }
    }

    render() {

        return (
            <View>
                <Button  title='Native do ' onPress={()=> {
                    MCRNStorage.nativeDoSthNoParam()
                }}/>
                <Button  title='receive const ' onPress={()=> {
                    let const1 = MCRNStorage.Const1
                    let const2 = MCRNStorage.Const2
                    console.log(const1 + ' ' +const2)
                }}/>
                <Button  title='method with param' onPress={()=> {
                   MCRNStorage.nativeDoSth('first param','second param')
                }}/>
                <Button  title='method with callback' onPress={()=> {
                    MCRNStorage.queryCallback('first param',(error, result)=>{
                        if (error) {
                            console.error(error)
                        } else {
                            console.log("console" + result)
                        }
                    })
                }}/>
                <Button  title='method with promise callback' onPress={()=> {
                    MCRNStorage.query('promise param').then(value => console.log(value))
                }}/>

                <Button  title='send event' onPress={()=> {
                    console.log('begin to send event ')
                    MCRNEventEmitter.sendMCEvent('press send event button')
                }}/>

            </View>
        )
    }

}
