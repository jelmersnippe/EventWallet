import React, { Component } from 'react'
import { 
    View,
    StyleSheet
} from 'react-native'

import UserItem from './UserItem'
import HeaderText from './HeaderText'

export default class UserList extends Component {
    render() {
        return (
            <View style={styles.container}>

				<HeaderText text={this.props.headerText} />
                {this.props.data.map(
                    (item) => {
                        return <UserItem item={item}/>
                    }
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5+'%',
    },
})