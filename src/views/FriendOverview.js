import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

export default class Announcements extends Component {
    render() {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>FestiWallet</Text>

                    <TextInput style={styles.textinput} placeholder="Search for friends"/>

                    <View>
                        <Text style={styles.header2}>Add friends</Text>
                                     <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight:30, paddingBottom: 10}}>
                                        <Text style={{width:200, fontSize: 18}}>Berend101</Text>
                                        <TouchableOpacity>
                                        <Text style={{width:80, fontSize: 18}}>Accept</Text>
                                        </TouchableOpacity>
                                         <TouchableOpacity style={styles.button}>
                                        <Text style={{width:80, fontSize: 18}}>Decline</Text>
                                        </TouchableOpacity>
                                    </View>

                        <Text style={styles.header2}>Friendlist</Text>
                                     <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight:30, paddingBottom: 10}}>
                                        <Text style={{width:200, fontSize: 18}}>Berend102</Text>
                                        <TouchableOpacity>
                                        <Text style={{width:80, fontSize: 18}}>Share</Text>
                                        </TouchableOpacity>
                                         <TouchableOpacity style={styles.button}>
                                        <Text style={{width:80, fontSize: 18}}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>

                                     <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight:30, paddingBottom: 10}}>
                                        <Text style={{width:200, fontSize: 18}}>Berend103</Text>
                                        <TouchableOpacity>
                                        <Text style={{width:80, fontSize: 18}}>Share</Text>
                                        </TouchableOpacity>
                                         <TouchableOpacity style={styles.button}>
                                        <Text style={{width:80, fontSize: 18}}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>

                                     <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight:30, paddingBottom: 10}}>
                                        <Text style={{width:200, fontSize: 18}}>Berend104</Text>
                                        <TouchableOpacity>
                                        <Text style={{width:80, fontSize: 18}}>Share</Text>
                                        </TouchableOpacity>
                                         <TouchableOpacity style={styles.button}>
                                        <Text style={{width:80, fontSize: 18}}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>

                                  <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight:30, paddingBottom: 10}}>
                                        <Text style={{width:200, fontSize: 18}}>Berend105</Text>
                                        <TouchableOpacity>
                                        <Text style={{width:80, fontSize: 18}}>Share</Text>
                                        </TouchableOpacity>
                                         <TouchableOpacity style={styles.button}>
                                        <Text style={{width:80, fontSize: 18}}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>

                                  <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight:30, paddingBottom: 10}}>
                                        <Text style={{width:200, fontSize: 18}}>Berend106</Text>
                                        <TouchableOpacity>
                                        <Text style={{width:80, fontSize: 18}}>Share</Text>
                                        </TouchableOpacity>
                                         <TouchableOpacity style={styles.button}>
                                        <Text style={{width:80, fontSize: 18}}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>

                                  <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight:30, paddingBottom: 10}}>
                                        <Text style={{width:200, fontSize: 18}}>Berend107</Text>
                                        <TouchableOpacity>
                                        <Text style={{width:80, fontSize: 18}}>Share</Text>
                                        </TouchableOpacity>
                                         <TouchableOpacity style={styles.button}>
                                        <Text style={{width:80, fontSize: 18}}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>
                        </View>
                </View>
            );
        }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    color: 'black',
    paddingBottom: 10,
    marginBottom: 10,
    paddingLeft: 140,
    paddingRight: 50,
    justifyContent: 'center',
  },
  header2: {
    fontSize: 23,
    color: 'black',
    paddingBottom: 5,
    marginBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textinput: {
    fontSize: 20,
    height: 45,
    marginBottom: 15,
    color: 'black',
    backgroundColor: 'gray',
    paddingLeft: 10,
    marginLeft: 30,
    marginRight: 30,
    },
});