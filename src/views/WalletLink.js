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
                <Text>Wallet Link: U73A9bf27Jkr</Text>
                <View style={styles.code_container}>
                    <Image 
                        source={{uri:'https://chart.googleapis.com/chart?cht=qr&chl=U73A9bf27Jkr&chs=180x180&choe=UTF-8&chld=L|2'}}
                        style={{width: 100+'%', height: 100+'%'}}    
                    />
                </View>
                <TouchableOpacity style={styles.cta_button}>
                    <Text>Create new link</Text>
                </TouchableOpacity>
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
        backgroundColor: '#F5FCFF',
        padding: 20,
        paddingBottom: 180
    },
    code_container: {
        width: 100+'%',
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1
    },
    cta_button: {
        width: 70+'%',
        padding: 10,
        borderWidth: 1,
        alignItems: 'center'
    },
})
