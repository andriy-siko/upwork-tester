import styled, { css } from 'styled-components'

interface BoxProps {
  unit?: string
  mt?: number
  mb?: number
  ml?: number
  mr?: number
  my?: number
  mx?: number
  position?: string
  left?: number
}

const Box = styled.div.attrs((props: BoxProps) => ({
  mt: props.mt || 0,
  mb: props.mb || 0,
  my: props.my || 0,
  ml: props.ml || 0,
  mr: props.mr || 0,
  mx: props.mx || 0,
  position: props.position || 'relative',
  left: props.left || 0
}))<BoxProps>`
  ${({ mt, mb, my, ml, mr, mx, position, left }) => css`
    margin-top: ${mt || my}px;
    margin-bottom: ${mb || my}px;
    margin-left: ${ml || mx}px;
    margin-right: ${mr || mx}px;
    position: ${position};
    left: ${left}px;
  `}
`

export default Box
