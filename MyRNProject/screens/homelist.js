import React from 'react'
import {View, Button, Text} from 'react-native'
import {useNavigation, useRoute} from'@react-navigation/native'

export const Screen1 = ({navigation}) => {
    return <View>
        <Button title='push to new screen' onPress={() => {
            navigation.push('Screen11', {title: "hello!"})
        }}></Button>
        <Button title='push to new screen2' onPress={() => {
            navigation.push('Screen2', {title: "hello! 2"})
        }}></Button>

        <Button title='LayoutScreen' onPress={()=>{
            navigation.push('LayoutScreen')
        }}/>
    </View>
}

export const Screen11 = ({route}) => {
    return <View>
        <Text>{route.params.title}</Text>
    </View>
}

export  const  Screen2 = ()=> {
    const  navigator = useNavigation()
    const  route = useRoute()
    return <View>
            <Text>{route.params.title}</Text>
        </View>
}