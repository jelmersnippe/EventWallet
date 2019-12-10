import React, { Component } from 'react'
import {
    View, 
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class WalletLink extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Wallet Link</Text>
                <Text style={styles.content}>U73A9bf27Jkr</Text>

                <Text style={styles.header}>QR Code</Text>
                <Image 
                    source={{uri:'https://chart.googleapis.com/chart?cht=qr&chl=U73A9bf27Jkr&chs=180x180&choe=UTF-8&chld=L|2'}}
                    style={styles.qr_code}  
                    resizeMode={'contain'}  
                />

                <TouchableOpacity style={{alignItems: 'center'}}>
                    <Text style={styles.cta_button}>Create new link</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 3+'%',
    },
    header: {
        marginVertical: 10,
        textAlign: 'right',
        paddingRight: 5,
        textTransform: 'uppercase',
        fontSize: 21,
        borderBottomWidth: 1,
        paddingBottom: 5,
	},
	content: {
		fontSize: 25,
		marginLeft: 5,
		fontWeight: 'bold'
	},
    qr_code: {
        width: 100+'%',
        height: 50+'%',
        marginBottom: 15,
    },
    cta_button: {
        height: 70,
        width: 70+'%',
        padding: 10,

        borderWidth: 1,
        borderRadius: 20,

        alignItems: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 20,

        backgroundColor: '#0070C0',
        color: 'white',
    },
})
