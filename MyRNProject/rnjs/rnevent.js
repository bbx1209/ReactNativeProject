import {Button} from "react-native";
import React from "react";

export function  MyCustomButton ({title, onIncrement}) {
    return <Button title={title} onPress={onIncrement}/>
}
