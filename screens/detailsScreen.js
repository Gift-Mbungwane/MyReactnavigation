import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import {globalStyles} from './styles/global'

export default function DetailsScreen({navigation}) {

    /*const pressHandler = () => {
        navigation.goBack()
        //this goes to render
        //<Button title='home' onPress={ pressHandler}/>

    }
    */

    return (
        <View style={globalStyles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>

        </View>
    );


}
