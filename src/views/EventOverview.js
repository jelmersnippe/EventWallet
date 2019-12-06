import React, { Component } from 'react'
import {
	View,
	TextInput,
	StyleSheet
} from 'react-native'

import EventList from '../components/EventList'


const festivals = [
	{
		festival: 'Shockerz - The Raw Gathering',
		amount: '8',
	},
	{
		festival: 'Festival 2',
		amount: '20',
	},
	{
		festival: 'Festival 3',
		amount: '30',
	},
	{
		festival: 'Festival 4',
		amount: '5',
	},
	{
		festival: 'Festival 5',
		amount: '12',
	},
	{
		festival: 'Festival 6',
		amount: '23',
	},
	{
		festival: 'Festival 7',
		amount: '50',
	},
];


export default class EventOverview extends Component {

	fetchFestivalData() {
		// Fetch festival data for the user
	}

	componentDidMount() {
		this.fetchFestivalData();
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.search_container}>
					<TextInput
						placeholder='Searchbar placeholder'
						style={styles.search_bar}
					/>
				</View>
				<EventList
					festivalData={festivals}
				/>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 100+'%',
		backgroundColor: '#F8F9FB',
	},
	search_container: {
		backgroundColor: '#F6CF3A',
	},
	search_bar: {
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		marginHorizontal: 5+'%',
		marginVertical: 3+'%',

		backgroundColor: '#FFF'
	}
});
