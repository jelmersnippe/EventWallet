import React, { Component } from 'react'
import {
    View, 
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { 
    HeaderText,
    WideButton
} from '../components'
import { Colors, Fonts } from '../components/GlobalVariables';

export default class WalletLink extends Component {
    render() {
        return(
            <View style={styles.container}>
                <HeaderText text='Wallet Link' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                <Text style={styles.content}>U73A9bf27Jkr</Text>

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
