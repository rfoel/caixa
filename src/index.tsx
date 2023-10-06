import { createElement, forwardRef } from 'react'

import { useTheme } from './theme'
import { CSSResponsiveProperties, getProps } from './transform'

export type BoxProps = (
  | ({
      as?: 'a'
      ref?: React.Ref<HTMLAnchorElement>
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({
      as?: 'area'
      ref?: React.Ref<HTMLAreaElement>
    } & React.AreaHTMLAttributes<HTMLAreaElement>)
  | ({
      as?: 'audio'
      ref?: React.Ref<HTMLAudioElement>
    } & React.AudioHTMLAttributes<HTMLAudioElement>)
  | ({
      as?: 'base'
      ref?: React.Ref<HTMLBaseElement>
    } & React.BaseHTMLAttributes<HTMLBaseElement>)
  | ({
      as?: 'blockquote'
      ref?: React.Ref<HTMLQuoteElement>
    } & React.QuoteHTMLAttributes<HTMLQuoteElement>)
  | ({
      as?: 'body'
      ref?: React.Ref<HTMLBodyElement>
    } & React.HTMLAttributes<HTMLBodyElement>)
  | ({
      as?: 'br'
      ref?: React.Ref<HTMLBRElement>
    } & React.HTMLAttributes<HTMLBRElement>)
  | ({
      as?: 'button'
      ref?: React.Ref<HTMLButtonElement>
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      as?: 'canvas'
      ref?: React.Ref<HTMLCanvasElement>
    } & React.CanvasHTMLAttributes<HTMLCanvasElement>)
  | ({
      as?: 'caption'
      ref?: React.Ref<HTMLTableCaptionElement>
    } & React.TableHTMLAttributes<HTMLTableCaptionElement>)
  | ({
      as?: 'col'
      ref?: React.Ref<HTMLTableColElement>
    } & React.HTMLAttributes<HTMLTableColElement>)
  | ({
      as?: 'colgroup'
      ref?: React.Ref<HTMLTableColElement>
    } & React.HTMLAttributes<HTMLTableColElement>)
  | ({
      as?: 'data'
      ref?: React.Ref<HTMLDataElement>
    } & React.DataHTMLAttributes<HTMLDataElement>)
  | ({
      as?: 'datalist'
      ref?: React.Ref<HTMLDataListElement>
    } & React.HTMLAttributes<HTMLDataListElement>)
  | ({
      as?: 'del'
      ref?: React.Ref<HTMLModElement>
    } & React.HTMLAttributes<HTMLModElement>)
  | ({
      as?: 'details'
      ref?: React.Ref<HTMLDetailsElement>
    } & React.DetailsHTMLAttributes<HTMLDetailsElement>)
  | ({
      as?: 'dialog'
      ref?: React.Ref<HTMLDialogElement>
    } & React.DialogHTMLAttributes<HTMLDialogElement>)
  | ({
      as?: 'dl'
      ref?: React.Ref<HTMLDListElement>
    } & React.HTMLAttributes<HTMLDListElement>)
  | ({
      as?: 'embed'
      ref?: React.Ref<HTMLEmbedElement>
    } & React.EmbedHTMLAttributes<HTMLEmbedElement>)
  | ({
      as?: 'fieldset'
      ref?: React.Ref<HTMLFieldSetElement>
    } & React.FieldsetHTMLAttributes<HTMLFieldSetElement>)
  | ({
      as?: 'form'
      ref?: React.Ref<HTMLFormElement>
    } & React.FormHTMLAttributes<HTMLFormElement>)
  | ({
      as?: 'h1'
      ref?: React.Ref<HTMLHeadingElement>
    } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({
      as?: 'h2'
      ref?: React.Ref<HTMLHeadingElement>
    } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({
      as?: 'h3'
      ref?: React.Ref<HTMLHeadingElement>
    } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({
      as?: 'h4'
      ref?: React.Ref<HTMLHeadingElement>
    } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({
      as?: 'h5'
      ref?: React.Ref<HTMLHeadingElement>
    } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({
      as?: 'h6'
      ref?: React.Ref<HTMLHeadingElement>
    } & React.HTMLAttributes<HTMLHeadingElement>)
  | ({
      as?: 'head'
      ref?: React.Ref<HTMLHeadElement>
    } & React.HTMLAttributes<HTMLHeadElement>)
  | ({
      as?: 'hr'
      ref?: React.Ref<HTMLHRElement>
    } & React.HTMLAttributes<HTMLHRElement>)
  | ({
      as?: 'html'
      ref?: React.Ref<HTMLHtmlElement>
    } & React.HtmlHTMLAttributes<HTMLHtmlElement>)
  | ({
      as?: 'iframe'
      ref?: React.Ref<HTMLIFrameElement>
    } & React.IframeHTMLAttributes<HTMLIFrameElement>)
  | ({
      as?: 'img'
      ref?: React.Ref<HTMLImageElement>
    } & React.ImgHTMLAttributes<HTMLImageElement>)
  | ({
      as?: 'ins'
      ref?: React.Ref<HTMLModElement>
    } & React.InsHTMLAttributes<HTMLModElement>)
  | ({
      as?: 'input'
      ref?: React.Ref<HTMLInputElement>
    } & React.InputHTMLAttributes<HTMLInputElement>)
  | ({
      as?: 'label'
      ref?: React.Ref<HTMLLabelElement>
    } & React.LabelHTMLAttributes<HTMLLabelElement>)
  | ({
      as?: 'legend'
      ref?: React.Ref<HTMLLegendElement>
    } & React.HTMLAttributes<HTMLLegendElement>)
  | ({
      as?: 'li'
      ref?: React.Ref<HTMLLIElement>
    } & React.LiHTMLAttributes<HTMLLIElement>)
  | ({
      as?: 'link'
      ref?: React.Ref<HTMLLinkElement>
    } & React.LinkHTMLAttributes<HTMLLinkElement>)
  | ({
      as?: 'map'
      ref?: React.Ref<HTMLMapElement>
    } & React.MapHTMLAttributes<HTMLMapElement>)
  | ({
      as?: 'menu'
      ref?: React.Ref<HTMLMenuElement>
    } & React.MenuHTMLAttributes<HTMLMenuElement>)
  | ({
      as?: 'meta'
      ref?: React.Ref<HTMLMetaElement>
    } & React.MetaHTMLAttributes<HTMLMetaElement>)
  | ({
      as?: 'meter'
      ref?: React.Ref<HTMLMeterElement>
    } & React.MeterHTMLAttributes<HTMLMeterElement>)
  | ({
      as?: 'object'
      ref?: React.Ref<HTMLObjectElement>
    } & React.ObjectHTMLAttributes<HTMLObjectElement>)
  | ({
      as?: 'ol'
      ref?: React.Ref<HTMLOListElement>
    } & React.OlHTMLAttributes<HTMLOListElement>)
  | ({
      as?: 'optgroup'
      ref?: React.Ref<HTMLOptGroupElement>
    } & React.OptgroupHTMLAttributes<HTMLOptGroupElement>)
  | ({
      as?: 'option'
      ref?: React.Ref<HTMLOptionElement>
    } & React.OptionHTMLAttributes<HTMLOptionElement>)
  | ({
      as?: 'output'
      ref?: React.Ref<HTMLOutputElement>
    } & React.OutputHTMLAttributes<HTMLOutputElement>)
  | ({
      as?: 'p'
      ref?: React.Ref<HTMLParagraphElement>
    } & React.HTMLAttributes<HTMLParagraphElement>)
  | ({
      as?: 'picture'
      ref?: React.Ref<HTMLPictureElement>
    } & React.HTMLAttributes<HTMLPictureElement>)
  | ({
      as?: 'pre'
      ref?: React.Ref<HTMLPreElement>
    } & React.HTMLAttributes<HTMLPreElement>)
  | ({
      as?: 'progress'
      ref?: React.Ref<HTMLProgressElement>
    } & React.ProgressHTMLAttributes<HTMLProgressElement>)
  | ({
      as?: 'quote'
      ref?: React.Ref<HTMLQuoteElement>
    } & React.QuoteHTMLAttributes<HTMLQuoteElement>)
  | ({
      as?: 'script'
      ref?: React.Ref<HTMLScriptElement>
    } & React.ScriptHTMLAttributes<HTMLScriptElement>)
  | ({
      as?: 'select'
      ref?: React.Ref<HTMLSelectElement>
    } & React.SelectHTMLAttributes<HTMLSelectElement>)
  | ({
      as?: 'slot'
      ref?: React.Ref<HTMLSlotElement>
    } & React.SlotHTMLAttributes<HTMLSlotElement>)
  | ({
      as?: 'source'
      ref?: React.Ref<HTMLSourceElement>
    } & React.SourceHTMLAttributes<HTMLSourceElement>)
  | ({
      as?: 'span'
      ref?: React.Ref<HTMLSpanElement>
    } & React.HTMLAttributes<HTMLSpanElement>)
  | ({
      as?: 'style'
      ref?: React.Ref<HTMLStyleElement>
    } & React.StyleHTMLAttributes<HTMLStyleElement>)
  | ({
      as?: 'table'
      ref?: React.Ref<HTMLTableElement>
    } & React.TableHTMLAttributes<HTMLTableElement>)
  | ({
      as?: 'tbody'
      ref?: React.Ref<HTMLTableSectionElement>
    } & React.HTMLAttributes<HTMLTableSectionElement>)
  | ({
      as?: 'td'
      ref?: React.Ref<HTMLTableCellElement>
    } & React.TdHTMLAttributes<HTMLTableCellElement>)
  | ({
      as?: 'template'
      ref?: React.Ref<HTMLTemplateElement>
    } & React.HTMLAttributes<HTMLTemplateElement>)
  | ({
      as?: 'textarea'
      ref?: React.Ref<HTMLTextAreaElement>
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
  | ({
      as?: 'tfoot'
      ref?: React.Ref<HTMLTableSectionElement>
    } & React.HTMLAttributes<HTMLTableSectionElement>)
  | ({
      as?: 'th'
      ref?: React.Ref<HTMLTableCellElement>
    } & React.ThHTMLAttributes<HTMLTableCellElement>)
  | ({
      as?: 'thead'
      ref?: React.Ref<HTMLTableSectionElement>
    } & React.HTMLAttributes<HTMLTableSectionElement>)
  | ({
      as?: 'time'
      ref?: React.Ref<HTMLTimeElement>
    } & React.TimeHTMLAttributes<HTMLTimeElement>)
  | ({
      as?: 'title'
      ref?: React.Ref<HTMLTitleElement>
    } & React.HTMLAttributes<HTMLTitleElement>)
  | ({
      as?: 'tr'
      ref?: React.Ref<HTMLTableRowElement>
    } & React.HTMLAttributes<HTMLTableRowElement>)
  | ({
      as?: 'track'
      ref?: React.Ref<HTMLTrackElement>
    } & React.TrackHTMLAttributes<HTMLTrackElement>)
  | ({
      as?: 'ul'
      ref?: React.Ref<HTMLUListElement>
    } & React.HTMLAttributes<HTMLUListElement>)
  | ({
      as?: 'video'
      ref?: React.Ref<HTMLVideoElement>
    } & React.VideoHTMLAttributes<HTMLVideoElement>)
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
      ref?: React.Ref<HTMLElement>
    } & React.HTMLAttributes<HTMLElement>)
) &
  CSSResponsiveProperties

export const Box: React.FunctionComponent<BoxProps> = forwardRef(
  ({ as = 'div', ...props }, ref) => {
    const theme = useTheme()
    return createElement(as, { ...getProps(theme)(props), ref })
  },
)

export * from './theme'
