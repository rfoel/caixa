import * as React from 'react'

import { useTheme } from './theme'
import { CSSResponsiveProperties, getProps } from './transform'

type ElementProps<T> = Partial<
  Omit<T, 'children'> & React.PropsWithChildren & CSSResponsiveProperties
>

export const A: React.FunctionComponent<
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
    ElementProps<HTMLAnchorElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('a', getProps(theme)(props))
}

export const Abbr: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('abbr', getProps(theme)(props))
}

export const Address: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('address', getProps(theme)(props))
}

export const Area: React.FunctionComponent<
  React.AreaHTMLAttributes<HTMLAreaElement> & ElementProps<HTMLAreaElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('area', getProps(theme)(props))
}

export const Article: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('article', getProps(theme)(props))
}

export const Aside: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('aside', getProps(theme)(props))
}

export const Audio: React.FunctionComponent<
  React.AudioHTMLAttributes<HTMLAudioElement> & ElementProps<HTMLAudioElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('audio', getProps(theme)(props))
}

export const B: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('b', getProps(theme)(props))
}

export const Base: React.FunctionComponent<
  React.BaseHTMLAttributes<HTMLElement> & ElementProps<HTMLBaseElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('base', getProps(theme)(props))
}

export const Bdi: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('bdi', getProps(theme)(props))
}

export const Bdo: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('bdo', getProps(theme)(props))
}

export const Blockquote: React.FunctionComponent<
  React.QuoteHTMLAttributes<HTMLQuoteElement> & ElementProps<HTMLQuoteElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('blockquote', getProps(theme)(props))
}

export const Body: React.FunctionComponent<
  React.HTMLAttributes<HTMLBodyElement> & ElementProps<HTMLBodyElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('body', getProps(theme)(props))
}

export const Br: React.FunctionComponent<
  React.HTMLAttributes<HTMLBRElement> & ElementProps<HTMLBRElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('br', getProps(theme)(props))
}

export const Button: React.FunctionComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    ElementProps<HTMLButtonElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('button', getProps(theme)(props))
}

export const Canvas: React.FunctionComponent<
  React.CanvasHTMLAttributes<HTMLCanvasElement> &
    ElementProps<HTMLCanvasElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('canvas', getProps(theme)(props))
}

export const Caption: React.FunctionComponent<
  React.TableHTMLAttributes<HTMLTableCaptionElement> &
    ElementProps<HTMLTableCaptionElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('caption', getProps(theme)(props))
}

export const Cite: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('cite', getProps(theme)(props))
}

export const Code: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('code', getProps(theme)(props))
}

export const Col: React.FunctionComponent<
  React.HTMLAttributes<HTMLTableColElement> & ElementProps<HTMLTableColElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('col', getProps(theme)(props))
}

export const Colgroup: React.FunctionComponent<
  React.HTMLAttributes<HTMLTableColElement> & ElementProps<HTMLTableColElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('colgroup', getProps(theme)(props))
}

export const Data: React.FunctionComponent<
  React.DataHTMLAttributes<HTMLDataElement> & ElementProps<HTMLDataElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('data', getProps(theme)(props))
}

export const Datalist: React.FunctionComponent<
  React.HTMLAttributes<HTMLDataListElement> & ElementProps<HTMLDataListElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('datalist', getProps(theme)(props))
}

export const Dd: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('dd', getProps(theme)(props))
}

export const Del: React.FunctionComponent<
  React.HTMLAttributes<HTMLModElement> & ElementProps<HTMLModElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('del', getProps(theme)(props))
}

export const Details: React.FunctionComponent<
  React.DetailsHTMLAttributes<HTMLDetailsElement> &
    ElementProps<HTMLDetailsElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('details', getProps(theme)(props))
}

export const Dfn: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('dfn', getProps(theme)(props))
}

export const Dialog: React.FunctionComponent<
  React.DialogHTMLAttributes<HTMLDialogElement> &
    ElementProps<HTMLDialogElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('dialog', getProps(theme)(props))
}

