import React, { Component } from 'react'
import {
    View, 
    Text,
    Image,
    StyleSheet,
} from 'react-native'

import { 
    HeaderText,
    WideButton
} from '../components'
import { Colors, Fonts } from '../components/GlobalVariables';

import { GenerateQR } from '../services/QR'
import { GetWristband, UpdateWristband } from '../services/Event'

export default class WalletLink extends Component {
    constructor() {
		super();
		this.state = {
            event: '',
            wristbandCode: '',
            wristbandStatus: '',
			qr: '',
		}
	}


    componentDidMount(){
        this.setState({event: this.props.navigation.getParam('event')})
        GetWristband(this.props.navigation.getParam('event')).then(response => {
            let wristbandCode = response.code
            this.setState({wristbandStatus: response.status})

            this.setWristbandCode(wristbandCode)
        }).catch(error => alert('Could not get wristbande code: ' + error))
    }

    setWristbandCode(wristbandCode){
        this.setState({wristbandCode: wristbandCode})
        GenerateQR(wristbandCode).then(response => {
            this.setState({qr: response}) 
        }).catch(error => alert('Could not generate QR code: ' + error))
    }

    render() {
        return(
            <View style={styles.container}>
                <HeaderText text='Wallet Link' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                <Text style={styles.content}>{this.state.wristbandCode}</Text>
                {this.state.wristbandCode != '' &&
                    <Text>Status: {this.state.wristbandStatus}</Text>
                }

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
                    callback={() => UpdateWristband(this.state.event)
                        .then(response => this.setWristbandCode(response.code))
                        .catch(error => alert('Could not update wristband code: ' + error))
                    }
                    disabled={this.state.wristbandStatus != 'active'}
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
