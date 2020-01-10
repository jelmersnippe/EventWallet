import React, { Component } from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import { createFilter } from 'react-native-search-filter'
import { ScrollView } from 'react-native-gesture-handler'

import {
    UserList,
    SearchBar,
} from '../components'
import { Colors } from '../components/GlobalVariables'

const users = [
    {
        id: '1',
        name: 'AnaalAdmiraal69',
        status: 'pending'
    },
    {
        id: '2',
        name: 'berend102',
        status: 'friend'
    },
    {
        id: '3',
        name: 'berend103',
        status: 'unknown'
    },
    {
        id: '4',
        name: 'berend104',
        status: 'unknown'
    },
    {
        id: '5',
        name: 'berend105',
        status: 'pending'
    },
    {
        id: '6',
        name: 'berend106',
        status: 'friend'
    },
    {
        id: '7',
        name: 'berend107',
        status: 'unknown'
    },
    {
        id: '8',
        name: 'berend108',
        status: 'friend'
    },
    {
        id: '9',
        name: 'Jeukende bilnaad 88',
        status: 'pending'
    },
    {
        id: '10',
        name: 'Massieve Zwanus',
        status: 'friend'
    },
    {
        id: '11',
        name: 'berend111',
        status: 'unknown'
    },
    {
        id: '12',
        name: 'berend112',
        status: 'friend'
    },
    {
        id: '13',
        name: 'berend113',
        status: 'friend'
    },
    {
        id: '14',
        name: 'berend114',
        status: 'pending'
    },
    {
        id: '15',
        name: 'berend115',
        status: 'friend'
    },
    {
        id: '16',
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
    
    compareUsers(a, b){
        const userA = a.name.toLowerCase()
        const userB = b.name.toLowerCase()

        let comparison = 0
        if(userA > userB){
            comparison = 1
        } else {
            comparison = -1
        }

        return comparison
    }

    sortUsers(userList){
        return userList.sort(this.compareUsers)
    }
	
	updateFilteredList = (newFilteredList, newSearchTerm) => {
		this.setState({filteredUsers: this.orderSearchResults(newFilteredList)})
		this.setState({searchTerm: newSearchTerm})
	}

	orderSearchResults(searchResults){
		let friendList = []
		let unknownList = []

		searchResults.map((item) => {
			if(item.status == 'friend'){
				friendList.push(item)
			}
			else if(item.status == 'unknown'){
				unknownList.push(item)
			}
        })
        
        let sortedFriendList = this.sortUsers(friendList)
        let sortedUnknownList = this.sortUsers(unknownList)

		return sortedFriendList.concat(sortedUnknownList)
    }

	componentDidMount(){
        let friendList = this.sortUsers(users.filter(createFilter('friend', ['status'])))
        let pendingList = this.sortUsers(users.filter(createFilter('pending', ['status'])))

		this.setState({friendList: friendList})
		this.setState({pendingList: pendingList})
	}

	render() {
	    return (
			<View style={styles.container}>
				<SearchBar keys={['name']} list={users} callback={this.updateFilteredList} placeholder='Search for a user' backgroundColor={Colors.friendColor} />
			
				<ScrollView
                    style={styles.user_list_container}
                	showsVerticalScrollIndicator={false}
				>
					<UserList headerText='Pending requests' data={this.state.pendingList}/>
					
					{this.state.searchTerm == '' 
					? <UserList headerText='Friendlist' data={this.state.friendList}/>
					: <UserList headerText='Users' data={this.state.filteredUsers} />}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.backgroundColor,
    },
    user_list_container: {
        paddingHorizontal: 3+'%'
    }
});
