import * as  React from "react";
import {View, Text, ScrollView, Alert, Button, StyleSheet} from 'react-native'
import {MyComponent, MyComponentII, MyComponentIII} from "../rnjs/RNJSX";
import {Card, Card3, CardII, MemoTest, MyCustomButton, MyInputView, UseStateTest} from "../rnjs/rnevent";
import {CustomHook, UseEffect, UseEffect2, UseRef, UseRender} from "../rnjs/hooks";
import {useState} from "react";

export const HomeScreen = ((route) => {
    const [count, setCount] = useState(0)
    return (
        <View style={styles.box}>
            <View style={{justifyContent: 'center'}}>

                <ScrollView>
                    <Text style={{fontSize: 40, borderWidth: 2}}>{"dfgsdfgsdfgsdfg"}</Text>
                    <Text style={{width: 200, fontSize: 20, borderWidth: 1, justifyContent: 'center'}}
                          onPress={() => {
                              Alert.alert('点击了文字');
                          }}> {"汉语测试"} </Text>
                    <Button title='这是一个按钮' onPress={() => {
                        // Alert.alert('点击了按钮');
                        console.log('点击按钮');
                    }}
                    >

                    </Button>

                    <MyComponentII title="MyComponentII"/>
                    <MyComponent/>

                    <MyComponentIII title="MyComponentIII" color="rgb(80, 108, 206)"/>
                    {/*<Counter/>*/}

                    <MyCustomButton title={` on click:  ${count}`} onIncrement={() => setCount(count + 1)}/>

                    <Card title="title" showButton={false} color={'#FF5500'}/>
                    <View height={20} color={'#FFFF00'}/>
                    <Card title="title with button" showButton={true}/>

                    <View>
                        <CardII title={'title'}/>
                        <CardII title={'title2'} buttonTitle={'Press me'}/>
                    </View>


                    <View>
                        <Card3 error={true}/>
                        <Card3 loading={true}/>
                        <Card3 loading={false} title='Title'/>
                    </View>

                    <View>
                        <MyInputView/>
                    </View>

                    <MemoTest/>
                    <UseStateTest/>
                    <UseRender/>
                    <UseEffect/>
                    <UseEffect2/>
                    <UseRef/>
                    <CustomHook/>

                </ScrollView>
            </View>
        </View>
    )
})

export  const  HomeScreen2 = ((route)=>{
    return (
        <View style={styles.box}>
            <Text>Home</Text>
        </View>
    )
})

const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    }
})



