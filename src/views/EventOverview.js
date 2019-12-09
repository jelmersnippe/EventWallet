import React, { Component } from 'react'
import {
	View,
	TextInput,
	StyleSheet
} from 'react-native'

import EventList from '../components/EventList'
import SearchBar from '../components/SearchBar'


const events = [
	{
		name: 'Shockerz - The Raw Gathering',
		amount: '8',
		location: 'Autotron, Rosmalen'
	},
	{
		name: 'Festival 2',
		amount: '20',
		location: 'Dikke zwans'
	},
	{
		name: 'Festival 3',
		amount: '30',
		location: 'Autotron, Rosmalen'
	},
	{
		name: 'Festival 4',
		amount: '5',
		location: 'Autotron, Rosmalen'
	},
	{
		name: 'Festival 5',
		amount: '12',
		location: 'Autotron, Rosmalen'
	},
	{
		name: 'Festival 6',
		amount: '23',
		location: 'Autotron, Rosmalen'
	},
	{
		name: 'Festival 7',
		amount: '50',
		location: 'Autotron, Rosmalen'
	},
];


export default class EventOverview extends Component {
	constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            filteredEvents: [],
        }
    }
	
	updateFilteredList = (newFilteredList) => {
		console.log(newFilteredList)
		this.setState({filteredEvents: newFilteredList})
	}


	fetchFestivalData() {
		// Fetch event data for the user
	}

	componentDidMount() {
		this.fetchFestivalData();
	}

	render() {
		return (
			<View style={styles.container}>
				<SearchBar keys={['name', 'location']} list={events} callback={this.updateFilteredList} placeholder={'Search for an event'} backgroundColor='#F6CF3A' />
				
				<EventList
					// if (filteredEvents) filteredEvents, else events
					eventData={events}
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
