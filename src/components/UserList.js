import React, { Component } from 'react'
import { 
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

import UserItem from './UserItem'

export default class UserList extends Component {
    render() {
        return (
            <View style={styles.container}>
				<Text style={styles.title}>{this.props.headerText}</Text>
                {this.props.data.map(
                    (item) => {
                        return <UserItem item={item}/>
                    }
                )}
                {/* <FlatList


                    data={this.props.friendData}
                    renderItem={({ item }) => (
                        <UserItem
                            item={item}
                        />
                    )}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5+'%',
    },
    title: {
        marginVertical: 10,
        textAlign: 'right',
        textTransform: 'uppercase',
        fontSize: 20,
        borderBottomWidth: 1,
        paddingBottom: 5,
    }
})