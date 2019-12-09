import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

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

				<SearchBar keys={['name']} list={users} callback={this.updateFilteredList} placeholder='Search for a user' backgroundColor='#0070C0' />
			    
				<Text style={styles.header}>Add friends</Text>
				<View style={styles.button_container}>
					{/* <TouchableOpacity style={{marginRight: 5, marginLeft: 10, marginTop: 5, marginBottom: 5, flex: 1}}>
                        <Icon name='times' size={35} color="#80868B" style={{padding:0}} />
					</TouchableOpacity> */}

					<Text style={styles.name}>berend101</Text>

					<TouchableOpacity style={styles.button_container2}>
						<Text style={styles.button1}>Accept</Text>
						<Icon name='user-plus' size={17} color="white" style={{marginRight: 5, marginLeft: 5}} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.button_container2}>
						<Text style={styles.button1}>Decline</Text>
						<Icon name='user-plus' size={17} color="white" style={{marginRight: 5, marginLeft: 5}} />
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
		backgroundColor: '#F8F9FB',
	},
	header: {
        marginVertical: 10,
        textAlign: 'right',
        textTransform: 'uppercase',
        fontSize: 20,
        marginHorizontal: 3+'%',
        borderBottomWidth: 1,
        paddingBottom: 5,
	},
    button_container: {
        marginTop: 10,
        borderWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 10,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: 3 + '%'
    },
    button_container2: {
        marginTop: 9,
        flex: 3,
        borderWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        borderRadius: 10,
        marginRight: 6,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        marginBottom: 5,
        marginTop: 5
    },
    button1: {
        fontSize: 17,
        color: 'white',
    },
    name: {
        flex: 8,
        fontSize: 22,
        marginLeft: 20,
    },
	list_header: {
		fontSize: 23,
		marginBottom: 5,
	},
});
