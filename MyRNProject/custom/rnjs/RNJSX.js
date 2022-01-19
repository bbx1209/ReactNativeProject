import React, { useEffect, useState } from 'react'

import { View, Button, Alert, Text } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

export function MyComponent() {
    return (
        <View>
            <Button title="button" color="#FF5500"/>
        </View>
    )
}

export function MyComponentII({ title }) {
    return (
        <View >

            <Button title={title} color="#1ACDA5" onPress={() => {
                // Alert.alert("button")
                console.warn("======" + "button")
            }}/>

        </View>
    )
}


interface  Props {
    title:string,
    color?:string
}

export function MyComponentIII({ title, color='#1ACDA5' }:Props) {
    return <View>
        <Button title={title} color={color} onPress={ ()=>{
            console.log('new name', city, otherProperties);
        }
        }/>
    </View>
}

export  function Counter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const id = setInterval(() => setCount((count) => count + 1), 1000)
        return () => clearInterval(id)
    }, [])
    return <Text style={{ fontSize:20}}> {count} </Text>
}


const  people = {
    name: 'lll',
    age:29,
    hairColor:'f50',
    location:{
        city:'san'
    }
}

const {
    name:myName,
    location:{city},
    ...otherProperties
}=people

