import React, { createContext, useEffect, useState } from 'react'

type Breakpoint = 'mobile' | 'tablet' | 'desktop'

const defaultTheme = {
  breakpoints: {
    mobile: 0,
    tablet: 600,
    desktop: 1200,
  },
}

export type ThemeProviderProps = {
  children?: React.ReactNode
  theme?: {
    currentBreakpoint?: Breakpoint
    breakpoints: {
      mobile: number
      tablet: number
      desktop: number
    }
  }
}

const ThemeContext = createContext<ThemeProviderProps['theme']>(defaultTheme)

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  const mergedTheme = { ...defaultTheme, ...theme }
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>()

  useEffect(() => {
    const mediaQueryList = Object.values(mergedTheme.breakpoints).map(
      (value, index, array) => {
        const minWidth = value

        const query = [`(min-width: ${minWidth}px)`]

        if (index !== array.length - 1) {
          query.push(`(max-width: ${array.at(index + 1)}px)`)
        }

        return window.matchMedia(query.join(' and '))
      },
    )

    const check = () => {
      const currentMediaQueryIndex = mediaQueryList.findIndex(
        (mediaQuery) => mediaQuery.matches,
      )

      if (currentMediaQueryIndex >= 0) {
        setCurrentBreakpoint(
          Object.keys(mergedTheme.breakpoints)[
            currentMediaQueryIndex
          ] as Breakpoint,
        )
      }
    }

    mediaQueryList.forEach((mediaQuery) => {
      mediaQuery.addEventListener('change', check)
    })

    check()

    return () => {
      mediaQueryList.forEach((mediaQuery) => {
        mediaQuery.removeEventListener('change', check)
      })
    }
  }, [mergedTheme.breakpoints])

  return (
    <ThemeContext.Provider value={{ ...mergedTheme, currentBreakpoint }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const useBreakpoint = () => {
  const context = useTheme()
  return context.currentBreakpoint
}
