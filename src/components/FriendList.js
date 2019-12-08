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
        textAlign: 'right',
        textTransform: 'uppercase',
        fontSize: 20,
        marginHorizontal: 3+'%',
        borderBottomWidth: 1,
        paddingBottom: 5,
    }
})