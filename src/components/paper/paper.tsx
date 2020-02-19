import styled, { css } from 'styled-components'

const Paper = styled.div`
  ${({ theme: { palette, shape, shadows } }) => css`
    background: ${palette.common.white};
    border: ${shape.border};
    border-radius: ${shape.borderRadius};
    box-shadow: ${shadows['1']};
  `}
`

export default Paper
