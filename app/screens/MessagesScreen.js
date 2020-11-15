import React, { useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import ListItem from '../components/ListItem'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        const newMessages = messages.filter(messageSingle => {
            return messageSingle.id !== message.id
        })
        setMessages(newMessages)
    }

    return (
        <SafeAreaView style={styles.content}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => alert('clicked')}
                        renderRightActions={() =>
                            <TouchableWithoutFeedback onPress={() => handleDelete(item)}>
                                <View style={{ backgroundColor: 'red', width: 70, justifyContent: 'center', alignItems: 'center' }}>
                                    <MaterialCommunityIcons
                                        name='trash-can'
                                        size={70} />
                                </View>
                            </TouchableWithoutFeedback>
                        }
                    />
                }
                refreshing={refreshing}
                onRefresh={() => {
                    setRefreshing([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        // backgroundColor: 'yellow'
    }
});

export default MessagesScreen;