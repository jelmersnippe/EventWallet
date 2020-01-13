import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import {
	EventList,
	SearchBar,
	HeaderText,
} from '../components'
import { Colors } from '../components/GlobalVariables'

import { GetEvents } from '../services/EventAPI'
import { GetWallets } from '../services/TransactionAPI'

export default class EventOverview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			wallets: [],
			allEvents: [],
			filteredEvents: [],

			noConnection: false,
		}
	}

	updateFilteredList = (newFilteredList, newSearchTerm) => {
		this.setState({ filteredEvents: newFilteredList })
		this.setState({ searchTerm: newSearchTerm })
	}

	mapTransactionsToWallets(items){
		let mappedWallets = []

		items.map(item => {
			let wallet = item.wallet
			wallet.amount = item.transaction.balance_after

			mappedWallets.push(wallet)
		})

		return mappedWallets
	}

	mapWalletsToEvents(wallets, events){
		let mappedEvents = []

		events.map(event => {
			for(const i in wallets){
				if(event.uid == wallets[i].event_uid){
					event.amount = wallets[i].amount
				}
			}
			mappedEvents.push(event)
		})

		return mappedEvents
	}

	fetchFestivalData() {

		GetWallets()
			.then(response => {
				let mappedWallets = this.mapTransactionsToWallets(response)

				GetEvents().then(events => {
					let mappedEvents = this.mapWalletsToEvents(mappedWallets, events)
					this.setState({allEvents: mappedEvents})
				})
			}).catch(error => {
				if (error.message.includes('Failed to connect')) {
					this.setState({ noConnection: true })
				}
			})
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
						{this.state.noConnection
							?
							<Text>No connection</Text>
							:
							<EventList
								data={this.state.searchTerm != '' ? this.state.filteredEvents : this.state.allEvents}
							/>
						}
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
