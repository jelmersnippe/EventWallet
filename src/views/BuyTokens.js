import React, { Component } from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Picker,
} from 'react-native'
import NumericTokenInput from '../components/NumericTokenInput'

export default class BuyTokens extends Component {
    constructor(){
        super();
        this.state={
            PickerValue:''
        }
    }

  render() {
     return (
        <View style={styles.container}>
            <Text style={styles.datetime}>ZATERDAG 14 DEC 14:00 - 01:00</Text>
            <Text style={styles.name}>Shockerz - The Raw Gathering</Text>
            <Text style={styles.location}>Autotron, Rosmalen</Text>
            <Text style={styles.header}>Select the amount of tokens you want to buy</Text>

        <View style={styles.picker}>
            <NumericTokenInput
                // initValue={this.state.number}
                // value={this.state.number}
                // onChange={value => this.setState({number: value})}
                // onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                // totalWidth={385}
                // totalHeight={60}
                // iconSize={70}
                // minValue={0}
                // step={1}
                // rounded
                // borderColor='black'
                // separatorWidth={0}
                // valueType='real'
                // textColor='black'
                // iconStyle={{ color: 'black' }}
                // rightButtonBackgroundColor='#F8F9FB'
                // leftButtonBackgroundColor='#F8F9FB'
            />
        </View>

        <Text style={styles.header}>Select the payment method</Text>

        <View>
            <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: '100%'}}
                itemStyle={{fontSize: 17, backgroundColor: 'black'}}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
             }>
            <Picker.Item label="IDEAL" value="IDEAL" />
            <Picker.Item label="Paypal" value="Paypal" />
            <Picker.Item label="Visa" value="Visa" />
            </Picker>
        </View>

        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>CANCEL</Text>
             </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttontext2}>CHECHOUT</Text>
             </TouchableOpacity>
        </View>
     </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
       flex: 1,
       backgroundColor: '#F8F9FB',
       marginHorizontal: 3 +'%'
  },
   button: {
       flex: 1,
       height: 70,
       width: 40+'%',
       justifyContent: 'center',
       alignItems: 'center',
       marginHorizontal: 15,
       backgroundColor: 'gray',
       borderRadius: 20,
       marginVertical: 30,
   },
   buttontext: {
       fontSize: 20,
       textAlign: 'center',
       padding: 4,
   },
   button2: {
       flex: 1,
       height: 70,
       width: 40+'%',
       justifyContent: 'center',
       alignItems: 'center',
       marginHorizontal: 15,
       backgroundColor: 'blue',
       borderRadius: 20,
       marginVertical: 30,
   },
   buttontext2: {
       fontSize: 20,
       textAlign: 'center',
       padding: 4,
   },
   picker: {
       flexDirection: 'row',
       paddingBottom: 10,
   },
   picker2: {
       height: 30,
       //fontSize: 30, Werkt niet
   },
   datetime: {
       marginTop: 20,
       color: '#80868B',
       textTransform: 'uppercase',
       fontSize: 12,
   },
   location: {
       color: '#505155',
       marginBottom: 15,
       width: '90%'
   },
   name: {
       fontSize: 29,
       fontWeight: 'bold',
       color: '#2D2D2D'
   },
   header: {
       fontSize: 18,
    }
});





