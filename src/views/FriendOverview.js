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

				<SearchBar keys={['name']} list={users} callback={this.updateFilteredList} />
			    
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
		backgroundColor: '#F8F9FB'
		//marginHorizontal: 5 + '%'
	},
	list_header: {
		fontSize: 23,
		marginBottom: 5,
	},
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


});
