import React, {Component} from 'react';
import { Text, View } from 'react-native';

import { ButtonGroup } from "react-native-elements";

export default class Counter extends Component {

    constructor(props){
        super(props)

        this.state = { counter: 70 }
    }

    diminuir() {
        this.setState({ counter: state.counter - 1 });
    }

    adicionar(){
        this.setState({ counter: state.counter + 1 });
    }

    render() {
        const buttons = ['-', '+']
        return ( 
            <View>
                <Text>CONTADOR</Text>
                <Text>{this.state.counter}</Text>
                
                    <ButtonGroup onPresss={this.diminuir.bind(this)} buttons={buttons}/>
                
            </View>
            

        );
    }
}