export const Div: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement> & ElementProps<HTMLDivElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('div', getProps(theme)(props))
}

export const Dl: React.FunctionComponent<
  React.HTMLAttributes<HTMLDListElement> & ElementProps<HTMLDListElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('dl', getProps(theme)(props))
}

export const Dt: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('dt', getProps(theme)(props))
}

export const Em: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('em', getProps(theme)(props))
}

export const Embed: React.FunctionComponent<
  React.EmbedHTMLAttributes<HTMLEmbedElement> & ElementProps<HTMLEmbedElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('embed', getProps(theme)(props))
}

export const Fieldset: React.FunctionComponent<
  React.FieldsetHTMLAttributes<HTMLFieldSetElement> &
    ElementProps<HTMLFieldSetElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('fieldset', getProps(theme)(props))
}

export const Figcaption: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('figcaption', getProps(theme)(props))
}

export const Figure: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('figure', getProps(theme)(props))
}

export const Footer: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('footer', getProps(theme)(props))
}

export const Form: React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement> & ElementProps<HTMLFormElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('form', getProps(theme)(props))
}

export const H1: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadingElement> & ElementProps<HTMLHeadingElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('h1', getProps(theme)(props))
}

export const H2: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadingElement> & ElementProps<HTMLHeadingElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('h2', getProps(theme)(props))
}

export const H3: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadingElement> & ElementProps<HTMLHeadingElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('h3', getProps(theme)(props))
}

export const H4: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadingElement> & ElementProps<HTMLHeadingElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('h4', getProps(theme)(props))
}

export const H5: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadingElement> & ElementProps<HTMLHeadingElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('h5', getProps(theme)(props))
}

export const H6: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadingElement> & ElementProps<HTMLHeadingElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('h6', getProps(theme)(props))
}

export const Head: React.FunctionComponent<
  React.HTMLAttributes<HTMLHeadElement> & ElementProps<HTMLHeadElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('head', getProps(theme)(props))
}

export const Header: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('header', getProps(theme)(props))
}

export const Hgroup: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('hgroup', getProps(theme)(props))
}

export const Hr: React.FunctionComponent<
  React.HTMLAttributes<HTMLHRElement> & ElementProps<HTMLHRElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('hr', getProps(theme)(props))
}

export const Html: React.FunctionComponent<
  React.HtmlHTMLAttributes<HTMLHtmlElement> & ElementProps<HTMLHtmlElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('html', getProps(theme)(props))
}

export const I: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('i', getProps(theme)(props))
}

export const Iframe: React.FunctionComponent<
  React.IframeHTMLAttributes<HTMLIFrameElement> &
    ElementProps<HTMLIFrameElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('iframe', getProps(theme)(props))
}

export const Img: React.FunctionComponent<
  React.ImgHTMLAttributes<HTMLImageElement> & ElementProps<HTMLImageElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('img', getProps(theme)(props))
}

export const Input: React.FunctionComponent<
  React.InputHTMLAttributes<HTMLInputElement> & ElementProps<HTMLInputElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('input', getProps(theme)(props))
}

export const Ins: React.FunctionComponent<
  React.InsHTMLAttributes<HTMLModElement> & ElementProps<HTMLModElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('ins', getProps(theme)(props))
}

export const Kbd: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('kbd', getProps(theme)(props))
}

export const Label: React.FunctionComponent<
  React.LabelHTMLAttributes<HTMLLabelElement> & ElementProps<HTMLLabelElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('label', getProps(theme)(props))
}

export const Legend: React.FunctionComponent<
  React.HTMLAttributes<HTMLLegendElement> & ElementProps<HTMLLegendElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('legend', getProps(theme)(props))
}

export const Li: React.FunctionComponent<
  React.LiHTMLAttributes<HTMLLIElement> & ElementProps<HTMLLIElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('li', getProps(theme)(props))
}

