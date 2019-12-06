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

		<TextInput style={styles.textinput} placeholder="Search for friends"/>

            <View style={styles.list_container}>
                <Text style={styles.list_header}>Add friends</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.name}>berend101</Text>
                    <TouchableOpacity>
                        <Text style={styles.button1}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.button2}>Decline</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.list_header}>Friendlist</Text>
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
    alignItems: 'center',
    padding: 10+'%',
    },
    list_container: {

    },
  list_header: {
    fontSize: 23,
    marginBottom: 5,
  },
  textinput: {
    width: 80+'%',
    fontSize: 20,
    height: 45,
    marginBottom: 15,
    backgroundColor: 'gray',
    padding: 10,
    },
   

});
