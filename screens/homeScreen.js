import React, {useState} from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from './styles/global';
import DetailsScreen from "./detailsScreen";

export default function HomeScreen({ navigation }) {
    
    const [review, setReviews] = useState([
        { title: 'Gift, new React Developer', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta catch them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not yet "Final" fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);


    return (
        <View style={globalStyles.container}>
            <FlatList
                data={review}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );


}

