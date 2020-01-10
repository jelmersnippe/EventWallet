import React, { Component } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import {
	EventList,
	SearchBar,
	HeaderText,
} from '../components'
import { Colors } from '../components/GlobalVariables'

import { GetLatestTransaction } from '../services/TransactionAPI'
import { GetEvents, GetWallets } from '../services/EventAPI'

export default class EventOverview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			allEvents: [],
			filteredEvents: [],
		}
	}

	updateFilteredList = (newFilteredList, newSearchTerm) => {
		this.setState({ filteredEvents: newFilteredList })
		this.setState({ searchTerm: newSearchTerm })
	}

	updateAmount = (event) => {
		return new Promise(async (resolve) => {
			GetLatestTransaction(event.uid).then(response => {
				event.amount = response.balance_after
				resolve(event)
			})
			.catch(() => {
				resolve(event)
			})
		})
	}

	updateAmounts = async (events) => {
		let eventsWithAmount = await Promise.all(
			events.map(async event => 
			await this.updateAmount(event))
		)
		this.setState({allEvents: eventsWithAmount})
	}

	fetchFestivalData() {
		GetEvents().then(response => {
			this.updateAmounts(response)
		})

		// GetWallets().then(response => {
		// 	console.log()
		// 	console.log('!!!PLEASE REMOVE!!!\n wallets:')
		// 	console.log(response)
		// })
	}

	componentDidMount() {
		this.fetchFestivalData()
	}

	render() {
		return (
			<View style={styles.container}>
				<SearchBar keys={['description', 'location', 'begin_date', 'end_date']} list={this.state.allEvents} callback={this.updateFilteredList} placeholder={'Search for an event'} backgroundColor={Colors.eventColor} />

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
