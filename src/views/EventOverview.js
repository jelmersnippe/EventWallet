import React, { Component } from 'react'
import {
	SafeAreaView,
	TextInput,
	StyleSheet
} from 'react-native'

import EventList from '../components/EventList'


const festivals = [
	{
		festival: 'Festival 1',
		amount: '10',
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
			<SafeAreaView style={styles.container}>
				<TextInput
					placeholder='Searchbar placeholder'
					style={{ borderWidth: 1 }}
				/>
				<EventList
					festivalData={festivals}
				/>
			</SafeAreaView >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 100+'%',
		paddingBottom: 80,
		backgroundColor: '#F9F8FB',
		
	},
});
