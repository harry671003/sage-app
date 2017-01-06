import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export class Scene1 extends Component {
    static defaultProps = {
        title: 'Scene 1'
    }

    render () {
        return(
            <View>
                <Text>Hi! My name is {this.props.title}.</Text>
            </View>
        );
    }
}