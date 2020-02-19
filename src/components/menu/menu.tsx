import React, { ReactNode } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;

  &.menu-list-padding {
    padding: ${(props) => `${props.theme.spacing(1)}px 0px`};
  }
`

interface MenuProps {
  children: ReactNode
}

function Menu(props: MenuProps) {
  const { children } = props

  return <StyledMenu className="menu-list-padding">{children}</StyledMenu>
}

export default Menu
