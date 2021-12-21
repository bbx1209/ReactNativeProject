import React, {Component} from 'react'
import {View, Text, Button, NativeModules, NativeEventEmitter} from 'react-native'


const {MCRNStorage, MCRNEventEmitter}  = NativeModules;

const  emitter = new NativeEventEmitter(MCRNEventEmitter);




export class NativeContainer extends Component {

    render() {
        emitter.addListener('componentDidAppear',function (data) {
            console.log(data)
        })
        return (
            <View>
                <Button  title='Native do ' onPress={()=> {
                    MCRNStorage.nativeDoSth()
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
                    MCRNStorage.query('first param',(error, result)=>{
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
                    MCRNEventEmitter.sendMCEvent('press send event button')
                }}/>

            </View>
        )
    }

}
