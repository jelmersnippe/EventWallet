import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

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
            <ScrollView style={styles.container}>
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
                    <View style={styles.padded_container}>
                        <View style={styles.wristband_code_container}>
                            <HeaderText text='Wristband Link' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                            <Text style={styles.wristband_code}>{this.state.wristbandCode}</Text>
                            <Text style={styles.wristband_status}>Status: {this.state.wristbandStatus}</Text>
                        </View>

                        {this.state.qr != '' &&
                            <View>
                                <View style={styles.qr_code_header}>
                                    <View style={styles.print_button_container}>
                                        <TouchableOpacity style={styles.print_button}>
                                            <Icon style={styles.print_icon} name='print' size={26} color={this.state.refreshingTransactionHistory ? 'red' : Colors.eventColor} />
                                        </TouchableOpacity>
                                    </View>
                                    <HeaderText style={{flex: 2}} text='QR Code' textColor={Colors.darkTextColor} barColor={Colors.darkTextColor} />
                                </View>

                                <Image
                                    source={{ uri: `data:image/jpeg;base64,${this.state.qr}` }}
                                    style={styles.qr_code}
                                    resizeMode={'contain'}
                                />
                            </View>
                        }

                        <WideButton
                            text='Create new code'
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
        height: 100 + '%',
        backgroundColor: Colors.backgroundColor,
    },
    padded_container: {
        paddingHorizontal: 3+'%',
    },
    wristband_code_container: {
        marginBottom: 15,
    },

    wristband_code: {
        fontSize: 22,
        marginLeft: 5,
        fontFamily: Fonts.header,
        color: Colors.darkTextColor,
    },
    wristband_status: {
        fontSize: 14,
        marginLeft: 8,
        fontFamily: Fonts.header,
        color: Colors.darkTextColor,
    },

    qr_code_header: {
        width: 100+'%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    print_button_container: {
        flex: 1,
        borderBottomWidth: 1,
        justifyContent: 'flex-end',
    },
    print_button: {
        width: 40 + '%',
    },
    print_icon: {
        padding: 5,
    },

    qr_code: {
        width: 100 + '%',
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
