import React from 'react'
import styled from 'styled-components'
import { ThemeToggle } from './ThemeToggle'

const StyledName = styled.section`
    display: flex;
    justify-content: ${(props) => props.$last ? 'flex-start' : 'flex-end'};
    align-items: center;
    width: 50vw;
    height: 100vh;
    background-color: ${(props) => props.light ? (props.$last ? 'black' : 'white') : (props.$last ? 'white' : 'black')};
    color: ${(props) => props.light ? (props.$last ? 'white' : 'black') : (props.$last ? 'black' : 'white')};
    font-size: 90px;
    padding: 20px;
`

const Name = ({light}) => {
  return (
    <section style={{height: '100vh', width: '100vw', display: 'flex'}}>
        <StyledName light={light}>Junilo</StyledName>
        <StyledName $last light={light}>Wahab</StyledName>
    </section>
  )
}

export default Name