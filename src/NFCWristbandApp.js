import React, { Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image 
} from 'react-native'

export default class NFCWristbandApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>NFC Wristband App</Text>
                <Image 
                    style={{width: 100+'%', height: 60+'%'}}
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Maxim_Hartman-1.jpg'}} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100+'%',
    height: 100+'%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});
