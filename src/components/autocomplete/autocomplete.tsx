import React, { Fragment, useState, useCallback, useMemo } from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import Paper from '../paper/paper'
import Input from '../input/input'
import Divider from '../divider/divider'
import Menu from '../menu/menu'
import MenuItem from '../menu/menu-item'
import ListItemIcon from '../list/list-item-icon'
import ListItemText from '../list/list-item-text'
import Avatar from '../avatar/avatar'
import Box from '../box/box'

interface Person {
  id: string
  avatar: string
  name: string
  position: string
}

interface AutocompleteProps {
  showInput?: boolean
  value: any[]
  selected: Person | string
  onChange: (event: object, item: Person | string) => void
}

const isStr = (value: any[], selected: string | object) =>
  value.length && typeof value[0] === 'string' && typeof selected === 'string'

function Autocomplete(props: AutocompleteProps) {
  const { showInput, value, selected, onChange } = props

  const [dataSource] = useState(value)
  const [searchValue, setSearchValue] = useState('')

  const onSearchValueChange = useCallback((value) => {
    setSearchValue(value)
  }, [])

  const options = useMemo(() => {
    if (!searchValue) {
      return dataSource
    }

    if (isStr(value, selected)) {
      return dataSource.filter((data: any) =>
        data.toLowerCase().includes(searchValue.toLowerCase())
      )
    }

    return dataSource.filter((data: any) =>
      data.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  }, [selected, value, dataSource, searchValue])

  const renderMenuItems = () => {
    if (value && value.length) {
      if (isStr(value, selected)) {
        return options.map((name: string) => (
          <MenuItem
            key={name}
            selected={name === selected}
            onClick={(event) => onChange(event, name)}
          >
            <ListItemText>{name}</ListItemText>
          </MenuItem>
        ))
      } else if (!isStr(value, selected)) {
        return options.map((item: Person) => (
          <MenuItem
            key={item.id}
            selected={item.id === (typeof selected === 'object' && selected.id)}
            onClick={(event) => onChange(event, item)}
          >
            <ListItemIcon>
              <Avatar />
              {item.avatar && (
                <Box position="absolute" left={14}>
                  <Avatar width="22px" height="22px" />
                </Box>
              )}
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
            {item.position && (
              <Box ml={8}>
                <ListItemText size="medium" color="secondary">
                  {item.position}
                </ListItemText>
              </Box>
            )}
          </MenuItem>
        ))
      }
    }
  }

  return (
    <Paper>
      {showInput && (
        <Fragment>
          <Input
            value={searchValue}
            placeholder="Filter by name"
            onChange={(event) => onSearchValueChange(event.target.value)}
          />
          <Divider />
        </Fragment>
      )}
      <Menu>{renderMenuItems()}</Menu>
    </Paper>
  )
}

export default Autocomplete
