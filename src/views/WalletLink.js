import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

import {
    HeaderText,
    WideButton,
    PinCode
} from '../components'
import { Colors, Fonts } from '../components/GlobalVariables';

import { GenerateQR } from '../services/QrAPI'
import { GetWristband, UpdateWristband } from '../services/EventAPI'
import { GetPin } from '../services/AuthAPI'

export default class WalletLink extends Component {
    constructor() {
        super();
        this.state = {
            event: '',
            refreshingWristband: false,
            showPinOverlay: false,
            wristbandCode: '',
            wristbandStatus: '',
            qr: '',
        }
    }

    componentDidMount() {
        this.setState({ event: this.props.navigation.getParam('event') })
        GetWristband(this.props.navigation.getParam('event'), GetPin()).then(response => {
            this.setWristband(response)
        }).catch(error => {
            alert('Could not get wristbande code: ' + error)
            this.props.navigation.goBack()
        })
    }

    setWristband(wristband) {
        this.setState({ wristbandCode: wristband.code, wristbandStatus: wristband.status })
        GenerateQR(wristband.code).then(response => {
            this.setState({ qr: response })
        }).catch(error => alert('Could not generate QR code: ' + error))
    }

    render() {
        return (
            <ScrollView 
                // contentContainerStyle={{ flexGrow: 1 }}
                style={styles.container}
            >

                {this.state.showPinOverlay && <PinCode callback={(pin) => {
                    this.setState({ showPinOverlay: false })
                    UpdateWristband(this.state.event, pin)
                        .then(response => {
                            this.setWristband(response)
                        })
                        .catch(error => {
                            alert('Could not update wristband code: ' + error)
                        })
                    this.setState({ refreshingWristband: false })
                }} />}

                {this.state.wristbandCode != '' &&
                    <View style={{height: 100+'%', paddingHorizontal: 3 + '%' }}>

                        <HeaderText text='Wristband Link' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                        <Text style={styles.content}>{this.state.wristbandCode}</Text>
                        <Text>Status: {this.state.wristbandStatus}</Text>

                        <HeaderText text='QR Code' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />

                        {this.state.qr != '' &&
                            <Image
                                source={{ uri: `data:image/jpeg;base64,${this.state.qr}` }}
                                style={styles.qr_code}
                                resizeMode={'contain'}
                            />
                        }

                        <WideButton
                            text='Create new link'
                            textColor={Colors.darkTextColor}
                            backgroundColor={Colors.ctaButtonColor}
                            borderColor={Colors.ctaButtonBorderColor}
                            callback={() => {
                                this.setState({ showPinOverlay: true })
                            }}
                            disabled={this.state.wristbandStatus != 'active' || this.state.refreshingWristband}
                        />

                        {this.state.wristbandStatus == 'active' &&
                                <Text style={styles.error_text}>Use this button to deactivate the active wristband in case of theft, or if the wristband is lost</Text>
                            
                        }
                    </View>
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100+'%',
        backgroundColor: Colors.backgroundColor,
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
        height: 300,
        marginVertical: 15,
    },
    error_text: {
        color: 'red',
        textAlign: 'center',
        fontFamily: Fonts.text,
        fontSize: 16,
        marginVertical: 10,
    }
})
