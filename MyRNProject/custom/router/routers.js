
import { createAppContainer, createStackNavigator } from "react-navigation";
import MainPage from "./MainPage";


const AppNavigator = createStackNavigator(
    {
        MainPage: MainPage
    },
    {
        initialRouteName:"MainPage",
        
    },
    
);

export default createAppContainer(AppNavigator);