export const Link: React.FunctionComponent<
  React.LinkHTMLAttributes<HTMLLinkElement> & ElementProps<HTMLLinkElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('link', getProps(theme)(props))
}

export const Main: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('main', getProps(theme)(props))
}

export const Map: React.FunctionComponent<
  React.MapHTMLAttributes<HTMLMapElement> & ElementProps<HTMLMapElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('map', getProps(theme)(props))
}

export const Mark: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('mark', getProps(theme)(props))
}

export const Menu: React.FunctionComponent<
  React.MenuHTMLAttributes<HTMLMenuElement> & ElementProps<HTMLMenuElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('menu', getProps(theme)(props))
}

export const Meta: React.FunctionComponent<
  React.MetaHTMLAttributes<HTMLMetaElement> & ElementProps<HTMLMetaElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('meta', getProps(theme)(props))
}

export const Meter: React.FunctionComponent<
  React.MeterHTMLAttributes<HTMLMeterElement> & ElementProps<HTMLMeterElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('meter', getProps(theme)(props))
}

export const Nav: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('nav', getProps(theme)(props))
}

export const Noscript: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('noscript', getProps(theme)(props))
}

export const Object: React.FunctionComponent<
  React.ObjectHTMLAttributes<HTMLObjectElement> &
    ElementProps<HTMLObjectElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('object', getProps(theme)(props))
}

export const Ol: React.FunctionComponent<
  React.OlHTMLAttributes<HTMLOListElement> & ElementProps<HTMLOListElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('ol', getProps(theme)(props))
}

export const Optgroup: React.FunctionComponent<
  React.OptgroupHTMLAttributes<HTMLOptGroupElement> &
    ElementProps<HTMLOptGroupElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('optgroup', getProps(theme)(props))
}

export const Option: React.FunctionComponent<
  React.OptionHTMLAttributes<HTMLOptionElement> &
    ElementProps<HTMLOptionElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('option', getProps(theme)(props))
}

export const Output: React.FunctionComponent<
  React.OutputHTMLAttributes<HTMLOutputElement> &
    ElementProps<HTMLOutputElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('output', getProps(theme)(props))
}

export const P: React.FunctionComponent<
  React.HTMLAttributes<HTMLParagraphElement> &
    ElementProps<HTMLParagraphElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('p', getProps(theme)(props))
}

export const Picture: React.FunctionComponent<
  React.HTMLAttributes<HTMLPictureElement> & ElementProps<HTMLPictureElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('picture', getProps(theme)(props))
}

export const Pre: React.FunctionComponent<
  React.HTMLAttributes<HTMLPreElement> & ElementProps<HTMLPreElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('pre', getProps(theme)(props))
}

export const Progress: React.FunctionComponent<
  React.ProgressHTMLAttributes<HTMLProgressElement> &
    ElementProps<HTMLProgressElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('progress', getProps(theme)(props))
}

export const Q: React.FunctionComponent<
  React.QuoteHTMLAttributes<HTMLQuoteElement> & ElementProps<HTMLQuoteElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('q', getProps(theme)(props))
}

export const Rp: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('rp', getProps(theme)(props))
}

export const Rt: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('rt', getProps(theme)(props))
}

export const Ruby: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('ruby', getProps(theme)(props))
}

export const S: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('s', getProps(theme)(props))
}

export const Samp: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('samp', getProps(theme)(props))
}

export const Script: React.FunctionComponent<
  React.ScriptHTMLAttributes<HTMLScriptElement> &
    ElementProps<HTMLScriptElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('script', getProps(theme)(props))
}

export const Search: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('search', getProps(theme)(props))
}

export const Section: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('section', getProps(theme)(props))
}

export const Select: React.FunctionComponent<
  React.SelectHTMLAttributes<HTMLSelectElement> &
    ElementProps<HTMLSelectElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('select', getProps(theme)(props))
}

