import React, { Component } from 'react';
import theme from './theme'
import Text from './Text'

class Test extends Component {
    render() {
        return (
            <Text fontSize={[1, 2, 3, 4]} style={divStyle}>
                <p>hello world</p>
            </Text>
        );
    }
}

var divStyle = {
    backgroundColor: theme.colors.blue,
  };

export default Test;