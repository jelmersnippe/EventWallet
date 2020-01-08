import React, { Component } from 'react'
import {
	View,
	StyleSheet
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import {
	Header,
	EventList,
	SearchBar,
	HeaderText,
} from '../components'
import { Colors } from '../components/GlobalVariables'

import { GetLatestTransaction } from '../services/Transaction'

const eventUID = 'BA9FA42EDB69FBB3EE15AF1CFBC5DEAC010DA4F53CC1A9285DE40162C2F2706F'

const allEvents = [
	{
		id: '1',
		name: 'Shockerz - The Raw Gathering',
		location: 'Autotron, Rosmalen',
		datetime: 'Zaterdag 14 dec 14:00 - 01:00'
	},
]

export default class EventOverview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			allEvents: allEvents,
			filteredEvents: [],
		}
	}

	static navigationOptions = {
		header: (
			<Header text='Event Overview' textColor={Colors.lightTextColor} backgroundColor={Colors.eventColor} />
		),
	};

	updateFilteredList = (newFilteredList, newSearchTerm) => {
		this.setState({ filteredEvents: newFilteredList })
		this.setState({ searchTerm: newSearchTerm })
	}

	updateAmount = (event) => {
		return new Promise(async (resolve, reject) => {
			GetLatestTransaction(eventUID).then(response => {
				event.amount = response.balance_after
				resolve(event)
			})
			.catch(error => {
				console.log(error)
				resolve(event)
			})
		})
	}

	updateAmounts = async (events) => {
		let eventsWithAmount = await Promise.all(
			events.map(async event => 
			await this.updateAmount(event))
		)
		console.log()
		console.log(eventsWithAmount)
		this.setState({allEvents: eventsWithAmount})
	}

	fetchFestivalData() {
		// Fetch event data for the user
		this.updateAmounts(allEvents)
	}

	componentDidMount() {
		this.fetchFestivalData();
	}

	render() {
		return (
			<View style={styles.container}>
				<SearchBar keys={['name', 'location', 'datetime']} list={this.state.allEvents} callback={this.updateFilteredList} placeholder={'Search for an event'} backgroundColor={Colors.eventColor} />

				<View style={styles.event_list_container}>
					<HeaderText text='Events' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />

					<ScrollView
						style={styles.padded_container}
						showsVerticalScrollIndicator={false}
					>
						<EventList
							data={this.state.searchTerm != '' ? this.state.filteredEvents : this.state.allEvents}
						/>
					</ScrollView>
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.backgroundColor,
	},
	event_list_container: {
		flex: 1,
		paddingHorizontal: 3 + '%'
	}
});