export const Slot: React.FunctionComponent<
  React.SlotHTMLAttributes<HTMLSlotElement> & ElementProps<HTMLSlotElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('slot', getProps(theme)(props))
}

export const Small: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('small', getProps(theme)(props))
}

export const Source: React.FunctionComponent<
  React.SourceHTMLAttributes<HTMLSourceElement> &
    ElementProps<HTMLSourceElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('source', getProps(theme)(props))
}

export const Span: React.FunctionComponent<
  React.HTMLAttributes<HTMLSpanElement> & ElementProps<HTMLSpanElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('span', getProps(theme)(props))
}

export const Strong: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('strong', getProps(theme)(props))
}

export const Style: React.FunctionComponent<
  React.StyleHTMLAttributes<HTMLStyleElement> & ElementProps<HTMLStyleElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('style', getProps(theme)(props))
}

export const Sub: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('sub', getProps(theme)(props))
}

export const Summary: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('summary', getProps(theme)(props))
}

export const Sup: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('sup', getProps(theme)(props))
}

export const Table: React.FunctionComponent<
  React.TableHTMLAttributes<HTMLTableElement> & ElementProps<HTMLTableElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('table', getProps(theme)(props))
}

export const Tbody: React.FunctionComponent<
  React.HTMLAttributes<HTMLTableSectionElement> &
    ElementProps<HTMLTableSectionElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('tbody', getProps(theme)(props))
}

export const Td: React.FunctionComponent<
  React.TdHTMLAttributes<HTMLTableCellElement> &
    ElementProps<HTMLTableCellElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('td', getProps(theme)(props))
}

export const Template: React.FunctionComponent<
  React.HTMLAttributes<HTMLTemplateElement> & ElementProps<HTMLTemplateElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('template', getProps(theme)(props))
}

export const Textarea: React.FunctionComponent<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    ElementProps<HTMLTextAreaElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('textarea', getProps(theme)(props))
}

export const Tfoot: React.FunctionComponent<
  React.HTMLAttributes<HTMLTableSectionElement> &
    ElementProps<HTMLTableSectionElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('tfoot', getProps(theme)(props))
}

export const Th: React.FunctionComponent<
  React.ThHTMLAttributes<HTMLTableCellElement> &
    ElementProps<HTMLTableCellElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('th', getProps(theme)(props))
}

export const Thead: React.FunctionComponent<
  React.HTMLAttributes<HTMLTableSectionElement> &
    ElementProps<HTMLTableSectionElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('thead', getProps(theme)(props))
}

export const Time: React.FunctionComponent<
  React.TimeHTMLAttributes<HTMLTimeElement> & ElementProps<HTMLTimeElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('time', getProps(theme)(props))
}

export const Title: React.FunctionComponent<
  React.HTMLAttributes<HTMLTitleElement> & ElementProps<HTMLTitleElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('title', getProps(theme)(props))
}

export const Tr: React.FunctionComponent<
  React.HTMLAttributes<HTMLTableRowElement> & ElementProps<HTMLTableRowElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('tr', getProps(theme)(props))
}

export const Track: React.FunctionComponent<
  React.TrackHTMLAttributes<HTMLTrackElement> & ElementProps<HTMLTrackElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('track', getProps(theme)(props))
}

export const U: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('u', getProps(theme)(props))
}

export const Ul: React.FunctionComponent<
  React.HTMLAttributes<HTMLUListElement> & ElementProps<HTMLUListElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('ul', getProps(theme)(props))
}

export const Var: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('var', getProps(theme)(props))
}

export const Video: React.FunctionComponent<
  React.VideoHTMLAttributes<HTMLVideoElement> & ElementProps<HTMLVideoElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('video', getProps(theme)(props))
}

export const Wbr: React.FunctionComponent<
  React.HTMLAttributes<HTMLElement> & ElementProps<HTMLElement>
> = (props) => {
  const theme = useTheme()
  return React.createElement('wbr', getProps(theme)(props))
}
