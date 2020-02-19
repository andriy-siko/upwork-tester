import styled, { css } from 'styled-components'

interface AvatarProps {
  width?: string
  height?: string
}

const Avatar = styled.div<AvatarProps>`
  ${({ theme, width, height }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    width: ${width || '24px'};
    height: ${height || '24px'};
    border: ${theme.shape.border};
    background-color: ${theme.palette.background.BG1};
  `}
`

export default Avatar
