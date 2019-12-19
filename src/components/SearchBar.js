import React, { Component } from 'react'
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native'

import { createFilter } from 'react-native-search-filter';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Fonts, headerShadow } from './GlobalVariables'
import { BackHandler } from 'react-native';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        }
    }

    componentDidMount() {
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.handleBackButtonPressAndroid
        );
    }

    componentWillUnmount() {
        BackHandler.removeEventListener(
            'hardwareBackPress',
            this.handleBackButtonPressAndroid
        );
    }

    handleBackButtonPressAndroid = () => {

        if (this.state.searchTerm != '') {
            this.searchUpdated('');

            // We have handled the back button
            // Return `true` to prevent react-navigation from handling it
            return true;
        } else {
            return false;
        }
    };

    searchUpdated(term) {
        this.setState({ searchTerm: term })
        this.props.callback(this.props.list.filter(createFilter(term, this.props.keys)), term)

        if (term == '') {
            this.props.callback([], term)
        }
    }

    render() {
        return (
            <View style={[styles.search_container, headerShadow, { backgroundColor: this.props.backgroundColor }]}>
                <View style={styles.search_bar}>
                    <Icon name='search' size={30} color="#80868B" style={styles.search_icon} />
                    <TextInput
                        onChangeText={(term) => { this.searchUpdated(term) }}
                        value={this.state.searchTerm}
                        placeholder={this.props.placeholder}
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
        width: 100 + '%',
        paddingHorizontal: 5 + '%',
	},
	search_bar: {
		flexDirection: 'row',
		width: 100+'%',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 5,
		marginVertical: 15,
		backgroundColor: '#FFF',
	},
	search_icon: {
		alignSelf: 'center',
		flex: 1,
	},
	search_input: {
		flex: 9,
	    fontFamily: Fonts.text,
	    fontSize: 18,
	}
})
