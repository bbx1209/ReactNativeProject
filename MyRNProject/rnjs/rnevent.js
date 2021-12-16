import {Button, View, Text} from "react-native";
import React from "react";

export function MyCustomButton({title, onIncrement}) {
    return <Button title={title} onPress={onIncrement}/>
}


export const Card = ({title, showButton, color}) => (
    <View>
        <Text style={{fontSize: 20, color: {color}}}>{title}</Text>
        {showButton || <Button title="press me !"/>}
    </View>
)

export const CardII = ({title, buttonTitle}) => (
    <View>
        <Text style={{fontSize: 30}}>{title}</Text>
        {buttonTitle ? <Button title={buttonTitle}/> : null}
    </View>
)

export const Card3 = ({loading, error, title}) => {
    let content

    if (error) {
        content = <Text style={{fontSize: 24, color: 'red'}}> Error </Text>
    } else if (loading) {
        content = <Text style={{fontSize: 24, color: 'gray'}}>loading</Text>
    } else {
        content = (
            <View>
                <Text style={{fontSize:20}}>{title}</Text>
            </View>
        )
    }

    return <View style={{padding: 24}}>{content}</View>
}




