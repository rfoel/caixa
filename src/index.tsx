import { createElement, forwardRef } from 'react'

import { useTheme } from './theme'
import { CSSResponsiveProperties, getProps } from './transform'

export type BoxProps = (
  | ({ as?: 'a' } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as?: 'area' } & React.AreaHTMLAttributes<HTMLAreaElement>)
  | ({ as?: 'audio' } & React.AudioHTMLAttributes<HTMLAudioElement>)
  | ({ as?: 'base' } & React.BaseHTMLAttributes<HTMLBaseElement>)
  | ({ as?: 'blockquote' } & React.QuoteHTMLAttributes<HTMLQuoteElement>)
  | ({ as?: 'body' } & React.HTMLAttributes<HTMLBodyElement>)
  | ({ as?: 'br' } & React.HTMLAttributes<HTMLBRElement>)
  | ({ as?: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as?: 'canvas' } & React.CanvasHTMLAttributes<HTMLCanvasElement>)
  | ({ as?: 'caption' } & React.TableHTMLAttributes<HTMLTableCaptionElement>)
  | ({ as?: 'col' } & React.HTMLAttributes<HTMLTableColElement>)
  | ({ as?: 'colgroup' } & React.HTMLAttributes<HTMLTableColElement>)
  | ({ as?: 'data' } & React.DataHTMLAttributes<HTMLDataElement>)
  | ({ as?: 'datalist' } & React.HTMLAttributes<HTMLDataListElement>)
  | ({ as?: 'del' } & React.HTMLAttributes<HTMLModElement>)
  | ({ as?: 'details' } & React.DetailsHTMLAttributes<HTMLDetailsElement>)
  | ({ as?: 'dialog' } & React.DialogHTMLAttributes<HTMLDialogElement>)
  | ({ as?: 'dl' } & React.HTMLAttributes<HTMLDListElement>)
  | ({ as?: 'embed' } & React.EmbedHTMLAttributes<HTMLEmbedElement>)
  | ({ as?: 'fieldset' } & React.FieldsetHTMLAttributes<HTMLFieldSetElement>)
  | ({ as?: 'form' } & React.FormHTMLAttributes<HTMLFormElement>)
  | ({ as?: 'h1' } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({ as?: 'h2' } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({ as?: 'h3' } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({ as?: 'h4' } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({ as?: 'h5' } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({ as?: 'h6' } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({ as?: 'head' } & React.HTMLAttributes<HTMLHeadElement>)
  | ({ as?: 'hr' } & React.HTMLAttributes<HTMLHRElement>)
  | ({ as?: 'html' } & React.HtmlHTMLAttributes<HTMLHtmlElement>)
  | ({ as?: 'iframe' } & React.IframeHTMLAttributes<HTMLIFrameElement>)
  | ({ as?: 'img' } & React.ImgHTMLAttributes<HTMLImageElement>)
  | ({ as?: 'ins' } & React.InsHTMLAttributes<HTMLModElement>)
  | ({ as?: 'input' } & React.InputHTMLAttributes<HTMLInputElement>)
  | ({ as?: 'label' } & React.LabelHTMLAttributes<HTMLLabelElement>)
  | ({ as?: 'legend' } & React.HTMLAttributes<HTMLLegendElement>)
  | ({ as?: 'li' } & React.LiHTMLAttributes<HTMLLIElement>)
  | ({ as?: 'link' } & React.LinkHTMLAttributes<HTMLLinkElement>)
  | ({ as?: 'map' } & React.MapHTMLAttributes<HTMLMapElement>)
  | ({ as?: 'menu' } & React.MenuHTMLAttributes<HTMLMenuElement>)
  | ({ as?: 'meta' } & React.MetaHTMLAttributes<HTMLMetaElement>)
  | ({ as?: 'meter' } & React.MeterHTMLAttributes<HTMLMeterElement>)
  | ({ as?: 'object' } & React.ObjectHTMLAttributes<HTMLObjectElement>)
  | ({ as?: 'ol' } & React.OlHTMLAttributes<HTMLOListElement>)
  | ({ as?: 'optgroup' } & React.OptgroupHTMLAttributes<HTMLOptGroupElement>)
  | ({ as?: 'option' } & React.OptionHTMLAttributes<HTMLOptionElement>)
  | ({ as?: 'output' } & React.OutputHTMLAttributes<HTMLOutputElement>)
  | ({ as?: 'p' } & React.HTMLAttributes<HTMLParagraphElement>)
  | ({ as?: 'picture' } & React.HTMLAttributes<HTMLPictureElement>)
  | ({ as?: 'pre' } & React.HTMLAttributes<HTMLPreElement>)
  | ({ as?: 'progress' } & React.ProgressHTMLAttributes<HTMLProgressElement>)
  | ({ as?: 'quote' } & React.QuoteHTMLAttributes<HTMLQuoteElement>)
  | ({ as?: 'script' } & React.ScriptHTMLAttributes<HTMLScriptElement>)
  | ({ as?: 'select' } & React.SelectHTMLAttributes<HTMLSelectElement>)
  | ({ as?: 'slot' } & React.SlotHTMLAttributes<HTMLSlotElement>)
  | ({ as?: 'source' } & React.SourceHTMLAttributes<HTMLSourceElement>)
  | ({ as?: 'span' } & React.HTMLAttributes<HTMLSpanElement>)
  | ({ as?: 'style' } & React.StyleHTMLAttributes<HTMLStyleElement>)
  | ({ as?: 'table' } & React.TableHTMLAttributes<HTMLTableElement>)
  | ({ as?: 'tbody' } & React.HTMLAttributes<HTMLTableSectionElement>)
  | ({ as?: 'td' } & React.TdHTMLAttributes<HTMLTableCellElement>)
  | ({ as?: 'template' } & React.HTMLAttributes<HTMLTemplateElement>)
  | ({ as?: 'textarea' } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
  | ({ as?: 'tfoot' } & React.HTMLAttributes<HTMLTableSectionElement>)
  | ({ as?: 'th' } & React.ThHTMLAttributes<HTMLTableCellElement>)
  | ({ as?: 'thead' } & React.HTMLAttributes<HTMLTableSectionElement>)
  | ({ as?: 'time' } & React.TimeHTMLAttributes<HTMLTimeElement>)
  | ({ as?: 'title' } & React.HTMLAttributes<HTMLTitleElement>)
  | ({ as?: 'tr' } & React.HTMLAttributes<HTMLTableRowElement>)
  | ({ as?: 'track' } & React.TrackHTMLAttributes<HTMLTrackElement>)
  | ({ as?: 'ul' } & React.HTMLAttributes<HTMLUListElement>)
  | ({ as?: 'video' } & React.VideoHTMLAttributes<HTMLVideoElement>)
  | ({
      as?:
        | 'abbr'
        | 'address'
        | 'article'
        | 'aside'
        | 'b'
        | 'bdi'
        | 'bdo'
        | 'cite'
        | 'code'
        | 'dd'
        | 'dfn'
        | 'div'
        | 'dt'
        | 'em'
        | 'figcaption'
        | 'figure'
        | 'footer'
        | 'header'
        | 'hgroup'
        | 'i'
        | 'kbd'
        | 'main'
        | 'mark'
        | 'nav'
        | 'noscript'
        | 'rp'
        | 'rt'
        | 'ruby'
        | 's'
        | 'samp'
        | 'search'
        | 'section'
        | 'small'
        | 'strong'
        | 'sub'
        | 'summary'
        | 'sup'
        | 'u'
        | 'var'
        | 'wbr'
    } & React.HTMLAttributes<HTMLElement>)
) &
  CSSResponsiveProperties

export const Box: React.FunctionComponent<BoxProps> = forwardRef(
  ({ as = 'div', ...props }, ref) => {
    const theme = useTheme()
    return createElement(as, { ref, ...getProps(theme)(props) })
  },
)

export * from './theme'
