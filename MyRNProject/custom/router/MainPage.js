import { Component } from "react";
import { View } from "react-native";

export default class MainPage  extends Component {
    static navitaionOptions = {
        title:'详情页',
        
    }

    render(){
       const {navigate} =  this.props.navigation;
       return (
           <View >
               <Text> "main page"</Text>
           </View>
       );
    }
}