import * as CSS from 'csstype'

import { isCSSProperty } from './css'
import { ThemeProviderProps } from './theme'

type CSSPropertyValue = string | number

type CSSPropertyByBreakpoint<T> = {
  [key: string]: T
}

type CSSProperties = CSS.Properties<CSSPropertyValue>

export type CSSResponsiveProperties = {
  [K in keyof CSSProperties]:
    | CSSProperties[K]
    | CSSPropertyByBreakpoint<CSSProperties[K]>
}

const replaceValue = (
  theme: ThemeProviderProps['theme'],
  input?: string | number,
) => {
  if (typeof input === 'string') return theme?.colors?.[input] ?? input
  if (typeof input === 'number') return `${input}rem`
  return undefined
}

const transform =
  (theme: ThemeProviderProps['theme']) => (props: CSSResponsiveProperties) => {
    const currentBreakpoint = theme?.currentBreakpoint
    if (!currentBreakpoint) return {}
    return Object.fromEntries(
      Object.entries(props).map(([key, value]) =>
        typeof value === 'object'
          ? [key, replaceValue(theme, value[currentBreakpoint])]
          : [key, replaceValue(theme, value)],
      ),
    )
  }

const getStyleProps = (props: Record<string, unknown>) =>
  Object.keys(props).reduce((previousValue, currentValue) => {
    if (isCSSProperty(currentValue))
      return { ...previousValue, [currentValue]: props[currentValue] }
    return previousValue
  }, {})

const getNonStyleProps = (props: Record<string, unknown>) =>
  Object.keys(props).reduce((previousValue, currentValue) => {
    if (!isCSSProperty(currentValue))
      return { ...previousValue, [currentValue]: props[currentValue] }
    return previousValue
  }, {})

export const getProps =
  (theme: ThemeProviderProps['theme']) => (props: Record<string, unknown>) => {
    const style = transform(theme)(getStyleProps(props))
    const rest = getNonStyleProps(props)
    return { style, ...rest }
  }
