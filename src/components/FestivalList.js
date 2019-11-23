import React, { Component } from 'react'
import { 
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native'

import FestivalItem from './FestivalItem'

export default class FestivalList extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>Attending festivals</Text>
                <FlatList
                    data={this.props.festivalData}
                    renderItem={({ item }) => (
                        <FestivalItem
                            festival={item.festival}
                            amount={item.amount}
                            key={item.festival}
                        />
                    )}
                    keyExtractor={item => item.festival}
                />
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    title: {
        width: 100+'%',
        textAlign: 'center',
        marginVertical: 10,
    }
})
