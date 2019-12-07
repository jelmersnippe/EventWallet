import React, { Component } from 'react'
import { 
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

import FriendItem from './FriendItem'

export default class FriendList extends Component {
    render() {
        return (
            <View style={styles.container}>
				<Text style={styles.title}>Friendlist</Text>
                <FlatList
                    data={this.props.friendData}
                    renderItem={({ item }) => (
                        <FriendItem
                            name={item.name}
                            key={item.name}
                        />
                    )}
                    keyExtractor={item => item.name}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        marginVertical: 10,
        paddingLeft: 5,
        textAlign: 'left',
        textTransform: "uppercase",
        fontSize: 18,
        borderBottomWidth: 1,
    }
})