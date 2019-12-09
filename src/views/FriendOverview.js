import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
} from 'react-native'
import { createFilter } from 'react-native-search-filter'

import UserList from '../components/UserList'
import SearchBar from '../components/SearchBar'
import UserItem from '../components/UserItem'

const users = [
	{
		name: 'AnaalAdmiraal69',
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
		status: 'pending'
	},
	{
		name: 'berend106',
		status: 'friend'
	},
	{
		name: 'berend107',
		status: 'unknown'
	},
	{
		name: 'berend108',
		status: 'friend'
	},
	{
		name: 'Jeukende bilnaad 88',
		status: 'pending'
	},
	{
		name: 'Massieve Zwanus',
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
			friendList: [],
			pendingList: [],
        }
    }
	
	updateFilteredList = (newFilteredList, newSearchTerm) => {
		this.setState({filteredUsers: newFilteredList})
		this.setState({searchTerm: newSearchTerm})
	}

	componentDidMount(){
		this.setState({friendList: users.filter(createFilter('friend', ['status']))})
		this.setState({pendingList: users.filter(createFilter('pending', ['status']))})
	}

	render() {
	    return (
			<View style={styles.container}>
				<SearchBar keys={['name']} list={users} callback={this.updateFilteredList} placeholder='Search for a user' backgroundColor='#0070C0' />
			
				{ this.state.searchTerm == '' &&
					<View style={styles.pending_list_container}>
						{this.state.pendingList.length > 0 && <Text style={styles.pending_list_title}>Pending requests</Text>}
						{ this.state.pendingList.map((item) => {
							return <UserItem item={item} />
						}) }
					</View>
				}
				


				{/* {this.state.searchTerm == '' && <UserList headerText='Pending requests' friendData={this.state.pendingList}/>} */}
				
				{this.state.searchTerm == '' 
				? <UserList headerText='Friendlist' friendData={this.state.friendList}/>
				: <UserList headerText='Users' friendData={this.state.filteredUsers} />}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F8F9FB',
	},
	pending_list_container: {
        paddingHorizontal: 5+'%',
    },
    pending_list_title: {
        marginVertical: 10,
        textAlign: 'right',
        textTransform: 'uppercase',
        fontSize: 20,
        borderBottomWidth: 1,
        paddingBottom: 5,
    }
});
