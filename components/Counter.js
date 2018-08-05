import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Button } from "react-native-elements";

export default class Counter extends Component {

    constructor(props){
        super(props)

        this.state = { counter: 1 }
    }

    
    render() {
        
        return ( 
            
            <View style={{ flex: 0, flexDirection: 'row' }}>
                                
                <Button title="+" onPress={() => this.setState({ counter: this.state.counter + 1 })} />
                <View>
                    <Text style={styles.paragraph}>{this.state.counter}</Text>
                </View>
                <Button title="-" onPress={() => this.setState({ counter: this.state.counter - 1 })} />
                
                                    
            </View>
            

        );
    }
}

const styles = StyleSheet.create({
    paragraph: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

