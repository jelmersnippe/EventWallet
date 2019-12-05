import React, { Component } from 'react'
import {
	Text,
	TextInput,
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';

const KEYS_TO_FILTERS = ['name'];

import FriendList from '../components/FriendList'

const users = [
	{
		name: 'berend101',
		status: 'pending'
	},
	{
		name: 'berend102',
		status: 'friend'
	},
	{
		name: 'berend103',
		status: 'unknown'
	},
	{
		name: 'berend104',
        status: 'unknown'
	},
	{
		name: 'berend105',
		status: 'unknown'
	},
	{
		name: 'berend106',
		status: 'friend'
	},
	{
		name: 'berend107',
		status: 'friend'
	},
	{
		name: 'berend108',
		status: 'pending'
	},
	{
		name: 'berend109',
		status: 'pending'
	},
	{
		name: 'berend110',
		status: 'friend'
	},
	{
		name: 'berend111',
		status: 'unknown'
	},
	{
		name: 'berend112',
		status: 'friend'
	},
	{
		name: 'berend113',
		status: 'friend'
	},
	{
		name: 'berend114',
		status: 'pending'
	},
	{
		name: 'berend115',
		status: 'friend'
	},
	{
		name: 'berend116',
		status: 'friend'
	}
]

export default class FriendOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            filteredUsers: [],
        }

    }

    searchUpdated(term) {
        this.setState({searchTerm: term})
        this.setState({filteredUsers: users.filter(createFilter(term, KEYS_TO_FILTERS))})

        if(term == ''){
            this.setState({filteredUsers: []})
        }
    }

	render() {
	    return (
			<View style={styles.container}>

			    <SearchInput
                    onChangeText={(term) => {this.searchUpdated(term)}}
                        style={styles.searchInput}
                        placeholder="Search for another user"
                />

				<Text style={styles.list_header}>Add friends</Text>
				<View style={{ flexDirection: 'row' }}>
					<Text style={styles.name}>berend101</Text>
					<TouchableOpacity>
						<Text style={styles.button1}>Accept</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.button2}>Decline</Text>
					</TouchableOpacity>
				</View>

                <FriendList
                    friendData={this.state.filteredUsers}
                />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginHorizontal: 5+'%',
	},
	textinput: {
		width: 80 + '%',
		fontSize: 20,
		height: 45,
		marginVertical: 15,
		backgroundColor: 'gray',
		padding: 10,
	},
	list_header: {
		fontSize: 23,
		marginBottom: 5,
	},


});
