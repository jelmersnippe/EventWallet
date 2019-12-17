import React, { Component } from 'react'
import {
    View, 
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { HeaderText } from '../components'
import { Colors, Fonts } from '../components/GlobalVariables';

export default class WalletLink extends Component {
    render() {
        return(
            <View style={styles.container}>
                <HeaderText text='Wallet Link' />
                <Text style={styles.content}>U73A9bf27Jkr</Text>

				<HeaderText text='QR Code' />
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
        backgroundColor: Colors.backgroundColor,
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
		//fontWeight: 'bold',
		fontFamily: Fonts.header
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
        backgroundColor: Colors.ctaButtonColor,
        color: 'white',
        fontFamily: Fonts.text,
        shadowColor: "#000",
        shadowOffset: {	width: 0, height: 5, },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 7,
    },
})
