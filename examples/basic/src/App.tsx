import { Box, useBreakpoint } from 'caixa'

export default function App() {
  const breakpoint = useBreakpoint()

  return (
    <Box
      alignItems="center"
      backgroundColor={{
        sm: '#8be9fd',
        md: '#50fa7b',
        lg: '#ffb86c',
      }}
      color="#282a36"
      display="flex"
      flexDirection="column"
      gap={1}
      justifyContent="center"
      margin="0 auto"
      padding={1}
      textTransform="capitalize"
      width={{ sm: '100%', md: '400px', lg: '600px' }}
    >
      {breakpoint}
      <Box
        as="button"
        color="white"
        backgroundColor="brand"
        border="0"
        padding={1}
        onClick={() => {
          alert('I have been clicked!')
        }}
      >
        Click Me
      </Box>
    </Box>
  )
}
