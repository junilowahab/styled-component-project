import React, { useState } from 'react'
import styled from 'styled-components'

const ThemeButton = styled.button`
    height: 50px;
    width: 100px;
    border-radius: 0;
    border: 4px solid ${(props) => props.light ? 'black' : 'white'};
    border-radius: 4px;
    background-color: ${(props) => props.light ? 'white' : 'black'};
    color: ${(props) => props.light ? 'black' : 'white'};
    font-size: 17px;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
`

export const ThemeToggle = ({light, toggleTheme}) => {
  return (
    <>
      <ThemeButton onClick={toggleTheme} light={light}>Theme</ThemeButton>
    </>
  )
}
