import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import FriendList from '../components/FriendList'
import SearchBar from '../components/SearchBar'

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
	
	updateFilteredList = (newFilteredList) => {
		this.setState({filteredUsers: newFilteredList})
	}

	render() {
	    return (
			<View style={styles.container}>

				<SearchBar keys={['name']} list={users} callback={this.updateFilteredList} placeholder='Search for a user' />
			    
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
	},
	list_header: {
		fontSize: 23,
		marginBottom: 5,
	},
});
