import styled from 'styled-components'

const Input = styled.input.attrs(() => ({
  // type: 'text'
}))`
  padding: 14px 21px;
  min-width: 270px;
  color: ${(props) => props.theme.palette.text.placeholder};
`

export default Input
