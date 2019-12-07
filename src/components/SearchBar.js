import React, { Component } from 'react'
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native'

import { createFilter } from 'react-native-search-filter';
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        }
    }

    searchUpdated(term) {
        this.setState({searchTerm: term})
        this.props.callback(this.props.list.filter(createFilter(term, this.props.keys))) 

        if(term == ''){
            this.props.callback([])
        }
    }

    render(){
        return(
            <View style={styles.search_container}>
                <View style={styles.search_bar}>
                    <Icon name='search' size={30} color="#80868B" style={styles.search_icon} />
                    <TextInput
                        onChangeText={(term) => {this.searchUpdated(term)}}
                        placeholder="Search for another user"
                        placeholderTextColor='#80868B'
                        style={styles.search_input}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	search_container: {
		justifyContent: 'center',
		width: 100+'%',
		backgroundColor: '#F6CF3A',
		paddingHorizontal: 5+'%',
	},
	search_bar: {
		flexDirection: 'row',
		width: 100+'%',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 5,
		marginVertical: 15,

		backgroundColor: '#FFF'
	},
	search_icon: {
		alignSelf: 'center',
		flex: 1,
	},
	search_input: {
		flex: 9,
	}
})
