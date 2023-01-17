# caixa

Fully typed React props to inline CSS.

[![NPM version](https://badge.fury.io/js/caixa.svg)](http://badge.fury.io/js/caixa)

## Installation

```sh
npm install caixa
```

## Usage

```jsx
import { Box, ThemeProvider, useBreakpoint } from 'caixa'

const Example = () => {
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
      width={{ mobile: '100%', tablet: '300px', desktop: '600px' }}
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
