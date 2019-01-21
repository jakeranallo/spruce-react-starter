import React, { Component } from 'react';
import theme from './theme'
import Text from './Text'
import Box from './Box';

class Test extends Component {
    render() {
        return (
            <Box p={1} style={divStyle}>
            <Text m={0} fontSize={[1, 2, 3, 4]}>
                <p>hello world</p>
            </Text>
            </Box>
        );
    }
}

var divStyle = {
    backgroundColor: theme.colors.blue,
    color: "#fff",
  };

export default Test;