import {Button, View, Text, TextInput, StyleSheet} from "react-native";
import React, {useState, memo} from "react";

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
                <Text style={{fontSize: 20}}>{title}</Text>
            </View>
        )
    }

    return <View style={{padding: 24}}>{content}</View>
}

//MARK: input

export const MyInputView = () => {
    const [text, setText] = useState('')

    return <View>
        <TextInput
            value={text}
            style={{fontSize: 20, color: 'steelblue'}}
            placeholder='Type here..'
            onChangeText={(text) => {
                setText(text)
            }}
        >
        </TextInput>

        <Text style={{fontSize: 24}}>{'\n'} you entered:{text}</Text>
    </View>
}

// Mark: Memo

export function Label({title}) {
    console.log(`rerender : ${title}`)
    return <Text>{title}</Text>
}

export const LabelMemo = memo(Label)

export function MemoTest({title}) {
    const [count, setCount] = useState(0)
    return <View>
        <Button
            title={`Pressed ${count} times`}
            onPress={() => {
                setCount(count + 1)
            }}
        />
        <LabelMemo title="Label with memo"/>
        <Label title="Label"/>
    </View>
}


// MARK: UseState

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1

export function UseStateTest() {
    const [diceRolls, setDiceRolls] = useState([])

    return <View>
        <Button
            title="Roll dice"
            onPress={() => {
                console.log('+++ press on roll dice')
                setDiceRolls([...diceRolls, randomDiceRoll()])
            }
            }
        />
        {diceRolls.map((diceRoll, index) => (
            <Text style={{fontSize: 24 , color: '#FF5500'}} key ={index}>{diceRoll}</Text>
        ))}
    </View>
}


const  styles = StyleSheet.create ({
    box:{

    }
})





