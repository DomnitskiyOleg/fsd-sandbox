import { Theme, SxProps } from '@mui/material/styles'
import { CSSObject } from '@mui/system'

export type GetCssFunctionProps = {
    theme: Theme
}

export type Styles = Record<string, SxProps<Theme>>
export type getCssFunction = (_props: GetCssFunctionProps) => CSSObject
