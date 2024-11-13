import { CSSObject, SxProps, Theme } from '@mui/material'

export type Styles = Record<string, SxProps<Theme>>
export type getCssFunction = ({theme}: {theme:Theme}) => CSSObject

   