import { Box, useBreakpoint } from 'caixa'

export default function App() {
  const breakpoint = useBreakpoint()

  return (
    <Box
      alignItems="center"
      backgroundColor={{
        mobile: '#8be9fd',
        tablet: '#50fa7b',
        desktop: '#ffb86c',
      }}
      color="#282a36"
      display="flex"
      flexDirection="column"
      gap={1}
      justifyContent="center"
      margin="0 auto"
      padding={1}
      textTransform="capitalize"
      width={{ mobile: '100%', tablet: '400px', desktop: '600px' }}
    >
      {breakpoint}
      <Box
        as="button"
        backgroundColor="tomato"
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
