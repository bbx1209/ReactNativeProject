import {Button, View, Text} from "react-native";
import React from "react";

export function MyCustomButton({title, onIncrement}) {
    return <Button title={title} onPress={onIncrement}/>
}


 export const Card = ({title, showButton , color}) => (
    <View>
        <Text style={{fontSize: 20 ,color:{color}}}>{title}</Text>
        {showButton || <Button title="press me !"/>}
    </View>
)

export  const CardII = ({title, buttonTitle}) => (
    <View>
        <Text style={{fontSize:30}}>{title}</Text>
        {buttonTitle ? <Button title={buttonTitle}/> : null}
    </View>
)






