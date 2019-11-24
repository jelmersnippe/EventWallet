import React, { Component } from 'react'
import { 
    SafeAreaView,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native'

import FestivalItem from './FestivalItem'

export default class FestivalList extends Component {
    render() {
        return (
            <SafeAreaView>
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
            </SafeAreaView>
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
