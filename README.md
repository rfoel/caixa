# caixa 📦

React Component with fully typed inline CSS. Also, comes with responsive props using the native [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) method.

[![NPM version](https://badge.fury.io/js/caixa.svg)](http://badge.fury.io/js/caixa)

## Installation

```sh
npm install caixa
```

## Usage

First you set a `ThemeProvider` to the root of your application:

```jsx
import { ThemeProvider } from 'caixa'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const theme = {
  breakpoints: {
    mobile: 0,
    tablet: 600,
    desktop: 1200,
  },
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```

> The theme in the example above is already set by default, it can be omitted if it fits your needs.

Then, you can start using the `Box` component provided by `caixa` 📦. By default, the `Box` component will behave and have the properties of a HTML div, so to make it render as an HTML input or a HTML button, use the `as` property like the example below.

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
        onClick={() => {
          alert('I have been clicked!')
        }}
        padding={1}
      >
        Click Me
      </Box>
    </Box>
  )
}
```

## Contributing

Issues and pull requests are welcome.

## License

[MIT](https://github.com/rfoell/caixa/blob/main/LICENSE)
