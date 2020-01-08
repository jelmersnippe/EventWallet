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
import { GetWalletLink } from '../services/Event'

const eventUID = 'BA9FA42EDB69FBB3EE15AF1CFBC5DEAC010DA4F53CC1A9285DE40162C2F2706F'

export default class WalletLink extends Component {
    constructor() {
		super();
		this.state = {
            walletCode: '',
			qr: '',
		}
	}


    componentDidMount(){
        GetWalletLink(this.props.navigation.getParam('event')).then(response => {
            let walletCode = response.wallet_code

            this.setState({walletCode: walletCode})
            GenerateQR(walletCode).then(response => {
                this.setState({qr: response}) 
            })
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderText text='Wallet Link' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                <Text style={styles.content}>{this.state.walletCode}</Text>

				<HeaderText text='QR Code' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />

                {this.state.qr != '' &&
                    <Image 
                        source={{uri: `data:image/jpeg;base64,${this.state.qr}`}}
                        style={styles.qr_code}  
                        resizeMode={'contain'}  
                    />
                }
                
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
