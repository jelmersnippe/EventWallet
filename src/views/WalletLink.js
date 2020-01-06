import React, { Component } from 'react'
import {
    View, 
    Text,
    Image,
    StyleSheet
} from 'react-native'

import { 
    HeaderText,
    WideButton
} from '../components'
import { Colors, Fonts } from '../components/GlobalVariables';

import { GenerateQR } from '../services/QR'
import RNFetchBlob from 'rn-fetch-blob'

const walletCode = 'U73A9bf27Jkr'

export default class WalletLink extends Component {
    componentDidMount(){
        //GenerateQR(walletCode)
    }

    test(){
        GenerateQR(walletCode)
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderText text='Wallet Link' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                <Text style={styles.content}>{walletCode}</Text>

				<HeaderText text='QR Code' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                <Image 
                    source={{uri:'https://chart.googleapis.com/chart?cht=qr&chl=U73A9bf27Jkr&chs=180x180&choe=UTF-8&chld=L|2'}}
                    style={styles.qr_code}  
                    resizeMode={'contain'}  
                />
                <WideButton 
                    text='Create new link' 
                    textColor={Colors.darkTextColor}
                    backgroundColor={Colors.ctaButtonColor} 
                    borderColor={Colors.ctaButtonBorderColor} 
                    callback={() => this.test()}
                />
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
        fontFamily: Fonts.header,
        color: Colors.darkTextColor,
	},
    qr_code: {
        width: 100+'%',
        height: 50+'%',
        marginBottom: 15,
    },
})
