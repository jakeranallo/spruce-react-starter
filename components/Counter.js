import React, { useState } from 'react';

import Box from '../components/Box'
import Button from '../components/Button'
import Heading from '../components/Heading'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Heading.h1>{count}</Heading.h1>
      <Button mr={2} onClick={() => setCount(count + 1)}>Count Up</Button>
      <Button onClick={() => setCount(count - 1)}>Count Down</Button>
    </Box>
  );
}

export default Counter