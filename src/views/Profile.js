import React, { Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native'


export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile page</Text>
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
