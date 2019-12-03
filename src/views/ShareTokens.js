import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Picker,
} from 'react-native'
import NumericInput from 'react-native-numeric-input'




export default class ShareTokens extends Component {
    constructor(){
        super();
        this.state={
            PickerValue:''
        }
    }

  render() {
    return (
           <View>

            <Text style={styles.header}>Receiver</Text>

        <View>
            <Picker
                selectedValue={this.state.language}
                style={{height: 60, width:'80%', marginLeft: 30, marginRight: 30, alignItems: 'center'}}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
             }>
            <Picker.Item label="Wallet1" value="wallet1" />
            <Picker.Item label="Wallet2" value="wallet2" />
            <Picker.Item label="Wallet3" value="wallet3" />
            </Picker>
        </View>

             <Text style={styles.header}>Balance</Text>

        <View style={{flexDirection: 'row', paddingLeft: 10, paddingBottom: 10, alignItems: 'center'}}>
            <Text style={styles.header2}>Ammount</Text>
            <NumericInput
                        value={this.state.value}
                        onChange={value => this.setState({value})}
                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                        totalWidth={150}
                        totalHeight={50}
                        iconSize={100}
                        step={1}
                        valueType='real'
                        textColor='black'
                        iconStyle={{ color: 'white' }}
                        rightButtonBackgroundColor='green'
                        leftButtonBackgroundColor='red'/>
         </View>


        <View style={{flexDirection: 'row', paddingLeft: 80, paddingRight:30, paddingBottom: 10}}>
            <TouchableOpacity>
                <Text  style={styles.button1}>Send</Text>
             </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button2}>Cancel</Text>
             </TouchableOpacity>
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
    marginTop: 10,
    marginBottom: 10,
    //paddingLeft: 80,
    //paddingRight: 80,
    textAlign: 'center',
  },
  header2: {
    fontSize: 23,
    color: 'black',
    paddingBottom: 5,
    marginBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    marginRight: 30,
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
   button2: {
   fontSize: 20,
   height: 45,
   marginLeft: 20,
   marginRight: 20,
   marginTop: 30,
   backgroundColor: 'lightgray',
   paddingLeft: 10,
   paddingRight: 20,
   paddingBottom: 10,
   paddingTop: 10,
   },
   button1: {
   fontSize: 25,
   height: 60,
   marginLeft: 40,
   marginRight: 10,
   marginTop: 30,
   backgroundColor: 'lightgray',
   paddingLeft: 10,
   paddingRight: 10,
   paddingBottom: 10,
   paddingTop: 10,
   //alignItems: 'center',
   //textAlign: 'center',
   }
});





