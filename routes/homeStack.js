import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailsScreen from "../screens/detailsScreen";
import HomeScreen from "../screens/homeScreen";

const screens = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home Page'
        }
    },
    DetailsScreen: {
        screen: DetailsScreen,
        navigationOptions: {
            title: 'Review Details'
        }
    }
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);