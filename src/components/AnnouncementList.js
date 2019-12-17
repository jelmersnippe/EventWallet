import React, { Component } from 'react'
import { 
    View,
    StyleSheet
} from 'react-native'

import { 
    AnnouncementItem 
} from './index'

export default class AnnouncementList extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.data.map(
                    (item) => {
                        return <AnnouncementItem item={item} key={item.id}/>
                    }
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 3 +'%',
    },
})