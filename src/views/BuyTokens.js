import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Picker,
} from 'react-native'
import NumericInput from 'react-native-numeric-input'




export default class BuyTokens extends Component {
    constructor(){
        super();
        this.state={
            PickerValue:''
        }
    }

  render() {
    return (
           <View>
                <Text style={styles.header}>Name of event</Text>


        <View style={{flexDirection: 'row', paddingLeft: 30, paddingRight:30, paddingBottom: 10}}>
            <Text style={styles.header}>Ammount</Text>
            <NumericInput
                        value={this.state.value}
                        onChange={value => this.setState({value})}
                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                        totalWidth={110}
                        totalHeight={35}
                        iconSize={100}
                        step={1}
                        valueType='real'
                        textColor='black'
                        iconStyle={{ color: 'white' }}
                        rightButtonBackgroundColor='green'
                        leftButtonBackgroundColor='red'/>
         </View>

        <View>
            <Picker
                selectedValue={this.state.language}
                style={{height: 30, width:'80%', marginLeft: 30, marginRight: 30}}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
             }>
            <Picker.Item label="IDEAL" value="IDEAL" />
            <Picker.Item label="Paypal" value="Paypal" />
            <Picker.Item label="Visa" value="Visa" />
            </Picker>
        </View>

        <View style={{flexDirection: 'row', paddingLeft: 80, paddingRight:30, paddingBottom: 10}}>
            <TouchableOpacity>
                <Text  style={styles.button}>Buy</Text>
             </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { this.props.navigation.goBack() }}
            >
                <Text style={styles.button}>Cancel</Text>
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
    marginBottom: 10,
    paddingLeft: 10,
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
   button: {
   fontSize: 20,
   height: 45,
   marginLeft: 40,
   marginRight: 40,
   marginTop: 30,
   backgroundColor: 'lightgray',
   paddingLeft: 10,
   paddingRight: 10,
   paddingBottom: 10,
   paddingTop: 10,
   }
});





