import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global-style'
// import { Spinner } from './components/shared/spinner'
import { theme } from './lib/theme'
import Box from './components/box/box'
import Autocomplete from './components/autocomplete/autocomplete'

console.info(`⚛️ ${React.version}`)

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

interface Person {
  id: string
  avatar: string
  name: string
  position: string
}

const defaultPerson = {
  id: '',
  avatar: '',
  name: '',
  position: ''
}

const mockValuesStr: string[] = ['My evaluations', 'My steps']

const mockValuesObj: Person[] = [
  { id: '3', avatar: '', name: 'Ross Rich', position: 'Manager' },
  { id: '4', avatar: '', name: 'Harry Avery', position: 'Associate' },
  { id: '5', avatar: '', name: 'Amit Patel', position: 'Associate' },
  { id: '6', avatar: '', name: 'Suzy Anderson', position: 'Associate' }
]

const App = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('My steps')
  const [selectedPerson, setSelectedPerson] = useState(defaultPerson)

  const onMenuItemClick = (event: object, item: any) => {
    setSelectedMenuItem(item)
  }

  const onPersonClick = (event: object, item: any) => {
    setSelectedPerson(item)
  }

  return (
    <>
      <GlobalStyle />
      {/*<Spinner />*/}
      <ThemeProvider theme={theme}>
        <Container>
          <Autocomplete
            value={mockValuesStr}
            selected={selectedMenuItem}
            onChange={onMenuItemClick}
          />
          <Box my={0} mx={48}>
            <Autocomplete
              showInput
              value={mockValuesObj}
              selected={selectedPerson}
              onChange={onPersonClick}
            />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
