import { Box, useBreakpoint } from 'caixa'

function App() {
  const breakpoint = useBreakpoint()

  return (
    <Box
      alignItems="center"
      backgroundColor={{ mobile: 'teal', tablet: 'red', desktop: 'yellow' }}
      color={{ mobile: 'blue', tablet: 'purple', desktop: 'brown' }}
      display="flex"
      height="50px"
      justifyContent="center"
      margin="0 auto"
      width={{ mobile: '100%', tablet: 8, desktop: '600px' }}
    >
      {breakpoint}
    </Box>
  )
}

export default App
