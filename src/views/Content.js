import React, { Component } from 'react'
import {
    Text,
    Image,
} from 'react-native'

export default class Content extends Component {
    render() {
        return(
            <Image source= {{uri: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Maxim_Hartman-1.jpg'}}  style={{flex:1, width:100+'%'}}/>
        );
    }
}