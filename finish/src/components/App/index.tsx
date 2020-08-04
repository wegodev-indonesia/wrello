import React from 'react'
import { Badge, Stack } from '@chakra-ui/core'

const App: React.FC = () => {
  return (
    <Stack spacing={8} isInline align="center">
      <Badge rounded={10}>Default</Badge>
      <Badge>Default</Badge>
      <Badge>Default</Badge>
      <Badge>Default</Badge>
      <Badge>Default</Badge>
    </Stack>
  )
}

export default App