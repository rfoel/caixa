# caixa

Fully typed React props to inline CSS.

[![NPM version](https://badge.fury.io/js/caixa.svg)](http://badge.fury.io/js/caixa)

## Installation

```sh
npm install caixa
```

## Usage

```jsx
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
      height="50px"
      justifyContent="center"
      margin="0 auto"
      textTransform="capitalize"
      width={{ mobile: '100%', tablet: 8, desktop: '600px' }}
    >
      {breakpoint}
    </Box>
  )
}
```

## Contributing

Issues and pull requests are welcome.

## License

[MIT](https://github.com/rfoell/caixa/blob/main/LICENSE)
