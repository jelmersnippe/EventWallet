import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import FriendList from '../components/FriendList'

const friends = [
	{
		name: 'berend101'
	},
	{
		name: 'berend102'
	},
	{
		name: 'berend103'
	},
	{
		name: 'berend104'
	},
	{
		name: 'berend105'
	},
	{
		name: 'berend106'
	},
	{
		name: 'berend107'
	},
	{
		name: 'berend108'
	}
]

export default class FriendOverview extends Component {
  render() {
    return (
		<View style={styles.container}>
		<Text style={styles.header}>FestiWallet</Text>

		<TextInput style={styles.textinput} placeholder="Search for friends"/>

		<View>
			<Text style={styles.header2}>Add friends</Text>
			<View style={{flexDirection: 'row', paddingLeft: 30, paddingRight:30, paddingBottom: 10}}>
			<Text style={{width:200, fontSize: 18}}>Berend101</Text>
			<TouchableOpacity>
				<Text style={{width:80, fontSize: 18}}>Accept</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button}>
				<Text style={{width:80, fontSize: 18}}>Decline</Text>
			</TouchableOpacity>
			</View>

			<Text style={styles.header2}>Friendlist</Text>
			<FriendList 
				friendData={friends}
			/>
		</View>
		</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    paddingBottom: 10,
    marginBottom: 10,
    paddingLeft: 140,
    paddingRight: 50,
    justifyContent: 'center',
  },
  header2: {
    fontSize: 23,
    paddingBottom: 5,
    marginBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textinput: {
    fontSize: 20,
    height: 45,
    marginBottom: 15,
    backgroundColor: 'gray',
    paddingLeft: 10,
    marginLeft: 30,
    marginRight: 30,
    },
});