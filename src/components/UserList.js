import React, { Component } from 'react'
import { 
    View,
} from 'react-native'

import {
    UserItem,
    HeaderText
 } from './index'
import { Colors } from './GlobalVariables';

export default class UserList extends Component {
    render() {
        return (
            <View>
				<HeaderText text={this.props.headerText} textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                {this.props.data.map(
                    (item) => {
                        return <UserItem item={item} key={item.id}/>
                    }
                )}
            </View>
        );
    }
}
