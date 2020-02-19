import styled, { css } from 'styled-components'

interface ListItemTextProps {
  size?: string
  color?: string
}

const ListItemText = styled.div.attrs((props) => ({
  className: `list-item-root ${props.color === 'secondary' ? 'secondary' : ''}`
}))<ListItemTextProps>`
  ${({ theme, size, color }) => css`
    min-width: 0;
    margin-top: 4px;
    margin-bottom: 4px;

    ${size === 'medium' && `& ${theme.typography.caption}`}
    ${color === 'secondary' &&
      `& {
        color: ${theme.palette.text.secondary}
      }`}
  `}
`

export default ListItemText
