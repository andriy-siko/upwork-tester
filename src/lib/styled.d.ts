import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string
        white: string
      }
      primary: {
        main: string
      }
      text: {
        primary: string
        secondary: string
        placeholder: string
      }
      action: {
        selected: string
        hover: string
      }
      background: {
        BG1: string
        BG2: string
        BG3: string
        BG4: string
      }
    }
    spacing: (n: number) => number
    shadows: {
      0: string
      1: string
    }
    typography: {
      caption: string
    }
    shape: {
      border: string
      borderRadius: string | number
    }
  }
}
