import React, { Component } from 'react'
import { 
    ActivityIndicator, 
    StatusBar,
    StyleSheet,
    Button,
    View
} from 'react-native'


export default class AuthLoading extends Component {
    render() {
        return (
            <View styles={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle='default' />
                <Button
                    styles={styles.button}
                    title='To auth stack'
                    onPress={() => this.props.navigation.navigate('Auth')}
                />
                <Button
                    styles={styles.button}
                    title='To app stack'
                    onPress={() => this.props.navigation.navigate('App')}
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
      alignItems: 'center'
    },
    button: {
        marginBottom: 10, 
        backgroundColor: 'rgb(0,0,0)'
    }
  });
