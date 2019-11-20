import React, { Component } from 'react'
import { 
    View, 
    Text,
    Button,
    StyleSheet
} from 'react-native'


export default class Tickets extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tickets page</Text>
                <Button
                    title='Back to landing page'
                    onPress={() => this.props.navigation.navigate('AuthLoading')}
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
