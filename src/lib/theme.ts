import { DefaultTheme } from 'styled-components'
import { Colors, UI, FontSizes } from './style-guide'

const theme: DefaultTheme = {
  palette: {
    common: {
      black: Colors.PureBlack,
      white: Colors.PureWhite
    },
    primary: {
      main: Colors.AccordBlue
    },
    text: {
      primary: Colors.TX1,
      secondary: Colors.TX2,
      placeholder: Colors.TX3
    },
    action: {
      selected: Colors.TX4,
      hover: Colors.BG3
    },
    background: {
      BG1: Colors.BG1,
      BG2: Colors.BG2,
      BG3: Colors.BG3,
      BG4: Colors.BG4
    }
  },
  spacing: (n = 1) => n * 8,
  shadows: {
    0: UI.BOX_SHADOW_NONE,
    1: UI.BOX_SHADOW_1
  },
  typography: {
    caption: `{
      font-size: ${FontSizes.medium}
    }`
  },
  shape: {
    border: UI.BORDER,
    borderRadius: UI.BORDER_RADIUS
  }
}

export { theme }
