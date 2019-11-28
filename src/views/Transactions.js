import React, { Component } from 'react'
import { 
    View, 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'


export default class Transactions extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style = { styles.amount }>{this.props.navigation.getParam('amount')}</Text>
                    <TouchableOpacity style = { styles.cta_button }>
                        <Text style = { styles.cta_button_text}>Add currency</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{marginTop: 10, padding: 10}}>Wallet link</Text>

                <Text style={{marginTop: 10, padding: 10}}>Transaction History</Text>
                
                <Text style={{width: 100+'%', borderWidth: 1, padding: 10}}>Date</Text>
                <View style={{flexDirection: 'row', borderWidth: 1, padding: 10}}>
                    <Text style={{width:70+'%'}}>From/To</Text>
                    <Text style={{width:30+'%'}}>Amount</Text>
                </View>
                <View style={{flexDirection: 'row', borderWidth: 1, padding: 10}}>
                    <Text style={{width:70+'%'}}>From/To</Text>
                    <Text style={{width:30+'%'}}>Amount</Text>
                </View>
                <View style={{flexDirection: 'row', borderWidth: 1, padding: 10}}>
                    <Text style={{width:70+'%'}}>From/To</Text>
                    <Text style={{width:30+'%'}}>Amount</Text>
                </View>

                <Text style={{width: 100+'%', borderWidth: 1, padding: 10}}>Date</Text>
                <View style={{flexDirection: 'row', borderWidth: 1, padding: 10}}>
                    <Text style={{width:70+'%'}}>From/To</Text>
                    <Text style={{width:30+'%'}}>Amount</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100+'%',
        height: 100+'%',
        justifyContent: "flex-start",
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    header: {
        flexDirection: "row",
        width: 100+'%',
        height: 20+'%',
        justifyContent: "space-evenly",
    },
    amount: {
        width: 50+'%',
        textAlign: "center",
        textAlignVertical: "center",

        borderWidth: 1,
    },
    cta_button: {
        width: 50+'%',
        backgroundColor: 'rgb(100,100,255)',
    },
});
