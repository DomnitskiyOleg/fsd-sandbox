import { Button, ButtonGroup, useColorScheme } from '@mui/material'

export default function ThemeTest() {
  const { setMode, mode } = useColorScheme()
  return (
    <ButtonGroup variant='contained' aria-label='Basic button group'>
      <Button>One</Button>
      <Button>Two</Button>
      <Button
        onClick={() => {
          setMode(mode === 'dark' ? 'light' : 'dark')
        }}
      >
        Three
      </Button>
    </ButtonGroup>
  )
}
