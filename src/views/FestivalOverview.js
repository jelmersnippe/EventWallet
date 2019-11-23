import React, { Component } from 'react'
import { 
    View,
    Button,
    StyleSheet
} from 'react-native'

import FestivalList from '../components/FestivalList'


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
];


export default class FestivalOverview extends Component{

    fetchFestivalData(){
        // Fetch festival data for the user
    }

    componentDidMount(){
        this.fetchFestivalData();
    }

    render() {
        return (
            <View>
                <FestivalList 
                    festivalData={festivals}
                />
                <Button
                     title='Back to landing page'
                     onPress={() => this.props.navigation.navigate('AuthLoading')}
                 />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100+'%',
    height: 100+'%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});
