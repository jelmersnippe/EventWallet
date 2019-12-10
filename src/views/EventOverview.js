import React, { Component } from 'react'
import {
	View,
	StyleSheet
} from 'react-native'

import { 
	EventList, 
	SearchBar 
} from '../components'


const events = [
	{
		name: 'Shockerz - The Raw Gathering',
		amount: '8',
		location: 'Autotron, Rosmalen',
		datetime: 'Zaterdag 14 dec 14:00 - 01:00'
	},
	{
		name: 'FaggotPop',
		amount: '20',
		location: 'Dikke zwans',
		datetime: 'Zondag 15 dec 15:00 - 02:00'
	},
	{
		name: 'GayPop - Spread Aids',
		amount: '30',
		location: 'Maaskantje',
		datetime: 'Maandag 16 dec 16:00 - 03:00'
	},
	{
		name: 'Blyat',
		amount: '5',
		location: 'Moskou',
		datetime: 'Dinsdag 17 dec 17:00 - 04:00'
	},
	{
		name: 'Priem - Hardcore will never die',
		amount: '12',
		location: 'Schijndel',
		datetime: 'Woensdag 18 dec 18:00 - 05:00'
	},
	{
		name: 'Blyat69',
		amount: '23',
		location: 'Finland',
		datetime: 'Donderdag 19 dec 19:00 - 06:00'
	},
	{
		name: 'Berends4Berends - Sing Alone',
		amount: '50',
		location: 'Autotron, Rosmalen',
		datetime: 'Vrijdag 20 dec 20:00 - 07:00'
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
	
	updateFilteredList = (newFilteredList, newSearchTerm) => {
		this.setState({filteredEvents: newFilteredList})
		this.setState({searchTerm: newSearchTerm})
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
				<SearchBar keys={['name', 'location', 'datetime']} list={events} callback={this.updateFilteredList} placeholder={'Search for an event'} backgroundColor='#F6CF3A' />
				
				<EventList
                    eventData={this.state.searchTerm != '' ? this.state.filteredEvents : events}
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
