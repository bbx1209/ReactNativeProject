import React, {Component} from 'react'
import {View, Text, Button, NativeModules} from 'react-native'


const {MCRNStorage}  = NativeModules;

export class NativeContainer extends Component {

    render() {
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

            </View>
        )
    }

}
