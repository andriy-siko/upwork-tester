import React, { ReactNode } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMenuItem = styled.li.attrs((props) => ({
  palette: props.theme.palette
}))`
  width: auto;
  overflow: hidden;
  min-height: 40px;
  padding-top: ${({ theme }) => theme.spacing(1)}px;
  padding-bottom: ${({ theme }) => theme.spacing(1)}px;
  white-space: nowrap;
  font-size: 14px;
  line-height: 20px;
  color: #192533;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;

  &.gutters {
    padding-left: 21px;
    padding-right: 21px;
  }

  &:not(.selected):hover {
    background-color: ${({ palette }) => palette.action.hover};
  }

  &.selected {
    background-color: ${({ palette }) => palette.primary.main};
    color: ${({ palette }) => palette.common.white};

    .list-item-root.secondary {
      color: ${({ palette }) => palette.action.selected};
    }
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`

interface MenuItemProps {
  children: ReactNode
  disabled?: boolean
  selected?: boolean
  onClick?: (event: object) => void
}

function MenuItem(props: MenuItemProps) {
  const { children, disabled, selected, onClick } = props

  const selectedClassName = selected ? 'selected' : ''
  const disabledClassName = disabled ? 'disabled' : ''

  return (
    <StyledMenuItem
      className={`gutters ${selectedClassName} ${disabledClassName}`}
      onClick={onClick}
    >
      {children}
    </StyledMenuItem>
  )
}

export default MenuItem
