import React, {useReducer, useEffect, useState, useRef} from 'react'
import {View, Text, TextInput} from "react-native";
import {Button} from "react-native";


function reducer(state, action) {
    switch (action.type) {
        case 'first':
            return {...state, first: action.value}
        case 'last':
            return {...state, last: action.value}
    }
}


export function UseRender() {
    const [state, dispatch] = useReducer(reducer, {first: '', last: ''})
    return <View style={{backgroundColor: '#ff5500'}}>

        <TextInput
            style={{fontSize: 32}}
            placeholder="first"
            value={state.first}
            onChangeText={(text) => {
                dispatch({type: 'first', value: text})
            }}
        />
        <TextInput
            style={{fontSize: 32}}
            placeholder="last"
            value={state.last}
            onChangeText={(text) => {
                dispatch({type: 'last', value: text})
            }}
        />
        <Text style={{fontSize: 32}}>
            Hello{state.first} {state.last}
        </Text>


    </View>
}


export function UseEffect() {
    const [count, setCount] = useState(0)
    const countEvery3 = Math.floor(count / 3)
    useEffect(() => {
        console.log(countEvery3)
    }, [countEvery3])
    return (
        <Button title={`Increment ${count}`} onPress={() => {
            setCount(count + 1)
        }}/>
    )
}

export function UseEffect2() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('UseEffect2')
    })
    return (
        <Button title={`Increment ${count}`} onPress={() => {
            setCount(count + 1)
        }}/>
    )
}

export function UseRef() {
    const intervalRef = useRef()
    const [count, setCount] = useState(0)
    useEffect(() => {
        intervalRef.current = setInterval(() =>
            setCount((count) => count + 1), 1000
        )
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return <View>
        <Text style={{fontSize: 50}}>{count}</Text>
        <Button title='stop' onPress={() => {
            clearInterval(intervalRef.current)
        }}/>

    </View>
}

function useInterval(callback, delay) {
    const savedCallBack = useRef()


    useEffect(() => {
        savedCallBack.current = callback
    }, [callback])


    useEffect(() => {
        if (delay != null) {
            let id = setInterval(() => {
                savedCallBack.current()
            }, delay)
            return () => clearInterval(id)
        }
    }, [delay])

}

export function CustomHook() {
    const [count, setCount] = useState(0)
    useInterval(() => {
        setCount(count + 1)
    }, 1000)
    return <Text style={{fontSize: 50}}> {count}</Text>
}





