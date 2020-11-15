import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const items = [
    {
        id: 1,
        image: require('../assets/jacket.jpg'),
        title: 'Jacket',
        subtitle: '100$'
    },
    {
        id: 2,
        image: require('../assets/chair.jpg'),
        title: 'Chair',
        subtitle: '200$'
    }
]

function ListingsContainer(props) {
    return (
        <SafeAreaView style={styles.common}>
            <View style={styles.container}>
                <FlatList
                    data={items}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <ListingDetailsScreen
                            style={styles.card}
                            image={item.image}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    common: {
        backgroundColor: 'beige',
        flex: 1
    },
    card: {
        backgroundColor: 'white',
        width: '80%'
    }
});

export default ListingsContainer;