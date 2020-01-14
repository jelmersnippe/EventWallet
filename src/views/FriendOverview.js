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
        name: "Emma",
        status: "unknown"
    },
    {
        name: "Olivia",
        status: "unknown"
    },
    {
        name: "Ava",
        status: "unknown"
    },
    {
        name: "Isabella",
        status: "unknown"
    },
    {
        name: "Sophia",
        status: "unknown"
    },
    {
        name: "Charlotte",
        status: "unknown"
    },
    {
        name: "Mia",
        status: "unknown"
    },
    {
        name: "Amelia",
        status: "unknown"
    },
    {
        name: "Harper",
        status: "unknown"
    },
    {
        name: "Evelyn",
        status: "unknown"
    },
    {
        name: "Abigail",
        status: "unknown"
    },
    {
        name: "Emily",
        status: "unknown"
    },
    {
        name: "Elizabeth",
        status: "unknown"
    },
    {
        name: "Mila",
        status: "unknown"
    },
    {
        name: "Ella",
        status: "unknown"
    },
    {
        name: "Avery",
        status: "unknown"
    },
    {
        name: "Sofia",
        status: "unknown"
    },
    {
        name: "Camila",
        status: "unknown"
    },
    {
        name: "Aria",
        status: "unknown"
    },
    {
        name: "Scarlett",
        status: "unknown"
    },
    {
        name: "Victoria",
        status: "unknown"
    },
    {
        name: "Madison",
        status: "unknown"
    },
    {
        name: "Luna",
        status: "unknown"
    },
    {
        name: "Grace",
        status: "unknown"
    },
    {
        name: "Chloe",
        status: "unknown"
    },
    {
        name: "Penelope",
        status: "unknown"
    },
    {
        name: "Layla",
        status: "unknown"
    },
    {
        name: "Riley",
        status: "unknown"
    },
    {
        name: "Zoey",
        status: "unknown"
    },
    {
        name: "Nora",
        status: "unknown"
    },
    {
        name: "Lily",
        status: "unknown"
    },
    {
        name: "Eleanor",
        status: "unknown"
    },
    {
        name: "Hannah",
        status: "unknown"
    },
    {
        name: "Lillian",
        status: "unknown"
    },
    {
        name: "Addison",
        status: "unknown"
    },
    {
        name: "Aubrey",
        status: "unknown"
    },
    {
        name: "Ellie",
        status: "unknown"
    },
    {
        name: "Stella",
        status: "unknown"
    },
    {
        name: "Natalie",
        status: "unknown"
    },
    {
        name: "Zoe",
        status: "unknown"
    },
    {
        name: "Leah",
        status: "unknown"
    },
    {
        name: "Hazel",
        status: "unknown"
    },
    {
        name: "Violet",
        status: "unknown"
    },
    {
        name: "Aurora",
        status: "unknown"
    },
    {
        name: "Savannah",
        status: "unknown"
    },
    {
        name: "Audrey",
        status: "unknown"
    },
    {
        name: "Brooklyn",
        status: "unknown"
    },
    {
        name: "Bella",
        status: "unknown"
    },
    {
        name: "Claire",
        status: "unknown"
    },
    {
        name: "Skylar",
        status: "unknown"
    },
    {
        name: "Liam",
        status: "unknown"
    },
    {
        name: "Noah",
        status: "unknown"
    },
    {
        name: "William",
        status: "unknown"
    },
    {
        name: "James",
        status: "unknown"
    },
    {
        name: "Oliver",
        status: "unknown"
    },
    {
        name: "Benjamin",
        status: "unknown"
    },
    {
        name: "Elijah",
        status: "unknown"
    },
    {
        name: "Lucas",
        status: "unknown"
    },
    {
        name: "Mason",
        status: "unknown"
    },
    {
        name: "Logan",
        status: "unknown"
    },
    {
        name: "Alexander",
        status: "unknown"
    },
    {
        name: "Ethan",
        status: "unknown"
    },
    {
        name: "Jacob",
        status: "unknown"
    },
    {
        name: "Michael",
        status: "unknown"
    },
    {
        name: "Daniel",
        status: "unknown"
    },
    {
        name: "Henry",
        status: "unknown"
    },
    {
        name: "Jackson",
        status: "unknown"
    },
    {
        name: "Sebastian",
        status: "unknown"
    },
    {
        name: "Aiden",
        status: "unknown"
    },
    {
        name: "Matthew",
        status: "unknown"
    },
    {
        name: "Samuel",
        status: "unknown"
    },
    {
        name: "David",
        status: "unknown"
    },
    {
        name: "Joseph",
        status: "unknown"
    },
    {
        name: "Carter",
        status: "unknown"
    },
    {
        name: "Owen",
        status: "unknown"
    },
    {
        name: "Wyatt",
        status: "unknown"
    },
    {
        name: "John",
        status: "unknown"
    },
    {
        name: "Jack",
        status: "unknown"
    },
    {
        name: "Luke",
        status: "unknown"
    },
    {
        name: "Jayden",
        status: "unknown"
    },
    {
        name: "Dylan",
        status: "unknown"
    },
    {
        name: "Grayson",
        status: "unknown"
    },
    {
        name: "Levi",
        status: "unknown"
    },
    {
        name: "Isaac",
        status: "unknown"
    },
    {
        name: "Gabriel",
        status: "unknown"
    },
    {
        name: "Julian",
        status: "unknown"
    },
    {
        name: "Mateo",
        status: "unknown"
    },
    {
        name: "Anthony",
        status: "unknown"
    },
    {
        name: "Jaxon",
        status: "unknown"
    },
    {
        name: "Lincoln",
        status: "unknown"
    },
    {
        name: "Joshua",
        status: "unknown"
    },
    {
        name: "Christopher",
        status: "unknown"
    },
    {
        name: "Andrew",
        status: "unknown"
    },
    {
        name: "Theodore",
        status: "unknown"
    },
    {
        name: "Caleb",
        status: "unknown"
    },
    {
        name: "Ryan",
        status: "friend"
    },
    {
        name: "Asher",
        status: "friend"
    },
    {
        name: "Nathan",
        status: "friend"
    },
    {
        name: "Thomas",
        status: "pending"
    },
    {
        name: "Leo",
        status: "pending"
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
        id = 1
        let usersWithID = users.map(user => {
            user.id = id
            id++
            return user
        })


        let friendList = this.sortUsers(usersWithID.filter(createFilter('friend', ['status'])))
        let pendingList = this.sortUsers(usersWithID.filter(createFilter('pending', ['status'])))
        let filteredUsers = this.sortUsers(usersWithID)

		this.setState({friendList: friendList})
        this.setState({pendingList: pendingList})
        this.setState({filteredUsers: filteredUsers})
	}

	render() {
	    return (
			<View style={styles.container}>
				<SearchBar keys={['name']} list={users} callback={this.updateFilteredList} placeholder='Search for a user' backgroundColor={Colors.friendColor} />
			
				<ScrollView
                    style={styles.user_list_container}
                	showsVerticalScrollIndicator={false}
				>
                    {this.state.pendingList.length > 0 &&
					    <UserList headerText='Pending requests' data={this.state.pendingList}/>
                    }
					
					{this.state.searchTerm == '' && !this.state.friendList.length == 0
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
